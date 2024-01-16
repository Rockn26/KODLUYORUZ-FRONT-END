
// kullanıcıdan isim ve soyisim aldığımız yer. 

let name = prompt("İsminizi girin: ");
// etiketi seçiyoruz
let greeting = document.querySelector("#myName");

// İsim ve soyisim bilgisini HTML'e yazdırma
greeting.innerHTML = name;

function clock() {
    var date = new Date();

    // şu anki saniye dakikayı ve saati alıyor
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // haftanın günleri için bir dizi oluşturduk
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var day = days[date.getDay()];

    // etiketi seçtik
    var now = document.querySelector("#myClock");

    // Tek haneli zaman birimlerine '0' eklenmesi
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //  çıktıları html elementine yazdık.
    now.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;
}

setInterval(clock, 1000);

clock();
