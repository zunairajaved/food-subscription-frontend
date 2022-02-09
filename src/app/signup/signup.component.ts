import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;

    form: any = {
        fullName:null,
        email:null,
        password:null,
        role:'client'
    };
    isSuccessful = false;
    isSignUpFaild = false;
    errorMessage = '';
    
    constructor(private authService: AuthService) { }

    ngOnInit() {}

    onSubmit() : void{
        const{fullName,email,password} = this.form;
        this.authService.register(fullName,email,password).subscribe(
            data=>{
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFaild = false;
            },
            err => {

                this.errorMessage = err.error.message;
                this.isSignUpFaild = true;
            }
        )
    }
}
