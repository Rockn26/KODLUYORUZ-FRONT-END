let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
// Uyarı mesajı için DOM objesini seçme
const alertDOM = document.querySelector('#alert')

// Uyarı mesajı fonksiyonu
const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username") // Kullanıcı adı girişini al
    const SCORE = document.querySelector("#score") // Skor girişini al


    // Kullanıcı adı ve skor varsa, liste öğesi ekle
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    } else {
         // Eksik bilgi varsa uyarı göster
        alertDOM.innerHTML = alertFunction(
            "Başlık Bilgisi",
            "Eksik Bilgi Girdiniz",
            "success"
            )
    }
}


const userListDOM = document.querySelector('#userList')

// addItem fonksiyonu: Yeni bir liste öğesi (li) oluşturur ve kullanıcı listesine ekler
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')

    // 'li' öğesinin içeriğini ayarla. Kullanıcı adı ve skor bilgisini içeren bir 'span' etiketi ekle
    liDOM.innerHTML = `  
    ${userName}
    <span class="bg bg-primary bg-pill">${score}</span>
      
        `

     // 'li' öğesine Bootstrap sınıflarını ekle. Bu sınıflar, liste öğesinin düzenini ve görünümünü ayarlar
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)   // Oluşturulan 'li' öğesini kullanıcı listesine ekle

}
