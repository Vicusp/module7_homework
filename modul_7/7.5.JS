// Переписать консольное приложение из предыдущего юнита на классы.

// Выводим функцию которая выдает рандомное число от 0 до 1, где 1 это ВКЛ в розетку, а 0 это нет питания

class ElectronicDevice {
   constructor() {
      this.onModel = Math.floor(Math.random() * 2);
      this.offModel = Math.floor(Math.random() * 2);
   }
}

/* Устанавливаем делегирующую связь между протатипами функций, а также пишем условия вывода данных. 
Используем слово extends и super*/

class ElectricalAppliancesHierarchy extends ElectronicDevice {
   constructor(power) {
      super();
      this.power = power;
      this.name = 'electricalAppliances';
   }

   getInfo() {
      if (this.onModel == 1) {
         console.log(`Компьютер подключен к розетке`)
      } else {
         console.log(`Компьютер не имеет источника питания`)
      }
   }

   getPower(power) {
      if (this.onModel == 1) {
         console.log(`Напряжение электропитания Компьютера составляет: ${power}`)
      } else {
         console.log(`Напряжение электропитания Компьютера составляет: 0 Вт`)
      }
   }
}
class electricalAppliances extends ElectronicDevice {
   constructor(power, ownName) {
      super();
      this.power = power;
      this.ownName = ownName;
   }

   getInfo() {
      if (this.offModel == 1) {
         console.log(`Лампа подключена к розетке`)
      } else {
         console.log(`Лампа не имеет источника питания`)
      }
   }

   getPower(power) {
      if (this.offModel == 1) {
         console.log(`Напряжение электропитания у Лампы составляет: ${power}`)
      } else {
         console.log(`Напряжение электропитания у Лампы составляет: 0 Вт`)
      }
   }
}

// Присваиваем новым переменным значение фунции через тег new 

const computer = new ElectricalAppliancesHierarchy('computer', 'homeAppliances');
const lamp = new electricalAppliances('lamp')

// Производим вывод данных в консоль

computer.getInfo();
computer.getPower('220 Вт');
lamp.getInfo();
lamp.getPower('55 Вт'); 