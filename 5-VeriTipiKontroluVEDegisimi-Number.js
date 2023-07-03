//veri türünü öğrenme = typeof ..
let sayi = 11;
console.log("1) typeof : " +typeof sayi)

let string = "11"
console.log("1) typeof : " +typeof string)

console.log("1) typeof : " +typeof true)

//strinh değeri integer a çevirme  = Number.parseInt(..)
console.log("2) Number.parseInt : " + Number.parseInt(string))

console.log("2) Number.parseInt : " + Number.parseInt("11px"))

//strinh değeri ondalık sayıya çevirme  = Number.parseFloat(..)
console.log("3) Number.parseFloat : " + Number.parseFloat("11.5px"))

//number veri tipini stringe dönüştürme = toString()
let donustur = 11
console.log("4) toString() : " + donustur.toString())
//----------------------------------------------------
// boolean devamı
// Aşağıdaki ifadeler boolean sorgular. true / false döndürür. is ile kulanılan her sey boolean döndürür.

//isInteger(..) yöntemi = Sayıların tam sayı mı? 
console.log("5) Number.isInteger(..) : " + Number.isInteger("123")) //false
console.log("5) Number.isInteger(..) : " + Number.isInteger(123))  //true
console.log("5) Number.isInteger(..) : " + Number.isInteger(0.5))  //false
console.log("5) Number.isInteger(..) : " + Number.isInteger([1,2,3]))  //false (toString() le stringe çevirerek işlem yapar.)
console.log("5) Number.isInteger(..) : " + Number.isInteger({}))  //false

//isFinite () yöntemi = Değer sonlu bir sayı mı?  (eleman sayısı sayılabiliyorsa sonlu.)
// string ifadeler sonlu değil. çünkü sayı değil.
console.log("6) Number.isFinite(..) : " + Number.isFinite("123"))   //false
console.log("6) Number.isFinite(..) : " + Number.isFinite(123) )    //true
console.log("6) Number.isFinite(..) : " + Number.isFinite(0) )      //true   
console.log("5) Number.isFinite(..) : " + Number.isFinite([1,2,3])) //false (toString() le stringe çevirerek işlem yapar.) 
console.log("5) Number.isFinite(..) : " + Number.isFinite({}))      //false (toString() le stringe çevirerek işlem yapar.) 

// Number.isNaN (..) yöntemi = Değerin NaN (Not-A-Number) olup olmadığını belirler. "Sayı değil" demektir. hatalarda da kullanılır. bir tek nan ve 0/0 değerinde true döner. yoksa hep false!
console.log("7) Number.isNaN(..) : " + Number.isNaN(NaN))       //true
console.log("7) Number.isNaN(..) : " + Number.isNaN(0/0))       //true
console.log("7) Number.isNaN(..) : " + Number.isNaN(-Infinity)) //false
console.log("7) Number.isNaN(..) : " + Number.isNaN("123"))     //false
console.log("7) Number.isNaN(..) : " + Number.isNaN(123) )      //false
console.log("7) Number.isNaN(..) : " + Number.isNaN(0) )        //false   
console.log("7) Number.isNaN(..) : " + Number.isNaN([1,2,3]))   //false (toString() le stringe çevirerek işlem yapar.) 
console.log("7) Number.isNaN(..) : " + Number.isNaN({}))        //false (toString() le stringe çevirerek işlem yapar.) 


console.log(parseInt("12")) //12 (explicit)

let a = '' + 123 
console.log(typeof a)       // “123” (içinde string ifade varsa o değer string olarak yazılır.)
let b = 123 + ''
console.log(typeof b)       // “123” 

// "/" operatörü numeric işlem yapar!
console.log("6"/2)         // 3
console.log(12/"6")        // 2
// Başlangıçtaki sayı number olduğu için "6" ifadesi numaric coercion'a uğrar Number("6") ve 6 değerini döner 12 / 6 bu şekli alır Sonuç= 2 (implicit)

/* String(123)     // “123”
String(-12.3)   // “-12.3”
String(null)    // “null”
String(undefined) // “undefined”
String(true)    // “true”
String(false)   // “false” */

