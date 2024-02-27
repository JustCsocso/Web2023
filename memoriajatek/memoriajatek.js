var kepekUrl=["a.jpg","raven.png","panda.png","cica.png","d.jpeg","b.jpg","c.jpeg","d.jpeg","e.jfif","f.jfif","k.jfif","t.jfif","l.png","izes.jfif","selena.jpg","tomi.jpeg"]
var parDb=2;

function init()
{
    //console.log("hahó");
    kepKirakas();
}
var kattintas=0;
const lathatoLapok=[]
function kepKirakas()
{
    let asztal=document.getElementById("asztal");

    let kartyak=[];
    

    for(let k=0;k<2;k++)
    {
        for(let i=0;i<parDb;i++)
        {
            let uj=document.createElement("div");
            uj.className="kartya";

            uj.dataset.hatterKep="url(kepek/" + kepekUrl[i]+")";

            uj.onclick=function(){
                oraStart();

                //Csak kettő kartya lehet felforditva
                if(lathatoLapok.length<2 && 
                   !lathatoLapok.includes(uj))
                {
                    lathatoLapok.push(uj);
                    uj.style.backgroundImage="url(kepek/" + kepekUrl[i]+")";
                    uj.dataset.felforditva="true";
                    
                    console.log(uj);
                }
                //console.log(kattintas);
                

                if(lathatoLapok===2)
                {
                    setTimeout(visszafordit,2000);
                }
                

            };


            //asztal.appendChild(uj);
            kartyak.push(uj);
       
        }
    }
    kartyak = kever(kartyak);

    for(let i=0;i<kartyak.length;i++)
    {
        asztal.appendChild(kartyak[i]);
    }
    const megtalaltParok=[]
    function visszafordit()
    {
        const lapok= document.getElementById("asztal").children;
        console.log(lapok);
        const aktiv=[];
        for(let i =0 ;i<lathatoLapok.length;i++)
        {
            
                aktiv.push(lathatoLapok[i]);
           
        }
        if(aktiv.length>2)
        {
            if(aktiv[0].style.backgroundImage!==aktiv[1].style.backgroundImage)
            {
                aktiv[0].style.backgroundImage="";
                aktiv[1].style.backgroundImage="";
            }
            else
            {
                //párt találtunk
                aktiv[0].onclick="";
                aktiv[1].onclick="";
                megtalaltParok.push(aktiv[0]);
                megtalaltParok.push(aktiv[1]);
                if(!vanMeg())
                {
                    nyertel();
                }
    
            }
            aktiv[0].dataset.felforditva="";
            aktiv[1].dataset.felforditva="";
            //mindent leforditunk
            const lapok=document.getElementById("asztal").children;
            for (let i=0; i<lapok.length; i++) 
            {
                lapok[i].style.backgroundImage="";
            }

            //megtalált párokat felforditjuk
            for (let i=0; i<lapok.length; i++) 
            {
                megtalaltParok[i].style.backgroundImage=megtalaltParok[i].dataset.hatterKep;
                //megtalaltParok[i].dataset
            }

            lathatoLapok=[];
        }
   
    }



    

}
function nyertel()
{
    let uj=document.createElement("div");
    uj.innerHTML="Game Over";

}
function vanMeg()
{
    const lapok= document.getElementById("asztal").children;
    let darab = 0;
    for(let i =0 ;i<lapok.length;i++)
    {
        if(lapok[i].dataset.felforditva==="")
        {
            darab++;
        }
    }
    return darab>0;

}
function kever(points) {
    for (let i = points.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    }
    return points;
    
    
}

let startTime="";
function oraStart(){
    startTime=new Date();
}

function oraShow(){
    const aktualTime=new Date();

    const kulonbseg=aktualTime-startTime;

    console.log(typeof kulonbseg);
    console.log(kulonbseg);
    const ido=new Date(kulonbseg);
    const mp=ido.getSecond();
    const perc=ido.getMinutes();
    console.log(ido);

    document.getElementById(ido).innerHTML=perc+""+(mp<10 ? "0" : "")+mp;


}