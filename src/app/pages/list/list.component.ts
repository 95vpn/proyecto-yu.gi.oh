import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(res => {
      console.log(res);
      this.cards = res;
    })
  }
}
