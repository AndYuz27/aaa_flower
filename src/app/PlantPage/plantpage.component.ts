import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plant";
import { ActivatedRoute } from "@angular/router";
import { AnimateTimings } from "@angular/animations";

@Component({
  selector:"add-plant-page",
  templateUrl: "./plantpage.component.html",
  styleUrls: ["./plantpage.component.scss"]
})

export class PlantsPage  implements OnInit{


  constructor(private route: ActivatedRoute,private http: HttpClient) {
  }
id:any;
ItemPlants: any;
  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    this.getPlantById(this.id)
     
  }
  getPlantById(id: any){
    this.http.get(`https://api.petiteweb.dev/plants/${id}`).subscribe((res) => {
      this.ItemPlants = res
    })
  }
onDeletePlant(id: string){
  this.http.delete(`https://api.petiteweb.dev/plants/${id}`)
  .subscribe()
}



}