import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 totalItems:any;

  constructor(private cartService:CartService,private router:Router){

  }

  ngOnInit():void{
    this.cartService.getAllCartProduct().subscribe((val: any)=>{
      this.totalItems=val.length;
    }
    )
  }
onLogin(){
  this.router.navigateByUrl('login')
}
}
