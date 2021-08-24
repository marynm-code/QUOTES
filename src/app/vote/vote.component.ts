import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() time:any
  likes: number=0;
  dis:number =0;


  inc(){
    this.likes ++
    }
  dec(){
      this.dis ++
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
