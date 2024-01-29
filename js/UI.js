export class UI{
    constructor(data,dataTypes){
        this.data=data;
        this.dataTypes=dataTypes;
        if(dataTypes == 'meals'){
          this.displayMeals(data);
        }else{
          this.displayData(data,dataTypes);
        }
    }
    displayData(data,dataTypes){
       if(dataTypes == "Categories"){
        this.displayCategories(data);
       }else if(dataTypes == "Area"){
        this.displayAreas(data);
       }else if(dataTypes == "Ingredients"){
        this.displayIngredients(data)
       }
    }
    displayCategories(data){
        let box='';
        data.categories.forEach(category => {
           box +=
           `
           <div class="col-md-3">
                    <div class="card text-bg-dark overflow-hidden bg-transparent" data-partition=${category.strCategory}>
                        <img src="${category.strCategoryThumb}" class="card-img w-100" >
                        <div class="card-img-overlay text-center ">
                          <h3 class="card-title">${category.strCategory}</h3>
                          <p class="card-text">${category.strCategoryDescription.split(0)[0]}</p>
                        </div>
                    </div>
            </div>
           `;
        });
        $(".main-container > div.row").html(box);
    }
    displayAreas(data){
        let box='';
        data.meals.forEach(meal => {
           box +=
           `
           <div class="col-md-3">
           <div class="card text-center text-white bg-transparent"  data-partition=${meal.strArea}>
               <div class="card-body">
                 <h5 class="card-title">
                   <i class="fa-solid fa-house-laptop fa-5x"></i>
                 </h5>
                 <p class="card-text fw-bold fs-4">${meal.strArea}</p>
               </div>
           </div>
       </div>
           `;
        });
        $(".main-container > div.row").html(box);
    }
    displayIngredients(data){
        let box='';
        data.meals.slice(0,20).forEach(meal => {
           box +=
           `
           <div class="col-md-3">
           <div class="card text-center text-white bg-transparent"  data-partition=${meal.strIngredient}>
               <div class="card-body">
                 <h5 class="card-title">
                   <i class="fa-solid fa-drumstick-bite fa-5x"></i>
                 </h5>
                 <p class="card-text fw-bold fs-4">${meal.strIngredient}</p>
                 <p class="card-text">${meal.strDescription?meal.strDescription.split(".")[0]:""}</p>
               </div>
           </div>
       </div>
           `;
        });
        $(".main-container > div.row").html(box);
    }
    displayMeals(data){
     
      let box='';
      if(data.meals){
        
        data.meals.forEach(meal => {
          box +=
          `
          <div class="col-md-3">
                   <div class="card meal text-bg-dark overflow-hidden bg-transparent" data-id=${meal.idMeal}>
                       <img src="${meal.strMealThumb}" class="card-img w-100" >
                       <div class="card-img-overlay d-flex align-items-center ">
                         <h3 class="card-title">${meal.strMeal}</h3>
                       </div>
                   </div>
           </div>
          `;
       });
      }
    
      $(".main-container > div.row").html(box);
    }
    static displayDetails(data){
      let strRecipes='';
      let tags='';
      let mealTags=(data.meals[0].strTags) ? data.meals[0].strTags.split(',') : "";
      
      for (const tag of mealTags) {
        tags +=`<li>${tag}</li>`;
      }
      for(let i =1 ; i<=20;i++ ){
        if(data.meals[0][`strIngredient${i}`]){
          strRecipes +=`<li>${data.meals[0][`strMeasure${i}`].trim()} ${data.meals[0][`strIngredient${i}`].trim()}</li>`
        }
      }
      let box=
      
      `
      <div class="details card mb-3 text-white bg-transparent" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${data.meals[0].strMealThumb}" class="img-fluid rounded-2 pt-3" alt="...">
                        <h3 class="card-title text-center py-1">${data.meals[0].strMeal}</h3>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li>
                                    <h3>Instructions</h3> 
                                    <p class="card-text">${data.meals[0].strInstructions}</p>
                                </li>
                                <li>
                                    <span class="h3">Area : </span>
                                    <span class="h3">${data.meals[0].strArea}</span>    
                                </li>
                                <li>
                                    <span class="h3">Category: </span>
                                    <span class="h3">${data.meals[0].strCategory}</span>
                                </li>
                                <li>
                                    <h3>Recipes :</h3>
                                        <ul class="recipes list-unstyled d-flex recipes flex-wrap">
                                          ${strRecipes}
                                        </ul>
                                </li>
                                <li>
                                    <h3>Tags :</h3>
                                    <ul class="tags list-unstyled d-flex ">
                                       ${tags}
                                    </ul>
                                    
                                </li>
                                <li>
                                    <a class="btn btn-success btn-lg" href="${data.meals[0].strSource}">Source</a>
                                    <a class="btn btn-danger btn-lg" href="${data.meals[0].strYoutube}}">Youtube</a>
                                </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
      `;
      $(".main-container > div.row").html(box);
    }
}