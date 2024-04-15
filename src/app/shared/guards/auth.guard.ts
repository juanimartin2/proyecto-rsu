import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../../services/user.service";


export const AuthGuard : CanActivateFn = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    
    const userService = inject(UserService);
    const router = inject(Router);

    userService.isLoggedIn || router.navigate(['login']);

    return true
}