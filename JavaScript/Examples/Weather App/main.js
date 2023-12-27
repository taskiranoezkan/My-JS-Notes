const input = document.querySelector("#search-input");
const button = document.querySelector("#search-btn");
const city = document.querySelector("#city");
const time = document.querySelector("#time")
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const refreshBtn = document.querySelector("#refresh-btn");

// Input elemanına Enter tuşu için event listener ekleme
document.getElementById('search-input').addEventListener('keypress', handleEnterKey);

runEvents();

function runEvents() {
    button.addEventListener('click', search);
}

function search(e) {
    // Weatherstack API Anahtarı
    const apiKey = '8860add971162425ffd5635ec364f387';

    // Kullanıcıdan alınan şehir adını al
    const inValue = input.value;

    // API'ye yapılan GET isteği için HTTPS ile örnek URL
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${inValue}`;

    // Fetch API ile hava durumu bilgilerini al
    fetch(apiUrl, {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Burada data nesnesinde hava durumu bilgileri bulunur, istediğiniz şekilde kullanabilirsiniz.
            city.textContent = `${data.location.name}, ${data.location.country}`
            description.textContent = `${data.current.weather_descriptions[0]}`
            temperature.textContent = `${data.current.temperature}`
            time.textContent = `${data.current.observation_time}`
        })
        .catch(error => console.error('Hata:', error));

    e.preventDefault();
}


// Enter tuşuna basıldığında çalışacak fonksiyon
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        search(); // Arama fonksiyonunu çağır
    }
    }



