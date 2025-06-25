let webPage = document.querySelector('body')
let btn = document.querySelector('button')
console.log(btn)
console.log(webPage)

btn.addEventListener('click',function(){
    webPage.classList.toggle('night')
    if(btn.textContent === "🌙"){
        btn.textContent = "😎"
    } else {
        btn.textContent ="🌙"
    }
})

