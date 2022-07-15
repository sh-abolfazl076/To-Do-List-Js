let list =document.querySelector(".to-do-list")
let formInput =document.querySelector("#add-form input")
let formBtn =document.querySelector("#add-form button")
let formSearch =document.querySelector("#search-form input")


/////////////////delete
list.addEventListener("click", (e) => {
    if(e.target.nodeName == "BUTTON" && e.target.className == "del-btn"){
        e.target.parentNode.remove()
        if (list.children.length == 0) {
            let newList =document.createElement("div")
            newList.innerText= "your listis empty"
            newList.style.color="red"
            newList.style.textAlign="center"
            newList.id="newlist"
            list.appendChild(newList)
        }
    }
})
/////////////////delete End

/////////////////Add
formBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (!formInput.value) {
        return
    }
    if (document.querySelector("#newlist")){
        document.querySelector("#newlist").remove()
    }
    list.append(createLi(formInput.value))
    formInput.value = ""
})

function createLi(newvalue){
    let newli=document.createElement("li")
    let newspan=document.createElement("span")
    let newbutton=document.createElement("button")

    newli.className ="to-do-item"

    newbutton.className ="del-btn"
    newbutton.innerText ="delete"

    newspan.className ="span"
    newspan.innerText =newvalue

    newli.appendChild(newspan)
    newli.appendChild(newbutton)

    return newli
}
/////////////////Add End

formSearch.addEventListener("input",(e) =>{
    Array.from(list.children).forEach(element =>{
        if(document.querySelector("#newlist")){
            return
        }

        if (element.querySelector(".span").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display ="flex"
        }else{
            element.style.display ="none"
        }
    })
})
