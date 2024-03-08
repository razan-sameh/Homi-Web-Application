import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent {
    constructor(
        private accountService: AccountService,
        private router: Router,
        private activtedRoure: ActivatedRoute
    ) {
        this.returnUrl =
            this.activtedRoure.snapshot.queryParams['returnUrl'] ||
            '/shop-left-sidebar-2';
    }
    returnUrl: string = '';
    ngOnInit(): void {}
    forgotPasswordForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
    });
    onSubmit() {
        this.accountService
            .resetPassword(this.forgotPasswordForm.value)
            .subscribe({
                next: (isSuccess: any) => {
                    if (isSuccess) {
                        this.router.navigate(['/login']);
                    }
                },
                error: (error: any) => console.log(error),
                complete: () => console.log('Request complete'),
            });
    }

}
