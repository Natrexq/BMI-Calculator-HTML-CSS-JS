
var dc = document;

var val = value;

var loc = location;

var stl = style;

var asd = 1;





function CalBmi(){
    
    var usheight,uswidth,finwidth,finalresult;

    
    var usheight = dc.getElementById('bdheiID').value; 

    var uswidth = dc.getElementById('bdweiID').value;

   

    finwidth = usheight * usheight ;

   

    finalresult = uswidth / finwidth;

    
    
    
    
    if(usheight == ""){
        alert("Please write your width");
    }
    else{
        if(usheight > 2.50){
            alert("Please write valid width value" + " Good format is => Meters + . + centimeters ");
        }
        else{
            if(uswidth == ""){
                alert("Please write your heigh");
            }
            else{
                if(uswidth > 500){
                    alert("Please write height valid value");
                }
                else{
                    if(finalresult > 40){
                        dc.getElementById('bmitipsP').innerHTML = "III degree of obesity";
                    }
                        else{
                            if(finalresult > 35){
                                dc.getElementById('bmitipsP').innerHTML = "II degree of obesity";
                            }
                            else{
                                if(finalresult > 30){
                                    dc.getElementById('bmitipsP').innerHTML = "I degree of obesity";
                                }
                                else{
                                    if(finalresult > 25){
                                        dc.getElementById('bmitipsP').innerHTML = "Overweight";
                                    }
                                    else{
                                        if(finalresult > 18){
                                            dc.getElementById('bmitipsP').innerHTML = "Valid value";
                                        }
                                            else{
                                                if(finalresult > 16){
                                                    dc.getElementById('bmitipsP').innerHTML = "Emaciation";
                                                }
                                                    else{
                                                        if(finalresult < 16){
                                                            dc.getElementById('bmitipsP').innerHTML = "Extremal Emaciation";
                                                        }
                                                    }
                                            }
                
                                    }
                                }
                            }
                
                        }
                    dc.getElementById('finalbmiP').innerHTML = finalresult;
                 }
            }

            
        }
    }
        


    

    

    


}
function CookieStatus(){

        var Xad;


        Xad = false;

        var getCookBack = dc.getElementById('cokback').style;

        if(Xad = true){
            
                getCookBack.visibility = "hidden";
        }
        else{
            getCookBack.visibility = "visible";
        }

}
function Terms(){
    location.href = "/terms.html";

}
function CksAccept(){
    var cokcheck;

    var getCookBack = dc.getElementById('cokback').style;
    
    cokcheck = 1; 

    getCookBack.visibility = "hidden";

    document.cookie = "username =; "


    
}
function CksDecy(){

    location.href = "https:/google.com";
    
}

