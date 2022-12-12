
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, OnInit} from "@angular/core";

@Component({
  selector:"add-plant-page",
  templateUrl: "./allplants.component.html",
  styleUrls: ["./allplants.component.scss"]
})

export class AllPlants implements OnInit {

constructor(private http: HttpClient){

}

ngOnInit(){
  this.getPlants()
}



private getPlants(){
  this.http.get('https://api.petiteweb.dev/plants')
  .subscribe((res) => {
    console.log(res)
  })
}


}
