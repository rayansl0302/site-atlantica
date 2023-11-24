import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
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
  clientesPorGrupo: { url: string }[][] = [];
  ativoGrupoIndex: number = 0;
  ativoIndex: number = 0;
  private intervalSubscription!: Subscription;
  isDesktop: boolean = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.clientesPorGrupo = this.chunkArray(this.clientes, 3);

    this.intervalSubscription = interval(8000).subscribe(() => {
      this.nextSlide();
    });

    // this.checkWindowSize();
    // window.addEventListener('resize', () => this.checkWindowSize());
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  checkWindowSize() {
    this.isDesktop = window.innerWidth >= 768; // Adjust the breakpoint as needed
  }

  nextSlide() {
    if (this.isDesktop) {
      this.ativoGrupoIndex = (this.ativoGrupoIndex + 1) % this.clientesPorGrupo.length;
    } else {
      this.ativoIndex = (this.ativoIndex + 1) % this.clientes.length;
    }
  }

  prevSlide() {
    if (this.isDesktop) {
      this.ativoGrupoIndex = (this.ativoGrupoIndex - 1 + this.clientesPorGrupo.length) % this.clientesPorGrupo.length;
      if (this.ativoGrupoIndex < 0) {
        this.ativoGrupoIndex = this.clientesPorGrupo.length - 1;
      }
    } else {
      this.ativoIndex = (this.ativoIndex - 1 + this.clientes.length) % this.clientes.length;
      if (this.ativoIndex < 0) {
        this.ativoIndex = this.clientes.length - 1;
      }
    }
  }

  private chunkArray(array: any[], size: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
}
