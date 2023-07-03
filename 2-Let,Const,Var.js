let a = 5
console.log("1) let = " + a)

a= "a yı string yaptım"
console.log("1) = " + a)

let b
console.log("2) tanımsız değer = " + b)
b= "şimdi tanımladım"
console.log("2) = " + b)

// const da değişkeni boş tanımlayamazsın hata verir.Atama yapmak zorundasın.
//atadığın değeri bir daha değiştiremiyorsun.

const pi = 3.14 // değeri değişmiyor hata veriyor.
console.log("3) const = " + typeof pi)



c= a+b
console.log("4) birleştirme = " + c)

// Hoisting kullanımı = önce değişkenin değerini ata sonra değişkenin türünü tanımlama.

//var7
console.log("5) var hoisting kullanımı = " + x)// x değerini konsola yazdırdık.
x = 5;          // x'e 5 değerini atadık.
var x;          // x değişkenini tanımladık.

//let ve const = hata verir. Bu yöntemi kullanamazsın. hata veriyor.
console.log(isim)   // Yanlış kullanım. Hata verir.
isim = "Zafer";     // Yanlış kullanım. Hata verir.
let isim;
console.log("6) let/conts hoisting kullanımı = " + isim);