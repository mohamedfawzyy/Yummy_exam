import { formValidation } from "./formValidation.js";
import { meals } from "./meals.js";
import { Partitions } from "./partitions.js";
//start website
const mealsSerach=new meals("searchByName","");
// open and close navbar
$("i.controlNav").on("click",function(e){
    if($("nav").css("left") == '-300px'){
        $(e.target).removeClass("fa-bars").addClass("fa-xmark");
        $("nav").animate({
            left:0
        },300,function(){
            $(".navLinks li").show(200);
        })
    }else{
        $(e.target).removeClass("fa-xmark").addClass("fa-bars");
        $(".navLinks li").hide(200,function(){
            $("nav").animate({
                left:-300
            },300)
        });  
    }   
});
// lisener on navLinks
$(".navLinks li.partion").on("click", function(){
    $('i.controlNav').removeClass("fa-xmark").addClass("fa-bars");
    $("div.search").addClass("d-none");
    $(".inputForm").addClass("d-none");
    $(".navLinks li").hide(200,function(){
        $("nav").animate({
            left:-300
        },300)
    });  
    const partitions=new Partitions($(this).text());
});
//lisener on serach links
$(".navLinks li#searchForm").on("click",function(){
    $('i.controlNav').removeClass("fa-xmark").addClass("fa-bars");
    $(".navLinks li").hide(200,function(){
        $("nav").animate({
            left:-300
        },300)
    }); 
    $("div.search").removeClass("d-none");
    $(".main-container > div.row").html("");
    $("div.search input").val("");
    $(".inputForm").addClass("d-none");
    $("div.search input").eq(0).on("input",function(){
        $("div.search input").eq(1).val("");
       let endPoint= $(this).val();
        const mealsSerach=new meals("searchByName",endPoint);
    })
    $("div.search input").eq(1).on("input",function(event){
        $("div.search input").eq(0).val("");
        let endPoint= $(this).val();
         const mealsSerach=new meals("searchByChar",endPoint);
     })
})
//lisener on userForm link
$(".navLinks li#userForm").on("click",function(){
    $('i.controlNav').removeClass("fa-xmark").addClass("fa-bars");
    $(".navLinks li").hide(200,function(){
        $("nav").animate({
            left:-300
        },300)
    }); 
    $("div.search").addClass("d-none");
    $(".main-container > div.row").html("");
    $(".inputForm").removeClass("d-none");
        const formvalidation = new formValidation()
})


