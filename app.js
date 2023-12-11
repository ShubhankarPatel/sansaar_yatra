let myPanel = document.querySelectorAll('.panel');

myPanel.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        removeActiveClass()
        item.classList.add('active')
        
    })
})

function removeActiveClass(){
    myPanel.forEach((item)=>{
        item.classList.remove('active')
    })
}