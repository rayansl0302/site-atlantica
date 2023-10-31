import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  formularioContato: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioContato = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      mensagem: ['', [Validators.required]],
    });
  }

  enviarFormulario() {
    if (this.formularioContato.valid) {
      const dados = this.formularioContato.value;
      console.log(dados);
    }
  }
}
