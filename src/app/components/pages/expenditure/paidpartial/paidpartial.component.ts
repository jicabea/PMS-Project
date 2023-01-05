import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditApprovalComponent } from '../../approval/edit-approval/edit-approval.component';
import { ViewApprovalComponent } from '../../approval/view-approval/view-approval.component';
@Component({
  selector: 'app-paidpartial',
  templateUrl: './paidpartial.component.html',
  styleUrls: ['./paidpartial.component.css']
})
export class PaidpartialComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewDialog() {
    const dialogRef = this.dialog.open(ViewApprovalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog() {
    const dialogRef = this.dialog.open(EditApprovalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
