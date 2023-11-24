import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit, OnDestroy {

  clientes: { url: string }[] = [
    { url: 'assets/clientes/BASE-aerea.png' },
    { url: 'assets/clientes/camacari.png' },
    { url: 'assets/clientes/camera-lauro.png' },
    { url: 'assets/clientes/cipo.png' },
    { url: 'assets/clientes/funasa.png' },
    { url: 'assets/clientes/ifba.png' },
    { url: 'assets/clientes/marimbeta.png' },
    { url: 'assets/clientes/marinha.png' },
    { url: 'assets/clientes/portal-do-sertao.png' },
    { url: 'assets/clientes/pref-conceicao.png' },
    { url: 'assets/clientes/if-baiano.png' },
    { url: 'assets/clientes/pref-conde.png' },
    { url: 'assets/clientes/pref-govMang.png' },
    { url: 'assets/clientes/pref-ipira.png' },
    { url: 'assets/clientes/pref-matasj.png' },
    { url: 'assets/clientes/ribeirao-largo.png' },
    { url: 'assets/clientes/sao-goncalo.png' },
    { url: 'assets/clientes/senai.png' },
    { url: 'assets/clientes/sesc.png' },
    { url: 'assets/clientes/ufba.png' },
    { url: 'assets/clientes/veterinaria.png' },
  ];

  activeIndex: number = 0;
  private intervalSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.intervalSubscription = interval(5000).subscribe(() => {
      this.nextSlide();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.clientes.length;
  }

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.clientes.length) % this.clientes.length;
  }
}
