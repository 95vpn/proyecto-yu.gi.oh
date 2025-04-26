import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { Card } from '../../interfaces/card.interface';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CommonModule, InfiniteScrollModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  cards: Card[] = [];
  offset = 0;

  cardTextFC = new FormControl('');
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe( res => {
      console.log(res);
      this.cards = [];
      this.searchCards(res);
    });
    this.searchCards();
  }

  onScroll() {
    console.log('scrolled!!');
    this.offset += 100;
    this.searchCards();
  }

  searchCards(cardName: string | null = null) {
    this.cardService.getCards(cardName, this.offset).subscribe(res => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    })
  }
}
