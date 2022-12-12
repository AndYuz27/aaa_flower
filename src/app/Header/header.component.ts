import {Component} from "@angular/core";
import { faSun } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styles: [
    `
    body{
      margin: 0;
    }
    header{
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 50px 10px 50px;
      font-size: 12pt;
      z-index: 999;
      background-color: #3f3f3a;
      color: white;
    }
    nav{
      display: flex;
      gap: 20px;
    }
    .lo{

      font-size: 18pt;
      color: lightgreen;
      transition: 0.3s;
    }
    .lo:hover{
      color: orange;
    }
    .lo:active{
      color: red;
    }


    
    a{
      text-decoration: none;
      color: inherit;
    }
    .active{
      color: green;
      text-decoration-line: underline;
    }
    `
  ]
})

export class HeaderComponent{
}
