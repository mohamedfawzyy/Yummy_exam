import { UI } from "./UI.js";

export class details{
    constructor(id){
        this.id=id
        this.getDetais(id);
    }
    async getDetais(id){
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data=await api.json();
        UI.displayDetails(data);
    }
}