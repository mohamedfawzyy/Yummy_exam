import { UI } from "./UI.js";
import { meals } from "./meals.js";

export class Partitions{
        constructor(dataType){
            this.dataType= dataType;
            // console.log(dataType)
            this.getDataMenu(dataType);
        }

       async getDataMenu(dataType){
        let URL;   
        switch(dataType.toLowerCase()){
            case "categories" : 
                URL="https://www.themealdb.com/api/json/v1/1/categories.php";
                break;
            case "area":
                URL="https://www.themealdb.com/api/json/v1/1/list.php?a=list";
                break;
            case "ingredients":
                URL="https://www.themealdb.com/api/json/v1/1/list.php?i=list";
                break;    
           } 
            $(".loading").removeClass("d-none");
            const api=await fetch(URL);
            const data=await api.json();
            $(".loading").addClass("d-none");
            const ui=new UI(data,dataType);
            $(".card").on("click",function(){
               let endPoint =this.dataset.partition;
               const mealslist = new meals(dataType ,endPoint);
            })
        }

}