//Boolean Dönüşümü
//(javanın kendiğilinden dönüşümü iplicit, bizim dönüştürdüğümüz explicit)
//Eğer bir değeri açık bir şekilde (explicit) boolean'a dönüştürmek istiyorsak Boolean() fonksiyonu kullanılır.
//Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir. (|| && !) 

Boolean(2) // explicit
let c = !!2 //explicit  !! = boolean olarak sorgula demek
console.log(c)
/* if (2) { ... } // implicit due to logical context */
console.log(!!2) // implicit due to logical operator
console.log(2 || 'hello') // implicit due to logical operator ( || = ilk true değeri döndür demek)

//Fonksiyon, Dizi (Array),Tarih (Date), kullanıcı tanımlı tip (user-defined-type) vb Symboller gerçek değerlidir (truthy value).
//Hatta boş nesneler (objectler) ve diziler (arrayler) gerçek değerlidir (truthy value).

Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true

//Önemli NOT: Mantıksal operatörlerden || ve &&, dönüşüm işlemini internally (dahili olarak) yapar.
//Ama gerçekte ifadenin operand değerini döndürür, değer boolean tipinde olmasa bile.

//Örneklerle daha iyi anlayalım.

// veya “||” operatörü ilk bulduğu true değeri döner
var x= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var y=0 || "" || false || -0 || 0 // 0
var z= 0 || "" || "123" || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var w=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var q= 2 && 3 && 5 && 7 // 7

console.log(true+false)
// "+" operatörü numeric işlem yapar bu durumlardan boolean ifadeler numaric coercion'a uğrar.
//Number(true) + Number(false) dönüşen ifade 1+ 0 şeklini alır Sonuç = 1

console.log(12 / "6")
// "/" operatörü numeric işlem yapacağından 
//Başlangıçta number olduğu için "6" ifadesi numaric coercion'a uğrar Number("6") ve 6 değerini döner 12 / 6 bu şekli alır Sonuç= 2

console.log([1,2,3]>null)
// ">" karşılaştırma operatörü olduğundan numaric coercion yapacaktır.
//[1,2,3] bir array olup refarans tip tutuğundan primitif değere dönüştürülerek işleme alınır
//[1,2,3].toString() kullanıldığında içeri ”1,2,3” değerini döndürür
//”1,2,3”> null şeklini alır
//">" karşılaştırma ifadesi olduğundan tekrar numaric coercion tetiklenir
//String ifade numbera zorlanır Number(“1,2,3”) Number("1,2,3") ifadesinin sonucu NaN olacağından
//NaN>null şeklini alır
//ve NaN kendine dahil hiç kimseye eşit olmadığından!! Sonuç= false

console.log("number" + 15 + 3)
// örneğimizin başında string bir ifade bulunduğundan diğer ögeler için de string coercion tetiklenir
// "number+ "15" + "3" şeklini alır Sonuç= "number153"

console.log(['x','y'] == 'x,y')
// == operatörü array için numeric coercion yapacaktır
//['x','y'] dizisinin numeric coercion yapabilmesi için primitif tipe dönüştürmek gerekir.
// ['x','y'].toString() metoduyla "x,y" döner
// Son eşitlik "x,y"=="x,y" halini alır  Sonuç= true

//Alıştırmalar
//1
console.log("foo" + +"bar") // +"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonuç= "fooNaN"
//2
console.log('true' == true) //Number('true')=>NaN //NaN == true //NaN == 1 //Sonuç= false
//3
console.log(null=="")       // null sadece kendine ve undefined'a eşit olduğundan //Sonuç= false
//4
console.log(0 || "0" && {}) //(false || true) && {} --> ( dolu string true döndüğünden "0"= true) (|| operatörü ilk bulduğu true değeri döndürdüğünden ilk işlem true olur),
//(true) && {} =>  (&& operatörü ilk bulduğu false değeri döner. false yoksa son bulduğu true değerini döndürür.)
//true && {} =>  Sonuç={}

//5
console.log(["a"] > null) //"a" > null => array toStirng metodunun içine girer //NaN > null => Numeric dönüştürmeye girer //NaN > 0 //Sonuç= false




