import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  Bank: string[] = ['CRDB', 'NMB', 'NBC', 'MAENDELEO BANK', 'ABSA', 'ACCESS BANK', 'AKIBA BANK', 'AMANA BANK', 'AZANIA BANK', 'DCB BANK','DTB BANK','EXIM BANK','KBC BANK'];
  Payer:string[]=['Michael Chambi', 'Luciana Mtitu', 'Juma Kimaro']

  public full:boolean=false;
  public partial:boolean=false
  public internal:boolean=false
  public external:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  // paying(value:number | string){
  //   if(value==1){
  //     this.full=true
  //     this.partial=false
  //   }
  //   if(value==2){
  //     this.partial=true
  //     this.full=false
  //   }
  // }

  doingPro(value:number | string){
    if(value==1){
      this.internal=true
      this.external=false
    }

    if(value==2){
      this.external=true
      this.internal=false
    }
  }

}
