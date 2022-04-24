//DEV TOOL








function DevCheckDisplay(){

    var main,phone,tablet,smalldesktop,desktop,tv,display,final;

    final = document.getElementById('spi');
    

    

    scwid = window.screen.width;
    


    phone = 310;
    tablet = 520;
    smalldesktop = 768;
    desktop = 992;
    tv = 1200;


    
    if(scwid > tv){
        final.innerHTML = "screen: large";
        
    }
    
    else if(scwid > desktop){
        
        final.innerHTML = "screen: small";
    }

    else if(scwid > smalldesktop){
        
        final.innerHTML = "screen: smdesk";
    }
    else if(scwid > tablet){
        
        final.innerHTML = "screen: tablet";
    }
   
    else if(scwid > phone){
        
        final.innerHTML = "screen: phone";
    }
   
    
    


    

}