import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private dialogService:DialogService) { }
  bodyText;
  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  showConfirm() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title:'Confirm title', 
      message:'Confirm message'
    }).subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
            alert('accepted');
        }
        else {
            alert('declined');
        }
    });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
        disposable.unsubscribe();
    },10000);
  }

}
