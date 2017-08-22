import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    tela: string;
    total: number;
    ultoperacao:string;

    constructor() {
        this.title = "Calculadora Web";
        this.tela ='';
        this.total = 0;
        this.ultoperacao = '+';

    }

    ngOnInit(): void {
    }

    clicou0(){
        this.tela+=0;
      }
      clicou1(){
        this.tela+=1;
      }
      clicou2(){
        this.tela+=2;
      }
      clicou3(){
        this.tela+=3;
      }
      clicou4(){
        this.tela+=4;
      }
      clicou5(){
        this.tela+=5;
      }
      clicou6(){
        this.tela+=6;
      }
      clicou7(){
        this.tela+=7;
      }
      clicou8(){
        this.tela+=8;
      }
      clicou9(){
        this.tela+=9;
      }

      //operações
      clicoumais()
      {
        if(this.tela !='')
        {
            this.ultoperacao = '+';
            this.total = this.total+Number(this.tela);
            this.tela = '';
        }
 
      }

      clicoumenos(){
        if(this.tela !='')
        {
            this.ultoperacao = '-';
            this.total = Number(this.tela);
            this.tela = '';
        }
        else
        {
            //permite iniciar cálculo com número negativo
            this.tela = "-";    
        }



      }
      clicouigual()
      {

        if(this.ultoperacao == '-')
        {
            this.total = this.total-Number(this.tela);
        }
        else
        {
            this.total = this.total+Number(this.tela);
        }

        this.tela = '';
        this.tela = ''+this.total;
        this.total = 0;
      }
    
      clicoulimpa()
      {
        this.tela ='';
        this.total = 0;
        this.ultoperacao = '+';
      }
    










}
