import { Component } from '@angular/core';
import {CardDTO, CreateCardDTO, ResponseDTO} from "../../model/card";
import {CardService} from "../../services/card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent {
  DeleteCardDTO:CreateCardDTO={
    mobileNumber:''
  }
  message: string = ''
  constructor(private DeleteCardService: CardService) {}

  DeleteCard(){
    if (!this.DeleteCardDTO.mobileNumber) {
      this.message = 'Please enter a card number';
      return;
    }
    this.DeleteCardService.deleteCard(this.DeleteCardDTO).subscribe({
      next: (res: ResponseDTO) => {
        this.message = res.statusMsg;
      },
      error: () => this.message='Failed to delete card'
    })
  }
}
