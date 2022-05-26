// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

function electricalAppliances(power) {
   this.power = power,
      this.name = 'electricalAppliances'
}

electricalAppliances.prototype.getWeight = function (power) {
   console.log(`Power is ${power} vt`)
}
// Выводим функцию которая выдает рандомное число от 0 до 1, где 1 это ВКЛ в розетку, а 0 это нет питания

function ElectronicDevice() {
   this.onModel = randomOne = Math.floor(Math.random() * 2);
   this.offModel = randomTwo = Math.floor(Math.random() * 2);

   if (this.onModel == 1) {
      console.log(`Компьютер подключен к розетке`)
   } else {
      console.log(`Компьютер не имеет источника питания`)
   }

   if (this.offModel == 1) {
      console.log(`Лампа подключена к розетке`)
   } else {
      console.log(`Лампа не имеет источника питания`)
   }
}
// Создание родительского класса
function ElectricalAppliancesHierarchy(power, ownName) {
   this.power = power,
      this.ownName = ownName
}
// Создание делегирующей связи
ElectricalAppliancesHierarchy.prototype = new ElectronicDevice();
ElectricalAppliancesHierarchy.prototype = new electricalAppliances();
ElectricalAppliancesHierarchy.prototype.getWeight = function (power) {
   console.log(`Electrical appliances power is ${power} vt`)
}

const computer = new ElectricalAppliancesHierarchy('computer', 'homeAppliances');
const lamp = new electricalAppliances('lamp')

computer.getWeight(1000);
lamp.getWeight(200);

console.log(computer)
console.log(lamp)