import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  users:string[] = ["Hemant","jitendra","Aman","Pooja"];

  user:any[] =[
    {"id":1,"name":"hemant","age":"23","Mobile":"9205262451"},
    {"id":1,"name":"Jitendra","age":"33","Mobile":"9205262454"},
    {"id":1,"name":"aman","age":"53","Mobile":"9205262454"},
    {"id":1,"name":"Riyaz","age":"53","Mobile":"9205262454"},
    {"id":1,"name":"Pankaj","age":"73","Mobile":"9205262458"}
    ];

    isUserLoggedIn:boolean=true;

    public color="blue"


    
  constructor() { }

  ngOnInit() {
  }

}
