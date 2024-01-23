let saved = [];  // Kaydedilmiş görevleri tutacak dizi

// İlk çalıştırıldığında oluşturulacak varsayılan görev listesi
const firstAct = [
    "3 Litre Su İç",
    "Ödevleri Yap",
    "En Az 3 Saat Kodlama Yap",
    "Yemek Yap",
    "50 Sayfa Kitap Oku"
]
const ulDOM = document.querySelector("#list");  // Görevlerin listeleneceği UL elementini seçer
let task = document.querySelector("#task"); // Kullanıcıdan alınacak yeni görev için input elementini seçer
let list = document.querySelector('li');

const close = `<span class="close" onclick="sil(parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`;

// Eğer localStorage boşsa veya sadece boş bir dizi varsa, varsayılan görevleri ekler
if (localStorage.getItem('saved') === null || localStorage.getItem('saved').length === 2) {
    firstAct.forEach(a => {
        let list = document.createElement('li');  // Yeni liste elemanı oluşturur
        list.innerHTML = `${a}${close}`; // Görev metni ve silme butonunu içeriğe ekler
        list.addEventListener("click", clicked); // Görev üzerine tıklama event'ini ekler
        saved.push(list.innerHTML); // Oluşturulan görevi boş olan 'saved' dizisine ekler
        ulDOM.append(list); // Görevi UL elementine ekler
        localStorage.setItem('saved', JSON.stringify(saved)); // 'saved' dizisini localStorage'a kaydeder
    });
}
else { // Eğer localStorage zaten tanımlıysa, kaydedilmiş görevleri yükler
    saved = JSON.parse(localStorage.getItem('saved'));
    saved.forEach(a => {
        let list = document.createElement('li');
        list.innerHTML = `${a}`;
        list.addEventListener("click", clicked);
        ulDOM.append(list);
    })
}
// Tamamlandı olarak işaretler
function clicked() {
    this.classList.toggle("checked");
}
//Yeni eleman ekleme fonksiyonu
function newElement() {
    //boş karakter eklemeyi engeller
    if (task.value.length > 0 && !(task.value.trim().length === 0)) {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `${task.value}${close}`;
        liDOM.addEventListener("click", clicked);
        ulDOM.append(liDOM);
        saved.push(liDOM.innerHTML);
        localStorage.setItem('saved', JSON.stringify(saved));
        $('.success').toast('show'); // başarılı toast mesajı 
        task.value = "";
    } else {
        $('.error').toast('show'); // hata toast mesajı 
        task.value = ""; // inputu temizledik
    }
}
//Local Storage ile beraber çalışan silme fonksiyonu
function sil(parentNode) {
    saved.splice(saved.indexOf(parentNode.innerHTML), 1);
    localStorage.setItem("saved", JSON.stringify(saved)); // Güncellenmiş 'saved' dizisini localStorage'a kaydeder
    parentNode.remove();
}