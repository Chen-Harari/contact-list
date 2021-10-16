import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";


@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  updateSearchTerm(term: string){
   this.contactService.updateSearchTerm(term);
  }



}
