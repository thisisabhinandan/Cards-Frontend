import { Component } from '@angular/core';
import {CardDTO, FetchCardDTO} from "../../model/card";
import {CardService} from "../../services/card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fetch-card',
  templateUrl: './fetch-card.component.html',
  styleUrls: ['./fetch-card.component.css']
})
export class FetchCardComponent {
  fetchCardDTO:FetchCardDTO={cardNumber:'',
    mobileNumber:'',
    balance:0,
    cardType:'',
    totalLimit:0,
    availableAmount:0};
  message: string = '';
  constructor(private cardService: CardService) {}
  fetchCard(){
    if (!this.fetchCardDTO.cardNumber) {
      this.message = 'Please enter a card number';
      return;
    }
    this.cardService.fetchCardDetails(this.fetchCardDTO).subscribe({
      next: (res: FetchCardDTO) => {
        this.fetchCardDTO=res;
        this.message = '';
      },
      error: () => this.message='Failed to fetch card'
    })
  }
}
