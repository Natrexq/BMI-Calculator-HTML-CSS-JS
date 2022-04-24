//DEV TOOL

function DevCheckDisplay(){

    var main,phone,tablet,desktop,tv,display,final;

    final = document.getElementById('spi').value;


    

    scwid = window.screen.width;
    

    alert(scwid);

    phone = 320;
    tablet = 768;
    desktop = 992;
    tv = 1200;


    
    if(scwid > tv){
        alert("TV");
        
    }
    else if(scwid > desktop){
        
        alert("DES");
    }

    else if(scwid > tablet){
        
        alert("TAB");
    }
   
    else if(scwid > phone){
        
        alert("PHO");
    }
   
    
    


    

}