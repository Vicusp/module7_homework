// Написать функцию, которая принимает в качестве аргументов строку и объект,
//  а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.
const str = "city2";
const city = {
   city1: "Moscow",
   city2: "Piter"
}
function getProperty(str, city) {
   if (str in city) {
      return true;
   } else {
      return false
   }
}
console.log(getProperty(str, city)); 