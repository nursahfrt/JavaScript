 //-------1. Id ile HTML Elemanı Bulma-------
let kimlikleVeriCekme = document.getElementById("kimlik");
console.log(kimlikleVeriCekme);

 //-------2.Etiket(tag) Adına Göre HTML Elements Bulma-------
let EtiketleVeriCVekme = document.getElementsByTagName("p");// tüm p etiketleri

 let element = document.getElementById("deneme"); // id = deneme olan elementteki tüm p tagları
 let yeniTag = element.getElementsByTagName("p");
 
let renkDeğistir = document.getElementsByTagName("p");//Dokumandaki tüm p etiketlerinin rengini değiştir.
let i;
for (i = 0; i < renkDeğistir.length; i++) {
    renkDeğistir[i].style.backgroundColor = "blue";
}

 let tag = document.getElementsByTagName("*"); // tüm etiketlerin hepsi

 //-------3.HTML Öğelerini Sınıf adına göre bulma-------
let sinif = document.getElementsByClassName("sınıf1"); 

let topluSinif = document.getElementsByClassName("sınıf1 sınıf2"); // hem sınıf1 hem de sınıf2 elementinr ait tüm ögeleri maviye boya
let j;
for (j = 0; j < x.length; j++) {
    x[j].style.backgroundColor = "blue";
}

//-------4.HTML DOM querySelector () Yöntemi-------
document.querySelector("p"); //belgedeki ilk <p> tagını bulur.
document.querySelector("p.cssSecim"); //p tagının içinde classı cssSecim olna ilk elementi bulur.
document.querySelector("#kimlik"); // beldedeki id = kimlik olan ilk elementi bulur.
document.querySelector("div > p"); // div tagının içindeki ilk p tagını bulur.
document.querySelector("a[target]"); // a(sayfaya bağlantı verir) tagının ilk target(bağlantının hangi sayfada açılacağını belirtmek için) elementini bulur.
document.querySelector("h1, h2").style.backgroundColor = "red"; //birinciye bir arka plan rengi katacak

//-------4.HTML DOM querySelectorAll () Yöntemi-------
document.querySelectorAll("div > p");// div tagının "içindeki" tüm p tagını bulur.
document.querySelectorAll("h2, div, span"); // tüm h2, div ve span tagları


//5.HTML Elemanlarını HTML Nesne Koleksiyonlarıyla Bulma




//-------Veri değiştirme-------
//"kimlik" = kimliğine sahip bir öğenin metnini değiştirin:
document.querySelector("#kimlik").innerHTML = "Hello World!";





 
