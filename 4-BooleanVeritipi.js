
let userName = "user"
console.log("1) " + Boolean(userName))

let name = Boolean(userName)    //name = true değeri atadık
console.log("2) " + name)

let user        // user boş olduğu için boş değer karşılı false
console.log("3) " + Boolean(user)) 

console.log("4) " + Boolean(0===0))

console.log("4) " + Boolean("1"==1))  // veri tipi eşitliğine bakmaz değerler eşit mi? ye bakar

console.log("4) " + Boolean("1"===1)) // katı eşitlik (veri tipine kadar aynı olmalı)

console.log("5) " + Boolean(-0)) //içinde 0 , -0 , boş (""), null, false, NAN, değersiz (undefined) gibi ifadeler varsa false döndürür.

console.log("5) " + Boolean(0.1)) //içinde yukarıdakiler hariç herhangi bir değer varsa true döndürür.

//karar yapıları dersinde tekrar anlatılacak.



