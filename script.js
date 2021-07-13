let slider_img1 = document.getElementById("slider_img1");
let slider_img2 = document.getElementById("slider_img2");
let slider_img3 = document.getElementById("slider_img3");

let slider_text1 = document.getElementById("slider_text1");
let slider_text2 = document.getElementById("slider_text2");
let slider_text3 = document.getElementById("slider_text3");

const kreis = document.getElementsByClassName("kreis");

let slide = 1;

kreis[0].style.backgroundColor = "#c50606";
kreis[0].style.borderColor = "#c50606";


function prev()
{
    
    slide--;      

    if(slide == 0)
    {
        showSlide3();
        slide = 3; 
    }
    else if( slide ==1)
        showSlide1();


    else if(slide==2)
        showSlide2();
    
}

function next()
{
    slide++;

    if(slide == 2)
        showSlide2();
    else if(slide==3)
        showSlide3();

    else 
    {
        showSlide1();
        slide =1; 
    }
}

function showSlide1 ()
{
    slider_img1.style.opacity = 1;
    slider_img2. style.opacity = 0; 
    slider_img3. style.opacity = 0;

    slider_text1.style.opacity = 1;
    slider_text2.style.opacity = 0;
    slider_text3.style.opacity = 0;

    kreis[0].style.backgroundColor = "#c50606";
    kreis[0].style.borderColor = "#c50606";

    kreis[1].style.backgroundColor = "inherit";
    kreis[1].style.borderColor = "#eff5f8";

    kreis[2].style.backgroundColor = "inherit";
    kreis[2].style.borderColor = "#eff5f8";

}

function showSlide2 ()
{
    slider_img1.style.opacity = 0;
    slider_img2. style.opacity = 1; 
    slider_img3. style.opacity = 0;

    slider_text1.style.opacity = 0;
    slider_text2.style.opacity = 1;
    slider_text3.style.opacity = 0;

    kreis[1].style.backgroundColor = "#c50606";
    kreis[1].style.borderColor = "#c50606";

    kreis[0].style.backgroundColor = "inherit";
    kreis[0].style.borderColor = "#eff5f8";

    kreis[2].style.backgroundColor = "inherit";
    kreis[2].style.borderColor = "#eff5f8";

}

function showSlide3 ()
{
    slider_img1.style.opacity = 0;
    slider_img2. style.opacity = 0; 
    slider_img3. style.opacity = 1;

    slider_text1.style.opacity = 0;
    slider_text2.style.opacity = 0;
    slider_text3.style.opacity = 1;

    kreis[2].style.backgroundColor = "#c50606";
    kreis[2].style.borderColor = "#c50606";

    kreis[1].style.backgroundColor = "inherit";
    kreis[1].style.borderColor = "#eff5f8";

    kreis[0].style.backgroundColor = "inherit";
    kreis[0].style.borderColor = "#eff5f8";

}

function kreis_klik()
    
{
        if(kreis[0])
        {
            alert("kreis[0]");
            showSlide1();
        }
        else if (kreis[1])
        {
            showSlide2();
            alert("kreis[1]");
        }
        else if (kreis[2])
        {
            showSlide3();
            alert("kreis[]");
        }
    
}