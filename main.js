let list =document.querySelector(".to-do-list")
let formInput =document.querySelector("#add-form input")
let formBtn =document.querySelector("#add-form button")
let formSearch =document.querySelector("#search-form input")




/////////////////Add

// ذخیره لیست در localStorage
function saveListToLocalStorage() {
    let items = [];
    Array.from(list.children).forEach((element) => {
        const text = element.querySelector('.span').innerText;
        items.push(text);
    });
    localStorage.setItem('todoList', JSON.stringify(items));
}

// بارگذاری لیست از localStorage
function loadListFromLocalStorage() {
    const storedItems = JSON.parse(localStorage.getItem('todoList'));
    if (storedItems) {
        storedItems.forEach((item) => {
            list.append(createLi(item));
        });
    }
}

// افزودن آیتم به لیست و ذخیره آن
formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!formInput.value) {
        return;
    }
    list.append(createLi(formInput.value));
    formInput.value = "";
    saveListToLocalStorage(); // ذخیره لیست بعد از هر تغییر
});

// ایجاد آیتم لیست
function createLi(newvalue) {
    let newli = document.createElement("li");
    let newspan = document.createElement("span");
    let newbutton = document.createElement("button");

    newli.className = "to-do-item";

    newbutton.className = "del-btn";
    newbutton.innerText = "delete";

    newspan.className = "span";
    newspan.innerText = newvalue;

    newli.appendChild(newspan);
    newli.appendChild(newbutton);

    // حذف آیتم از لیست و localStorage
    newbutton.addEventListener("click", () => {
        newli.remove();
        saveListToLocalStorage(); // ذخیره لیست بعد از حذف
    });

    return newli;
}

// بارگذاری لیست از localStorage هنگام بارگذاری صفحه
window.onload = function () {
    loadListFromLocalStorage();
};
