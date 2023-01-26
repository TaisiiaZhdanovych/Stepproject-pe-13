
// масиви фотографій
const imagesArr = [
    'gr_des2.png',
    'gr_des3.png',
    'graphic-design.png',
    'web_des1.png',         
    'web_des2.png',         
    'web_des3.png', 
    'land_page1.png',
    'land_page2.png',             
    'land_page3.png',             
    'word_press1.png',             
    'word_press2.png',             
    'word_press3.png',
]  

const imgLoad = [
    'gr_design1.jpg',
    'gr_design2.jpg',
    'gr_design3.jpg',
    'web_design1.jpg',
    'web_design2.jpg',
    'web_design3.jpg',         
    'land_page1.jpg',      
    'land_page2.jpg',
    'land_page3.jpg',
    'wordpress1.jpg',              
    'wordpress2.jpg',          
    'wordpress3.jpg',              
    
]

const gallery = document.querySelector('.work-gallery'); //блок, куди будуть загружатися фото



// функція загрузки фото і ховерних плашок

    function imagesFull(images){
    
 
        for (let i in images){
   
     if(images[i].includes('web')){link='Web Design'}
     else if(images[i].includes('gr')){link='Graphic Design'}
     else if(images[i].includes('land')){link='Landing Pages'}
     else if(images[i].includes('word')){link='Wordpress'} 
                gallery.insertAdjacentHTML('afterbegin', `<div data-title="${link}" class="wr-hid-block">
                                                         <img class="img" style="display:block;" src="./img/${images[i]}" alt="foto" width="290" height="206">
                         <div  class="hidden-block">
                            <div class="hidden-icon-box">
                                <a href="#">
                                    <div class="svg-one">
                                    
                                      <svg class="svg" width="15" height="15" viewBox="0 0 15 15" fill="carrentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M13.9131 2.72817L12.0948 0.891285C11.2902 
                                        0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 
                                        7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 
                                        2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 
                                        12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 
                                        6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 
                                        4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 
                                        11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 
                                        10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 
                                        8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 
                                        9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 
                                        13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 
                                        9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 
                                        8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 
                                        5.90088 9.5817 6.18299L6.25787 9.56307Z" />
                                      </svg>
                            </div>
                                </a> 
        
                                <a href="#">
                                    <div class="svg-two">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="carrentColor" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="12" height="11" />
                                        </svg>
                                    </div>
                                </a>

                            </div>
                               <p class="hidden-title">creative design</p>
                               <a class="hidden-link" href="#">
                               ${link}
                               </a>
                            </div>
                             
                       </div>`); 
     }
     }
     
imagesFull(imagesArr)


let ulTabs=document.querySelector(".work-tabs-list"); // функція вибору фото по табах
ulTabs.addEventListener("click", choiceCategory)


function choiceCategory(event){ 
let block = document.querySelectorAll('.wr-hid-block')

    
        Array.from(ulTabs.children).forEach(elem =>{
    
            if(elem === event.target ){
                
                elem.classList.add('active-tab');
                if (event.target.dataset.category==='All'){
    
                    Array.from(block).forEach(el => {
                        
                        el.style.display='inline'
                    
                    }
                    )
                }
             else if (event.target.dataset.category==='Web Design'){ 
                Array.from(block).forEach(el => {
       
                    if(el.dataset.title==='Web Design'){
                        el.style.display='inline'
                            
                        }
                        else{ el.style.display='none'}
                   
                }
                )
             }
             else if (event.target.dataset.category==='Graphic Design'){
               
                Array.from(block).forEach(el => {
       
                   

                    if(el.dataset.title==='Graphic Design'){
                        el.style.display='inline'
                            
                        }
                        else{ el.style.display='none'}
                   
                }
                )
                
             }
             else if(event.target.dataset.category==='Landing Pages'){
                Array.from(block).forEach(el => {
       
                    if(el.dataset.title==='Landing Pages'){
                        el.style.display='inline'
                            
                        }
                        else{ el.style.display='none'}
                   
                }
                )
             }
    
             else if(event.target.dataset.category==='Wordpress'){
                Array.from(block).forEach(el => {
       
                    if(el.dataset.title==='Wordpress'){
                        el.style.display='inline'
                            
                        }
                        else{ el.style.display='none'}
                   
                }
                )
             }
            
            }
            else{
                 
                elem.classList.remove('active-tab')
          
            }
    
        })
    }
    


//функція скриття кнопки load more та загрузки нових фото та перебір категорій для загрузки по активних кнопках


let btn = document.querySelector('.load-btn')
btn.addEventListener('click', clickLoadMore)

function clickLoadMore(e){
    let btn = document.querySelector('.load-btn')

    if(btn === e.target){
    btn.style.visibility = 'hidden'
    
    imagesFull(imgLoad)
    let block = document.querySelectorAll('.wr-hid-block')
    
    Array.from(ulTabs.children).forEach(elem =>{
             if(elem.classList.contains('active-tab') && elem.dataset.category==='Graphic Design')
             {Array.from(block).forEach(el => {
       
                if(el.dataset.title==='Graphic Design'){
                    el.style.display='inline'
                        
                    }
                    else{ el.style.display='none'}
                
            })
                }
                
               else if(elem.classList.contains('active-tab') && elem.dataset.category==='Web Design')
             {Array.from(block).forEach(el => {
       
                if(el.dataset.title==='Web Design'){
                    el.style.display='inline'
                        
                    }
                    else{ el.style.display='none'}
                
            })
                }
                else if(elem.classList.contains('active-tab') && elem.dataset.category==='Landing Pages')
                {Array.from(block).forEach(el => {
          
                   if(el.dataset.title==='Landing Pages'){
                       el.style.display='inline'
                           
                       }
                       else{ el.style.display='none'}
                   
               })
                   }
                   else if(elem.classList.contains('active-tab') && elem.dataset.category==='Wordpress')
                   {Array.from(block).forEach(el => {
             
                      if(el.dataset.title==='Wordpress'){
                          el.style.display='inline'
                              
                          }
                          else{ el.style.display='none'}
                      
                  })
                      }


})}}





























      
  

