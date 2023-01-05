import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditExecutionComponent } from '../edit-execution/edit-execution.component';
import { ViewExecutionComponent } from '../view-execution/view-execution.component';

@Component({
  selector: 'app-execution-list',
  templateUrl: './execution-list.component.html',
  styleUrls: ['./execution-list.component.css']
})
export class ExecutionListComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewDialog() {
    const dialogRef = this.dialog.open(ViewExecutionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog() {
    const dialogRef = this.dialog.open(EditExecutionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
