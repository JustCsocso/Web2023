var kepekUrl=["cica.png","raven.png","panda.png","b.jpg","c.jpeg","d.jpeg","e.jfif","f.jfif","k.jfif","t.jfif","l.png","a.jpg"]
var parDb=12;

function init()
{
    //console.log("hahó");
    kepKirakas();
}

var kattintas=0;

function kepKirakas()
{
    let asztal=document.getElementById("asztal");

    let kartyak=[]

    for(let k=0;k<2;k++)
    {
        for(let i=0;i<parDb;i++)
        {

            let uj=document.createElement("div"); //<div></div>
    
            uj.className="kartya";
            uj.onclick=function()
            {
                if(kattintas<2)
                {
                    uj.style.backgroundImage="url(kepek/"+ kepekUrl[i]+")";
                    uj.dataset.felforditva="true";

                }
                kattintas++;

                if(kattintas===2)
                {
                    setTimeout(visszafordit,2000)
                }
              
            }
            
            kartyak.push(uj)
            
        }
    }
    kartyak=kever(kartyak);

    for(let i=0;i<kartyak.length;i++)
    {
      asztal.appendChild(kartyak[i]);
    }
    
  function visszafordit()
  {
    const lapok=document.getElementById("asztal").children;
    console.log(lapok);
    const aktiv=[];
    for(let i=0;i<lapok.length;i++)
    {
        if(lapok[i].dataset.felforditva==="true")
        {
            aktiv.push(lapok[i]);
        }
    }
    console.log(aktiv);
    if(aktiv[0].style.backgroundImage!==aktiv[1].style.backgroundImage)
    {
        aktiv[0].style.backgroundImage="";
        aktiv[1].style.backgroundImage="";
        
    }
    else
    {
        aktiv[0].onclick="";
        aktiv[1].onclick="";
    }
    aktiv[0].dataset.felforditva="";
    aktiv[1].dataset.felforditva="";
    kattintas=0;
  }  


  function kever(points) 
{
  for (let i = points.length -1; i > 0; i--) 
  {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  return points;
  
}



}