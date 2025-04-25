import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { Card } from '../../interfaces/card.interface';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule, InfiniteScrollModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  cards: Card[] = [];
  offset = 0;
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.searchCards();
  }

  onScroll() {
    console.log('scrolled!!');
    this.offset += 100;
    this.searchCards();
  }

  searchCards() {
    this.cardService.getCards(this.offset).subscribe(res => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    })
  }
}
