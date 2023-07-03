//karakter sayısı = .lenght
let isim = "Nurşah Yıldız Fırat"
console.log("isim : " + isim)
console.log(" 1) .lenght(..) : " + isim.length)

//metin içinde arama yapma = .indexOf(..)   .lastIndexOf(..) ya da  .search(..)
console.log(" 2) .indexOf(..) : " + isim.indexOf("Y"))
console.log(" 2) .lastIndexOf(..) : " + isim.lastIndexOf("a"))
console.log(" 2) .search(..) : " + isim.search("Fır")) // arattığımız şey yoksa -1 döndürür.

//metinden parça alma = .slice(..)
console.log(" 3) .slice(..) : " + isim.slice(7)) // bu indexten sonraki tüm karakterleri al.
console.log(" 3) .slice(..) : " + isim.slice(14,19))

//metin bulup onu değiştirme = .replace(..)
console.log(" 4) .replace(..) : " + isim.replace("Nurşah Yıldız","Sezer"))

//büyük harfe çevirme = .toUpperCase()
console.log(" 5) .toUpperCase() : " + isim.toUpperCase())

//küçük harfe çevirme = .toLowerCase()
console.log(" 6) .toUpperCase() : " + isim.toLowerCase())

//metin birleştirme = .concat(..)
console.log(" 7) .concat(..) : " +isim.concat(" burda"))

//indexteki karakteri bulma = charAt() ya da []
console.log(" 8) .charAt(..) : " +isim.charAt(7))
console.log(" 8) [..] : " +isim[7])


//İndex Numarasına Göre Karakterin Unicode Değerini Bulma = charCodeAt(..)
console.log(" 9) .charCodeAt(..) : " +isim.charCodeAt(7))

//metni diziye çevirme = split(..)
console.log(" 10) .split(..) : " +isim.split(" ",1))
console.log(" 10) .split(..) : " +isim.split(" ",2))
console.log(" 10) .split(..) : " +isim.split(" ",3))

//aradığım veri bu parça içinde var (boolean döndürür) = includes(..)
console.log(" 11) .includes(..) : " +isim.includes("F"))
console.log(" 11) .includes(..) : " +isim.includes("Y",7))
console.log(" 11) .includes(..) : " +isim.includes("q",7))

//Aldığımız veri istediğimiz bilgiyle başladı mı? Veya istediğimiz bilgiyle bitti mi? 
// (boolean döndürür) = startsWith(..) endsWith(..)
let mail = "www.nrs@gmail.com"
console.log("mail : " + mail + " uzunluk : " +mail.length)
console.log(" 12) .startsWith(..) : " +mail.startsWith("www."))
console.log(" 12) .startsWith(..) : " +mail.startsWith("www.",0))
console.log(" 12) .endsWith(..) : " +mail.endsWith("@gmail.com"))
console.log(" 12) .endsWith(..) : " +mail.endsWith("@gmail.com",17))

console.log(" 13)  : " +mail.slice(mail.indexOf("@")+1))



