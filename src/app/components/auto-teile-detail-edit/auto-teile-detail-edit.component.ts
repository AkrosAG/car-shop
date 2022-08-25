import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AutoTeile } from 'src/app/model/auto-teile';
import { AutoTeileService } from 'src/app/services/auto-teile.service';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-teile-detail-edit',
  templateUrl: './auto-teile-detail-edit.component.html',
  styleUrls: ['./auto-teile-detail-edit.component.css'],
})
export class AutoTeileDetailEditComponent implements OnInit {
  autoteile!: AutoTeile;
  autoteileForm!: FormGroup;
  autoteileId: string = '';

  constructor(
    private fb: FormBuilder,
    private autoteileService: AutoTeileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe((params) => {
      this.autoteileService
        .getAutoTeile(params['autoteileId'])
        .pipe(take(1))
        .subscribe((autoteile) => {
          this.autoteile = autoteile;
          this.autoteileId = params['autoteileId'];
          this.autoteileForm.patchValue({ ...this.autoteile });
        });
    });
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
    this.autoteileService
      .updatePiece(this.autoteileId, this.autoteileForm.value)
      .pipe(take(1))
      .subscribe((response) => this.router.navigate(['', 'list']));
  }
}
