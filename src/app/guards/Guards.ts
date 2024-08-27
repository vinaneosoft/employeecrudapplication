import { inject } from "@angular/core";
import { UserService } from "../customservices/user.service";
export function authenticationGuard():boolean{
    const userService=inject(UserService);
    if(userService.logFlag) // shared instance variable of service object
        return true; // if guard returing true then route gets activated else not
    else{
        window.alert("Please login first....");
        return false;
    }
}