import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Output() isRed = new EventEmitter<boolean>();
  @Input()val:number | any;
  changed: any;
  // isRead: any;

  deleteQuote(red: boolean | true){
    confirm("you want to delete")
    this.isRed.emit(red);
    
  };
  
  bless:Quote[]=[
    new Quote("Carbon", "Be comfortable", new Date ( 2000,11,23), "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” "),
    new Quote("master", "Education Quotes", new Date ( 2011,11,2), "Intelligence plus character – that is the goal of true education."),
    new Quote("mio", "Doubt Quotes", new Date ( 2011,11,2), " To rest upon a formula is a slumber that, prolonged, means death."),
    
  ];

  // delQuote(index:number):void{
  //   this.splice(index)
  // }
  // splice(index: number) {
  //   throw new Error('Method not implemented.');
  // }

  loga(event:any){
    this.bless.push(new Quote(event.name, event.title, new Date(), event.quote) );
    console.log(event)
  };

  toggleReadMore(index:number){
  this.bless[index].readMore=!this.bless[index].readMore
  };
  
  constructor() {
  };

  ngOnInit(){
  }

}
