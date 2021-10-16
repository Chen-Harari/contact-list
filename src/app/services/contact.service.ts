import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IContact} from "../interfaces/contact-interface";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsUrl:string= "https://candidate-test.herokuapp.com/contacts";
  private searchTerms = new Subject<string>();
  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<IContact[]>{
    return this.httpClient.get<IContact[]>(this.contactsUrl);
  }

  getSearchTerms(): Observable<string>{
    return this.searchTerms;
  }

  updateSearchTerm(term: string){
    this.searchTerms.next(term);
  }

}
