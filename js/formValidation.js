export class formValidation{
    constructor(){
        this.nameRejex=/^[A-Za-z]{1,}$/;
        this.emailRejex=/^[A-za-z]{1,}@[A-Za-z]{1,}.[A-Za-z]{2,}$/;
        this.phoneRejex=/^[0-9]{9,}$/;
        this.ageRejex=/^[1-9]{1,}[0-9]{0,}$/;
        this.passwordRejex=/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
        this.checkValidation(this.nameRejex,this.emailRejex,this.phoneRejex,this.ageRejex,this.passwordRejex);
    }
    checkValidation(nameRejex,emailRejex,phoneRejex,ageRejex,passwordRejex){
        let validName =false ,  validEmail=false , validPhone = false , validAge= false ,
        validPassword =false , validRepassword=false;  
         $(".inputForm input").on("input blur",function () {
            
            // console.log($(this).attr("name"));
            let value=$(this).val();
            switch($(this).attr("name")){
                case "name":
                   if( !formValidation.finalCheck(value,nameRejex)){
                       $(this).next().addClass("d-block");
                       validName =false;
                   }else{
                    $(this).next().removeClass("d-block");
                    validName=true;
                   }
                    break;
                    case "email":
                        if( !formValidation.finalCheck(value,emailRejex)){
                            $(this).next().addClass("d-block");
                            validEmail=false;
                        }else{
                         $(this).next().removeClass("d-block");
                         validEmail=true;
                        }
                    break;
                    case "phone":
                        if( !formValidation.finalCheck(value,phoneRejex)){
                            $(this).next().addClass("d-block");
                            validPhone=false;
                        }else{
                         $(this).next().removeClass("d-block");
                         validPhone=true;
                        }
                    break;
                    case "age":
                        if( !formValidation.finalCheck(value,ageRejex)){
                            $(this).next().addClass("d-block");
                            validAge=false;
                        }else{
                         $(this).next().removeClass("d-block");
                         validAge=true;
                        }
                    break;
                    case "password":
                        if( !formValidation.finalCheck(value,passwordRejex)){
                            $(this).next().addClass("d-block");
                            validPassword=false;
                        }else{
                         $(this).next().removeClass("d-block");
                         validPassword=true;
                        }
                    break;
                    case "repassword":
                      
                            if(!(value == $("input[name='password']").val())){
                                $(this).next().addClass("d-block");
                                validRepassword=false;
                            }else{
                             $(this).next().removeClass("d-block");
                             validRepassword=true;
                            }    
                    break;
            }
            if(validName && validEmail && validPhone && validAge && validPassword && validRepassword){
            
                $(".inputForm button").removeAttr("disabled");
               }else{
                $(".inputForm button").attr("disabled",true);
               }
           })
         

    }
    static finalCheck(value,rejex){
       return rejex.test(value);
    }
}