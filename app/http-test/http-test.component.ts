import { Component, OnInit } from '@angular/core';
import { TestHttpService, Item } from '../test-http.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor(private testHttpService: TestHttpService) { }
  ngOnInit() {
    //this.testHttpService.getAll();
    this.getAllItems();
  }

  public items: Item[] = [];

  getAllItems():void{
    this.testHttpService.getAllItem().subscribe(response=>{
     // console.log(response);
      for(let item of response){
       // console.log(item);
        this.testHttpService.getItem(item.id).subscribe(i=>this.items.push(i));
      }
    })
  }

  
}
