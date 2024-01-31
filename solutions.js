//1. verilən iki ədədi yoxlayıb əgər hansisa 100-ə bərabər olarsa və ya ikisinin cəmi 100 olarsa *true* dəyəri qaytarmaq.
const check100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(check100(100, 0)); //true
console.log(check100(56, 100)); //true
console.log(check100(26, 85)); //false
console.log(check100(50, 50)); //true

//2. daxil edilmiş faylin uzantısını konsola yazdırmaq
const showFileFormat = (str) => str.slice(str.lastIndexOf("."));
console.log(showFileFormat("index.html")); //.html
console.log(showFileFormat("home.file.js")); // .js çünki lastİndexOf metodundan istifadə olunub və o sonuncu nöqtəni nəzərə alır.

//nümunə
const nameOf = "mrAsiman"; // ilk "m"-i yox, son "m"-i nəzərə aldı
const piece = nameOf.slice(1, 3); // burada saymağa 0-dan yox, 1-dən başlayır (1,3) kəsməyə 1-dən sonra başla 3-də bitir
console.log(piece); //rA
console.log(nameOf.lastIndexOf("a")); //6
console.log(nameOf.slice(nameOf.lastIndexOf("m"))); //man

//3. yazdiğimiz hər sözün əvvəlinə *New!* yazdıran proqram. Əgər sözün özündə *New!* kəliməsi varsa olduğu kimi saxlasin
// const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`); // 0 indeksi göatərir. Yəni söz New! ilə başlayirsa dəyişməsin.
// console.log(addNew("phone"));
// console.log(addNew("New! phone"));  // bu ternary operator ilə olan üsuldur daha qısadır....aşağıdakı isə if operatoru ilə olan üsuldur

const addNew = (str) => {
  if (str.indexOf("New!") === 0) {
    return str;
  } else {
    return `New! ${str}`;
  }
};

console.log(addNew("phone")); // New! phone
console.log(addNew("New! phone")); // New! phone və beləliklə hər iki halda eyni nəticəni alırıq

//4. Elə bir proqram yazaq ki verilən string tipli datanın ilk 3 və son 3 simvolunu birləşdirərək geri qaytarsin. Bu şərti ödəmək üçünsə minimal uzunluq 3-dən böyük olmalıdır. olmalıdır. Əks halda dəyişiklik etməsin.

const stringMaker = (str) =>
  str.length <= 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(stringMaker("abc")); //abc
console.log(stringMaker("abc123")); //abc123
console.log(stringMaker("hello what's up?")); //helup?
console.log(stringMaker("is")); //is

//5. stringi tam yarıya bölən bir funksiya yazaq. Lakin simvollarən sayı tək ədəddirsə əvvəlki cüt ədədi ikyə bölüb nəticə qaytaracaq.
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf("Asiman")); //Asi
console.log(firstHalf("JavaScript")); //JavaS
console.log(firstHalf("apple")); //ap  -- göründüyü kimi bir almanı belə düzgün yarı bölə bilmədik :P

// 6. İki stringi birləşdirən funksiya yazaq, lakin ilk simvolları nəzərə almasın
const stringConcatter = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(stringConcatter("Daha", "Doğrusu")); //ahaoğrusu

//7. İki ədəddən hansının 100-ə daha yaxın olduğunu göstərən funksiya yazaq.
const nearTo100 = (a, b) => (100 - a < 100 - b ? a : b);
console.log(nearTo100(96, 19)); //96
console.log(nearTo100(101, 92)); //101
console.log(nearTo100(99, 101)); //burada 101-dir çünki 100-101=-1  100-99=1  -1<1
console.log(nearTo100(50, 50)); //50 bu iki haldan başqa digər hallarda şəerti ödəyir

//8. verilmiş sözdə göstərilən hərfdən neçə dənə olduğunu yazan proqram
const letterCounter = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const letter2to4 = (str, char) =>
  letterCounter(str, char) >= 2 && letterCounter(str, char) <= 4;

console.log(letter2to4("salam", "a")); //true
console.log(letter2to4("salamla", "a")); //true
console.log(letter2to4("salamlamaq", "a")); //true
console.log(letter2to4("salamladılar", "a")); //true
console.log(letter2to4("aaaaaaaaaa", "a")); //false

// Dədə-baba dilində izahı. split metodu verilən stringi array-ə çevirir. Məs: "salam" yazmışıqsa .split("") bizə [s], [a], [l], [a], [m] qaytarır.... filter isə array metodudur. ch===char onu göstərir ki hansı hərfi yazmışıqsa o hərf array-də varsa ona uyğun filrləmə aparır. length isə uzunluğu təyin edir. Amma splitin işi tək bununla bitmir. Əgər konkret bir simvol göstərilibsə və o simvol stringdə varsa onu silərək srtingi iki yerə ayırır və array formasında. İkinci funksiyada isə şərt qoymuşuq ki yazdığımız char 2-dən böyük bərabər, 4-dən kiçik bərabərdirsə true qaytar, əks halda false.
