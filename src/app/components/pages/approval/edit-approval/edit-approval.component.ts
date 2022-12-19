import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-approval',
  templateUrl: './edit-approval.component.html',
  styleUrls: ['./edit-approval.component.css']
})
export class EditApprovalComponent implements OnInit {
  public ict:boolean=false
  public pmu:boolean=false
  public hemu:boolean=false
  public dpm:boolean=false
  public dcm:boolean=false
  Supervisor: string[] = ['Essaba Machum', 'Agness Mchome', 'Lucian Mtitu', 'Michael Chambi', 'Samuel Mshote'];
  constructor() { }

  changed(value: number | string) {
    let dropdownData;
    if (value == 1) {
      this.ict = true;
      this.dpm=false
      this.hemu=false
      this.pmu=false
      this.dcm=false
    }
  
    if (value == 2) {
      this.dpm=true
      this.hemu=false
      this.pmu=false
      this.ict=false
      this.dcm=false
    }

    if (value == 3) {
      this.dcm=true
      this.dpm=true
      this.hemu=false
      this.pmu=false
      this.ict=false
      this.dcm=false
    }

    if (value == 4) {
      this.hemu=true
      this.pmu=false
      this.ict=false
      this.dpm=false
      this.dcm=false
    }

    if (value == 5) {
      this.pmu=true
      this.ict=false
      this.dpm=false
      this.hemu=false
      this.dcm=false
    }
  }
  ngOnInit(): void {
  }
}
