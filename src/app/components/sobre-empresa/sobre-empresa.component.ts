import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-sobre-empresa',
  templateUrl: './sobre-empresa.component.html',
  styleUrls: ['./sobre-empresa.component.scss']
})
export class SobreEmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.inicializarAOS();

  }
  private inicializarAOS(): void {
    Aos.init({
      duration: 800 
    });
  }
}
