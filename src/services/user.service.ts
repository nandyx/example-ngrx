import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User> {
        return this.http.get(`https://reqres.in/api/users?page=1`)
            .pipe(
                map((res: any) => {
                    return res.data.map((val: any) => ({
                        id: val.id,
                        email: val.email,
                        name: val.first_name,
                        lastName: val.last_name,
                        avatar: val.avatar
                    }));
                })
            );
    }
}