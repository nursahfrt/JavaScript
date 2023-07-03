let fiyat = 10
let kdv = 0.18
let kdvTutari = fiyat*kdv
let total = fiyat+kdvTutari

//Template Literals Kullanımı

console.log(`1)
Fiyat       :   ${fiyat}
Kdv oranı   :   ${kdv}
Total       :   ${total}
`)

let string = "11"
console.log(`2)typeof veri tipi : ${typeof string}`)
let newNumber = Number(string)
console.log(`3)typeof veri tipi : ${typeof newNumber}`)
console.log(`number veri türü kullanımı : ${Number("111")}`)

//arttırma operatörü
let counter = 320
counter = counter+1 //1 arttırdı. (hepsi aynı şey)
counter+=1          //1 arttırdı
counter++           //1 arttırdı
console.log("4)arttırma operatörü : "+counter)

//azaltma operatörü
counter = counter-1
counter-=1
counter--
console.log("5)azaltma operatörü : "+counter)

//çarpma operatörü
counter *=10
console.log("6)çarpa operatörü : "+counter)

//bölme operatörü
counter/=10
console.log("7)bölme operatörü : "+counter)

//mod alma operatörü
//8 li kolilere 90 yumurta sığar mı? gibi modsal işlemlerde
counter%=9
console.log("8)mod alma operatörü : "+counter)

//üs alma
let us = 2*2*2*2    //bu norman çarpma aşağıda yazdığım üs alma yazılımı
let usAlma = 2**4
console.log("9)üs alma operatörü : "+usAlma)

//aşağı yuvarlama 
let asagi = 18.9
console.log("10)aşağı yuvarlama : "+Math.floor(asagi))
let yukari = 18.1
console.log("11)yukarı yuvarlama : "+Math.ceil(yukari))
let yakinayuvarla = 18.4
console.log("12)yakına yuvarlama : "+Math.round(yakinayuvarla))
let yakinayuvarla2 = 18.5
console.log("12)yakına yuvarlama : "+Math.round(yakinayuvarla2))




