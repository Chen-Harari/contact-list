import { Component, OnInit } from '@angular/core';
import {IContact} from "../../interfaces/contact-interface";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList!: IContact[];
  filteredList!:IContact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
    this.filterContacts();
  }

  getContacts(){
    this.contactService.getContacts().subscribe((contacts)=>{
      this.contactList=contacts;
      this.filteredList=contacts;
    });
  }

  filterContacts(){
    this.contactService.getSearchTerms().subscribe((term)=>{
      term = term.toLowerCase();
      this.filteredList= this.contactList.filter(contact => contact.name.toLowerCase().includes(term));
    });
  }

}
