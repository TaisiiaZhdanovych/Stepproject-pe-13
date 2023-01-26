let mainTabs=document.querySelector(".serv-tabs-list");

let liText=document.querySelector(".img-serv-list");
console.log(liText);

// liText.style.visibility='hidden';

mainTabs.addEventListener("click", changeColors);

function changeColors(event){
    
    Array.from(mainTabs.children).forEach(elem =>{

        if(elem === event.target ){
            // elem.style.color = '#FFFFFF';
            // elem.style.backgroundColor = "#18CFAB" ;
            elem.classList.add('active')
        
        }
        else{
            // elem.style.color = '#717171';
            // elem.style.backgroundColor = "#F8FCFE" ;
            elem.classList.remove('active')
      
        }

    });

    let li = document.querySelectorAll("[data-name]");
    console.log(li);
    Array.from(li).forEach(i => {
        
        if(event.target.innerText===i.dataset.name ){
            // i.classList.remove('hidden')
            // i.classList.add('active-text-img')
            i.style.visibility='visible';
        }
        else{
            i.style.visibility='hidden';
            // i.classList.add('hidden')
        }
        
    })

    
};

// && i.classList.contains('hidden')