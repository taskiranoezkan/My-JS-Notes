// JSON:::JavaScriptObjectNotation--->JavaScript de Nesne Gösterimi
// Notation--->Gösterim
// JSON Syntaxı Javascripttin obje tanımlama syntaxına benzer

//JSON--->Yazım formatı vardır

// JSON --> Veri formatı hem depolamak hemde iletmek için



//Farklı dillerin birbiri ile haberleşmesi konuşması için ortak bir dil veri formatı denir
// Genel olarak server tarafından client tarafına veri iletiminde kullanılır
// XML ' e alternatiftir
// Objeye benzer fakat fark JSON'da keyler string ve tırnak içerisinde olmalı


// ÇOK BENZER OLDUKLARINDAN DOLAYI OBJEDEN JSON'A jSON'DAN OBJEYE DÖNÜŞÜM YAPABİLRİZ
// YA {} BU ŞEKİLDE YA DA [] BU ŞEKİLDE BAŞLAR



// Converting JSON to JavaScript Object
// JSON DATALARI BACKENDDEN ÇEKERİZ BUNU JAVASCRİPTTE KULLANABİLMEMİZ İÇİN PARSE ETMELİYİZ
// AYNI ŞEKİLDE JAVASCRİPT OBJESİNİ SUNUCUYA İLETMEMİZ İÇİN STRİNGİFY KULLANIRIZ

// UZANTI JSON OLMALI

let sampleJson=`[
    {
        "name":"Özcan",
        "surname":"Taşkıran",
        "skills":[
            {
                "Front End":"['HTML','CSS','JAVASCRİPT']"
            },
            {
                "Backend":"['NODEJS','PHP','PYTHON']"
            }
        ],
        "property":[1.76,75]
        
    },
    {
        "name":"Özkan",
        "surname":"Taşkıran"
    },
    {
        "name":"Gökan",
        "surname":"Taşkıran"
    }
]`

console.log(sampleJson)
// TİPİNE BAKILINCA STRİNG DÖNER
console.log(typeof sampleJson)

// Json normal şartlar altında string uygun formattaki json stringini js de kullanmak istersek yani js objesine çevirmek istersek
let user=JSON.parse(sampleJson)
console.log(user)
console.log(typeof user)



let categories=[
    {
        name:'CSS',
        count:5
    },
    {
        name:'javascript',
        count:16
    }

]


// JSON FORMATINA ÇEVİRME
console.log(categories)
console.log(typeof categories)


// HATA YÖNETİMİ DE KONTROL EDİLDİ
try {
    let kategori=JSON.stringify(categories)
    console.log(kategori)
    console.log(typeof kategori)
} catch (error) {
    console.log(error)
}



// örnek
const usersText=`{
    "users":[
        {
            "firstName":"Özkan",
            "lastName":"Taşkıran",
            "age":23,
            "email":"tskrno14@gmail.com"
        },
        {
            "firstName":"Özcan",
            "lastName":"Taşkıran",
            "age":25,
            "email":"tskrnn29@gmail.com"
        },
        {
            "firstName":"Gökan",
            "lastName":"Taşkıran",
            "age":21,
            "email":"tskrn0@gmail.com"
        }
    ]
}`

const userObj=JSON.parse(usersText,(key,value)=>{
    let newValue=
    typeof value == 'string' && key!='email' ? value.toUpperCase() : value //İSİM VE SOYİSİMİ BUYUK HARF YAPMIS
    return newValue
})
console.log(userObj)



// NOT::::JSON.stringify(obj, replacer, space)
// NOT::::JSON.parse(string)









