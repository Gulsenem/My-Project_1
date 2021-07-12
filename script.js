let slider_img1 = document.getElementById("slider_img1");
let slider_img2 = document.getElementById("slider_img2");
let slider_img3 = document.getElementById("slider_img3");

let slider_text1 = document.getElementById("slider_text1");
let slider_text2 = document.getElementById("slider_text2");
let slider_text3 = document.getElementById("slider_text3");


let aktuell = 1;


function moved(n)
{
    
    aktuell+=n;
    alert(aktuell);        
    if(n == -1)
    {
        aktuell=3;
    }

    if(aktuell==1)
    {
        slider_img1.style.opacity = 1;
        slider_img2. style.opacity = 0; 
        slider_img3. style.opacity = 0;

    }
    
    else if(aktuell == 2)
    {
        slider_img1.style.opacity = 0;
        slider_img2. style.opacity = 1; 
        slider_img3. style.opacity = 0;
    }
    else if( aktuell ==3)
    {
        slider_img1.style.opacity = 0;
        slider_img2. style.opacity = 0; 
        slider_img3. style.opacity = 1;
    
        if (n==1)
        {
            aktuell =0;
        }
        
    }


}