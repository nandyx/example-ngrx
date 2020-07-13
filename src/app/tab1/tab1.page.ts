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
  isLoading$: Observable<boolean>;

  constructor(private service: UserState) {
    this.service.getAllUsers();
  }
  ngOnInit(): void {
    this.users$ = this.service.users$;
    this.isLoading$ = this.service.Loading$;
    this.service.selected$.subscribe(x => console.log('select->', x));
  }
  delete(user: User) {
    this.service.delete(user);
  }
}
