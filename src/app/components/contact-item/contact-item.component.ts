import { Component, OnInit, Input } from '@angular/core';
import {IContact} from "../../interfaces/contact-interface";


@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() contact!: IContact;
  isEveryDetailNeeded:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showExtraDetails(){
    this.isEveryDetailNeeded=true;
  }

  hideExtraDetails(){
    this.isEveryDetailNeeded=false;

  }

}
