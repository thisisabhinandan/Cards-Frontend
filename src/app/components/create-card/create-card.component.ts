import { Component } from '@angular/core';
import {CreateCardDTO, ResponseDTO} from 'src/app/model/card';
import {CardService} from "../../services/card.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  createCardDTO:CreateCardDTO={
    mobileNumber: ''
  }
  message: string = '';
  constructor(private createCardService: CardService, private router: Router) {}
  createCard() {
    console.log('Mobile Number before API call:', this.createCardDTO.mobileNumber);
    if (!this.createCardDTO.mobileNumber) {
      this.message = 'Please enter a mobile number';
      return;
    }
    this.createCardService.createCard(this.createCardDTO).subscribe({
      next: (res: ResponseDTO) => {
        this.message = res.statusMsg;
        if(res.statusCode === '200') {
          this.router.navigate(['/login']);
        }
      },
      error: () => this.message='Failed to create card'
    });
  }


}
