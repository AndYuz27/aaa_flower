import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plant";

@Component({
  selector:"plant-part",
  templateUrl: "./plantspart.component.html",
  styleUrls: ["./plantspart.component.scss"]
})

export class PlantsPart  implements OnInit{
  display = "none"
  allPlants: Plants[] = []
  plantsPart = this.allPlants.slice(1, 4);
  

  constructor(private http: HttpClient){

  }
  reloadCurrentPage() {
    window.location.reload();
   }
  modalAdd(){
    this.display = "block"
  }
  modalRem(){
    this.display = "none"
  }
  ngOnInit() {
    this.fetchPlants()
  }
  
  private fetchPlants(){
    this.http.get<{[key: string]: Plants}>('https://api.petiteweb.dev/plants')
    .pipe(map((res) => {
      let plants = []
      let pPlants = plants.slice(1, 2)
       for(const key in res){
        if(res.hasOwnProperty(key)){
          pPlants.push({...res[key], id: key})
          console.log(res)
        }
        
       }
       return pPlants;
    }))
    .subscribe((palnts)=>{
      console.log(palnts)
      this.plantsPart = palnts;
    })
  }
}
