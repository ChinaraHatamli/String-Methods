const prompt = require("prompt-sync")();

//Birleshdirme

//let ad = "Chinara";
//let soyad = "Jalilova";
//let adSoyad = ad + " " +soyad;
//console.log (adSoyad);

//let day = 25;
//let month = 08;
//let year = 1993;
//console.log (day, month, year);
//console.log ("Chinara Jalilova " +day+ "."+month+"."+year+);



//Array olaraq simvolun necenci indexde oldugunu tapiriq.
//let name = "Chinara Jalilova";
//console.log (name [5]);


//Stringin nece simvol oldugunu olcur ve boslugu da goturur.
//let name = "Chinara Jalilova"
//console.log (name.length);


//Stringin bütün hərflərini böyük hərflərə çevirir.
//let name = "Chinara Jalilova";
//console.log (name.toUpperCase());


//Stringin bütün hərflərini kicik hərflərə çevirir.
//let name = "Chinara Jalilova";
//console.log (name.toLowerCase());



//Stringde verilmiş simvolun indexini qaytarır.
//let name = "Chinara Jalilova";
//console.log (name.indexOf("l"));

//let name = "Chinara Jalilova";
//let index = name.indexOf("h");
//console.log ("H indexi: "+index);



//Stringde verilmiş simvolun son təkrarını qaytarır.
//let name = "Chinara Jalilova";
//let index = name.lastIndexOf("a");
//console.log(index);


//Müəyyən bir indexdə stringin indexini qaytarır.
//let name = "Chinara Jalilova";
//console.log (name.charAt(4)); (r herfini qaytarir)
//console.log (name.charAt(name.length-4)); (l herfini qaytarir)



//Müəyyən bir indexdə stringin Unicode deyerini qaytarır.
//let name = "Chinara Jalilova";
//console.log (name.charCodeAt(4));
//console.log (name.charCodeAt(1));



//Stringin müəyyən hissəsini götürür və yeni sətir yaradır.
//let name = "Chinara Jalilova";
//console.log (name.slice(7));
//console.log (name.slice(0,7));



//Stringin indexinden sonraki hissesini goturur ve yazir.
//let name = "Chinara Jalilova";
//console.log (name.substring(5));



//Bir stringi basqa bir stringle birlesdirir.
//let name = "Chinara";
//let surname = " Jalilova";
//console.log (name.concat(surname));



//Stringdeki bosluqlari silir.
//let name = "  Chinara  ";
//console.log (name);
//console.log (name.trim());


//Stringdeki adi replace edir. Amma consoleda deyismek istediyini de qeyd etmelisen.
//let name = "Chinara";
//console.log (name.replace("Chinara","Jalilova"));


//Verilmiş bütün sözləri dəyişir.
//let name = "Chinara Hatamli";
//console.log (name.replaceAll("Chinara Hatamli", "Chinara kitab oxuyur"));



//Stringin icinde axtaris edir,true yaxud false cixardir)
//let name = "Chinara kitab oxuyur";
//console.log(name.includes("kitab"));
//console.log (name.includes("defter"));


//String müəyyən mətnlə başlayıb-başlamamasını yoxlayır. true yaxud false verir.
//let name = "Chinara kitab oxuyur";
//console.log (name.startsWith("kitab"));
//console.log (name.startsWith("defter"));
//console.log (name.startsWith("Chinara"));


//String müəyyən mətnlə bitmeyini yoxlayır. true yaxud false verir
//let name = "Chinara kitab oxuyur";
//console.log (name.endsWith("kitab"));
//console.log (name.endsWith("oxuyur"));


//Stringi nece defe istese tekrarlaya biler.
//let name = "Chinara ";
//console.log (name.repeat(5));



//negativ indexler de istifade olunur.
//let name = "Chinara Jalilova";
//console.log(name.slice(-3)); 
//console.log(name.substring(name.length - 3)); 



//Stringin icindekileri ayirir, herflere ayirir ve vergul qoyur.
//let name = "////Chinara";
//console.log (name.split(""));


//Verilmiş şərtə uyğun axtarır və indexi qaytarır.
//let name = "Chinara !!!? Jalilova.";
//console.log(name.search("a"));



//Verilmiş textin dəyərini qaytarır.
//let name = "Chinara Jalilova";
//console.log (name.valueOf());


//String formatına çevirir.
//let number = 12;
//console.log (number.toString(16));


//Bu üsul müəyyən bir uzunluğa çatmaq üçün başlanğıcda müəyyən bir simvolu olan bir sətir yazir.
//let name = "Chinara";
//console.log (name.padStart(15, "kitab"));



//Bu üsul müəyyən bir uzunluğa çatmaq üçün sonluqda müəyyən bir simvolu olan bir sətir yazir.
//let name = "Chinara";
//console.log (name.padEnd(16, " Jalilova"));



//let name = "Chinara bu gun kitab oxuyub?!";
//console.log (name.match("kitab"));


//İki sətri əlifba sırası ilə müqayisə edir və nəticələri qaytarır.
//let name = "Chinara";
//let surname = "Hatamli";
//console.log (surname.localeCompare(name));