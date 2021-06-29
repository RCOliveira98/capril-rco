import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this._formBuilder();
  }

  submit(): void {
    console.log(this.form.value);
  }

  private _formBuilder(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.minLength(5)],
      mensagem: ['', Validators.required]
    });
  }

}
