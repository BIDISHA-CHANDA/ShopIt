import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private router:Router){

}
  registrationForm=new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    
    email: new FormControl('', [Validators.required, Validators.email])
  })

  onSubmit(){
   // console.log("here")
    if (this.registrationForm.valid) {
      console.log('Form submitted successfully:', this.registrationForm.value);
    } else {
      console.log('Form has validation errors. Please check the fields.');
      this.registrationForm.markAllAsTouched();
    }
  }
  onRegister(){
    this.router.navigateByUrl('login')
  }
}
