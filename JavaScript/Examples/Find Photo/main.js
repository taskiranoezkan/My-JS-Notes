const formWrapper = document.querySelector(".form-wrapper")

const form = document.querySelector("#form")

const searchInput = document.querySelector("#searchInput")

const buttonWrapper = document.querySelector(".button-wrapper")

const searchButton = document.querySelector("#searchButton")

const clearButton = document.querySelector("#clearButton")

const imageListwrapper = document.querySelector(".imageList-wrapper")




runEventListeners();


function runEventListeners() {
    form.addEventListener("submit", search);
    clearButton.addEventListener('click', clear)
}




function clear() {
    searchInput.value = "";
    Array.from(imageListwrapper.children).forEach((child) => {
        child.remove();

    // imageListwrapper.innerHTML="" de hemen yukarıdaki şey ile aynı işi yapar
    })
}






function search(e) {

    const value = searchInput.value.trim();

    // RequestParam -- Spring -- Rest API
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID eg0oShZ-7VYsWR9L-CKTCmRS24X9vzaRcEK8OxwOlnA" // token yanlış ise 401 yani yetkisiz olan http kodu döner
        }
    })
        .then((res) => res.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                //console.log(image.urls.small)
                addImageToUI(image.urls.small)
            })
        })
        .catch((err) => console.log(err))


    // sayfa yenilendiğinden biz consola yazılanı göremiyoruz bunun için e.preventDefault() özelliği kullanılır
    // console.log("Enes Bayram")
    e.preventDefault() //refresh yapılmasını engelliyor
}





function addImageToUI(url) {
    const div = document.createElement("div")
    div.className = "card"

    console.log(imageListwrapper)

    const img = document.createElement("img")
    img.setAttribute("src", url)
    img.width = 400; // Genişlik
    img.height = 400; // Yükseklik



    div.append(img)
    imageListwrapper.appendChild(div)

}