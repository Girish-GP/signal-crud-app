import { Component, signal } from '@angular/core';
import { Contact } from '../../model/contact.interface';
import { MatListModule} from '@angular/material/list'
@Component({
  selector: 'app-contacts-list',
  imports: [MatListModule],
  templateUrl: './contacts-list.html',
  styleUrl: './contacts-list.scss',
})
export class ContactsList {

  contacts = signal<Contact[]>([{
    id: '123',
    name:'Girish',
    email:'ggp@gmail.com',
    phoneNo:'12344'
  }])
}
