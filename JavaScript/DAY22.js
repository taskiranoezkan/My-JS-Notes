// DOM-2
// Creating Element 
// Javascript ile yeni bir element oluşturmak tagName ile yapılır ve bu oldukça basit bir şeydir
// document.createElement('tagName') şeklinde kullanılır
let baslik = document.createElement('h1')
baslik.className = 'title'
baslik.style.fontSize = '25px'
baslik.style.backgroundColor = 'blue'
baslik.textContent = 'CreateElement'
// Her ne kadar elemanı oluştursak da eleman'ın dökümanda nerede görüneceğini belirlemediğimizden dolayı gözükmez


// Birden fazla HTML elemanı oluşturmak için döngü kullanlır
// element oluşturduktan sonra istedişğimiz propertyleri atayabilriz style  vs kulllanarak


// Üst elemana(parent) çocuk elemanı(child) ekleme--->Append Etme yani sonuna
// Üst elemana(parent) çocuk elemanı(child) ekleme--->prepend Etme yani başına 




// NOT:: Oluşturduğumuz bir elemanı dökümanda görmek istiyorsak onu bir üst elemana çocuk elemanı olarak eklememiz gerek
// document.body appendChild adında bir metod da destekliyor
// Direkt append de destekler ama geriye dönen bir şey yok bunda
// appendChild metodu ise bir Node objesi geriye döner
// Append de bir sürü elemanı append edebilriken appendChild sadece bir tane elemanı destekler


let baslik2 = document.createElement('h1')
baslik2.className = 'title'
baslik2.style.fontSize = '25px'
baslik2.style.backgroundColor = 'red'
baslik2.textContent = 'CreateElement'

document.body.append(baslik)

document.body.prepend(baslik2)


for (let index = 0; index < 10; index++) {
    let baslik = document.createElement('h1')
    baslik.className = 'title'
    baslik.style.fontSize = '25px'
    baslik.style.backgroundColor = 'blue'
    baslik.textContent = 'CreateElement'
    baslik.style.color='white'

    document.body.append(baslik)

    let baslik2 = document.createElement('h1')
    baslik2.className = 'title'
    baslik2.style.fontSize = '25px'
    baslik2.style.backgroundColor = 'red'
    baslik2.textContent = 'CreateElement'
    baslik2.style.color='white'

   

    document.body.prepend(baslik2)
}



// Bir çocuk elemanı(child) üst elemandan nasıl sileriz
// removeChild() metodunu kullanırız
// element.remove() da kullanılabilir ama o zaman elemanı seçmemiz lazım


const allH1Elements= document.querySelectorAll('h1.title') //H1'lerden classı title olanı seçiyor
console.log(allH1Elements)

for (const h1 of allH1Elements) {
    // h1.remove() Bu direkt siler
    // document.body.removeChild(h1) // Bu ise parent elementin içindeki demek zorunda bıraktırıyor
    // Ayrıca remove daha iyi gibi
}

// NOT:: Önceki bölümlerde kullanmış olduğumuz innerHTML ile bu işi yapabilirdik
document.body.innerHTML=''
// İçindeki elemanları direkt komple silmek 
// Mesela bir div var ve bu divin içinde belli elemanlar var divi seçip içindekileri bu yolla silebiliriz.







// Hiyeraşik olarak dıştan içe doğru element oluşturup onu onun içine atarız genelde

// Dinamik Olarak Elememnt Oluşturmak
const link=document.createElement('a')
link.id='goBlogWebSite'
link.className='btn btn-dark'
link.target='_blank'
link.href='www.youtube.com'
link.innerHTML='Web Siteme Git'
link.style.backgroundColor='yellow'
link.style.color='red'
document.body.appendChild(link)


// yeni todo oluşturmak
const todo=document.createElement('li')
todo.classList='list-group'

const todoLink=document.createElement('a')
todoLink.className='delete-item'
todoLink.href='#'

const i = document.createElement('i')
i.className='fa fa-remove'

todoLink.appendChild(i)

todo.appendChild(todoLink)


const todoList=document.querySelector('.list-item')
todoList.appendChild(todo)




// Element Silmek --->Dinamik olarak
// const todoListe=document.querySelector('list-group') ---> todoListeyi alır
// const tdos=document.querySelectorAll('list-group-item') --->nodeList halinde döner
// tdos[0].remove();

// Direkt seçip remove da edebilriz
// silinecek elementin parent üzerinden silmek
//- todoList.removeChild(todo[0])
//- todoList.removeChild(todolist.lastElementChild)





// Elementleri Değiştirmek
// element.replaceChild(yeni,eski) --->Diye bir metod var, node tipinde değer yakalıyor 

const cardBody=document.querySelectorAll('.card-body')[1]
// element seçilecek her türlü

const newElement=document.createElement('h1')
newElement.className('card-title')

newElement.textContent='Todo Listesi Yeni'

cardBody.replaceChild(newElement,cardBody.childNodes[1])
// 2.element node tipinde istenir