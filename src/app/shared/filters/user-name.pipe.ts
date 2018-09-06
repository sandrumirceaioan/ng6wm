import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
import { UsersService } from '../services/users/users.service';

@Pipe({
    name: 'userName',
    pure: false
})
export class UserNameFilterPipe implements PipeTransform {

    constructor(
        private usersService: UsersService
    ){}

    transform(item: any): any {
        return _.findWhere(this.usersService.users, {_id: item}).userName || 'N/A';
    }
}