let adSoyad = prompt("Adınız Soyadınız : ")
let user = document.querySelector("#myName")
user.innerHTML = `${adSoyad}`

function zaman() {
let tarih = new Date()
let saat = tarih.getHours()
let dakika = tarih.getMinutes()
let saniye = tarih.getSeconds()

let gun =['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
let gunAdi = gun[tarih.getDay()]

let bilgi = document.querySelector("#myClock")
bilgi.innerHTML = `${saat} : ${dakika} : ${saniye}   ${gunAdi} `

}
setInterval(zaman,1)