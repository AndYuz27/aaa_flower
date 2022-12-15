import { HttpBackend, HttpClient } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { map } from "rxjs/operators";
import { Plants } from "src/app/model/plant";

@Component({
  selector:"add-plant-page",
  templateUrl: "./plants.component.html",
  styleUrls: ["./plants.component.scss"]
})

export class AllPlants  implements OnInit{
  display = "none"
  allPlants: Plants[] = []
  

  constructor(private http: HttpClient){

  }
  reloadCurrentPage() {
    window.location.reload();
   }
  modalAdd(){
    this.display = "flex"
  }
  modalRem(){
    this.display = "none"
  }
  ngOnInit() {
    this.fetchPlants()
  }
  

  // onPlantsFetch(){
  //   this.fetchPlants()
  // }

  onPlantCreate(plants: {name: string, description: string, images: string[], category: string, sunlight: number, watering:number, temperature: number}){
    console.log(plants)
    this.http.post<{name: string}>('https://api.petiteweb.dev/plants', plants)
    .subscribe((res) =>{
      console.log(res)
      alert("Ваше растение было добавлено")
      this.reloadCurrentPage()
    })
  }
  private fetchPlants(){
    this.http.get<{[key: string]: Plants}>('https://api.petiteweb.dev/plants')
    .pipe(map((res) => {
      const plants = []
       for(const key in res){
        if(res.hasOwnProperty(key)){
          plants.push({...res[key], id: key})
          console.log(res)
        }
        
       }
       return plants;
    }))
    .subscribe((palnts)=>{
      console.log(palnts)
      this.allPlants = palnts;
    })
  }
}
