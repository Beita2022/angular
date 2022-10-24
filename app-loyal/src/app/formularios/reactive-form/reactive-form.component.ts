import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm: FormGroup = this.createForm();;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  //  this.createForm();
  }
  createForm(): FormGroup {
    this.loginForm = this.formBuilder.group(
      {
        username: ['valor inicial del campo',Validators.required],
      }

    );
      return this.loginForm;
  }

  hasError(): boolean {
      return this.loginForm.invalid;
  }
}
