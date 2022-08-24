import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoTeileService } from 'src/app/services/auto-teile.service';

@Component({
  selector: 'app-add-auto-teile-component',
  templateUrl: './add-auto-teile-component.component.html',
  styleUrls: ['./add-auto-teile-component.component.css'],
})
export class AddAutoTeileComponentComponent implements OnInit {
  autoteileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private autoTeilService: AutoTeileService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.autoteileForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      picture: [''],
      madeIn: [''],
    });
  }

  isRequired(control: string): boolean | undefined {
    return (
      this.autoteileForm.get(`${control}`)?.hasError('required') &&
      this.autoteileForm.get(`${control}`)?.touched
    );
  }

  isNumberRequired(control: string): boolean | undefined {
    return (
      this.autoteileForm.get(`${control}`)?.hasError('pattern') &&
      this.autoteileForm.get(`${control}`)?.dirty &&
      !this.isRequired(`${control}`)
    );
  }

  submitForm(): void {
    this.autoTeilService
      .addAuteile(this.autoteileForm.value)
      .subscribe((response) => this.router.navigate(['', 'list']));
  }
}
