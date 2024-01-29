import { UI } from "./UI.js";
import { details } from "./details.js";

export class meals{
    constructor( whichPartation ,endPoint){
       this.whichPartation = whichPartation;
       this.endPoint=endPoint;
       this.getmealsbyPartiotion(whichPartation);
    }
    async getmealsbyPartiotion(whichPartation){
        let URL;    
        switch(whichPartation.toLowerCase()){
                case "categories":
                    URL =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.endPoint}`;
                break; 
                case "area":
                    URL =`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.endPoint}`;
                break;
                case "ingredients":
                    URL=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.endPoint}`;
                break;
                case "searchbyname":
                    URL=`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.endPoint}`;
                    break;
                case "searchbychar":
                    URL=`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.endPoint}`; 
                    break;   
            }
            $(".loading").removeClass("d-none");
            const api=await fetch(URL);
            const data=await api.json();
            $(".loading").addClass("d-none");
            // console.log(data);
            const ui=new UI(data, "meals");
            $(".card.meal").on("click",function () { 
                //this.dataset.id
                const detailsmeal =new details(this.dataset.id);
             })

    }
}