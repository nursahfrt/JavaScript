let isimSoyisim = prompt("Adınız Soyadınız : ","Örn: Nurşah Fırat")
document.write(isimSoyisim)
let yas = prompt("Yaşınız : ")
document.write(yas)

//document.getElementById yerine dovument.querySelector kullanıcaz. aynı şey!!
let info = document.querySelector("#baslik")            //querySelector('#id') = başk sayfadan id ile veri çekerken kullanılr.
info.innerHTML = `${info.innerHTML} : ${isimSoyisim}`   //.innerHTML ise başka sayfadan çekilen verileri değiştirmek için kullanılır.
