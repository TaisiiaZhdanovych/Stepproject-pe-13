
const polosa = document.querySelector('.slider-list')
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let imgSmall = document.querySelectorAll('.slider-foto');
let imgBig = document.querySelectorAll('.about-foto');


const people = document.querySelectorAll('.about-item')
let i = 0
Array.from(imgSmall).forEach(el => 

   el.dataset.number = `${i+=1}`  
);

let n=0
Array.from(people).forEach(el => 

   el.dataset.number = `${n+=1}`
   
)
let count = 1
nextBtn.addEventListener('click', sliderNext);
prevBtn.addEventListener('click', sliderPrv);
// prevBtn.addEventListener('click', console.log('WOW'));


function sliderNext(e){
count ++
if (count===5) {count=1}
console.log(count)
    if (e.target){
    Array.from(imgSmall).forEach(el =>{
if(el.dataset.number===`${count}`){
    el.classList.add('active-small')
         Array.from(people).forEach(elem => {
            if(el.dataset.number===elem.dataset.number){
        

             elem.style.display = 'inline'
           }
          else{elem.style.display='none'
        
         }
         } )
         

    
     } 
     else{ el.classList.remove('active-small')}
    } ) }
    
}



function sliderPrv(l){
    count--
    if (count===0) {count=4}
    console.log(count)
      if (l.target){
        Array.from(imgSmall).forEach(el =>{
    if(el.dataset.number===`${count}`){
        el.classList.add('active-small')
             Array.from(people).forEach(elem => {
                // function choiceImgSmall(event){
                //     Array.from(polosa.children).forEach(element =>{

                //     }
                //         )
                // }
                if(el.dataset.number===elem.dataset.number){
    
    
                 elem.style.display = 'inline'
               }
              else{elem.style.display='none'
     
             }
             } )
             
    
          } 
         else{ el.classList.remove('active-small')}
        } ) }
        
    }
    

    polosa.addEventListener('click', choiceImgSmall)

    function choiceImgSmall(e){
 
       Array.from(imgSmall).forEach(el =>{
          
          if (el===e.target) { count=el.dataset.number
            el.classList.add('active-small')
             Array.from(people).forEach(elem => {
                if(elem.dataset.number===el.dataset.number){
                   elem.style.display = 'inline'
                }
                else{elem.style.display='none'}
             } )
          }
          else{el.classList.remove('active-small')}
       })
    }