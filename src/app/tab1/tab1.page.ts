import { Component, OnInit } from '@angular/core';
import { UserState } from 'src/services/user.state';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users$: Observable<User[]>;

  constructor(private service: UserState) {
    this.service.getAllUsers();
  }
  ngOnInit(): void {
    this.users$ = this.service.users$;
  }
  delete(user: User) {
    this.service.delete(user);
  }
}
