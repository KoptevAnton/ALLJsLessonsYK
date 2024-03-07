/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {
  let str = items.join('-');
  for (let index = 0; index < items.length; index += 1) {
    str += `${index + 1} - ${items[index]}, `;
  }

  // str = str.replace(/\,\s+$/gi, '');

  // console.log(str.replaceAll('-', '***'));

  // return str.slice(0, str.length - 2);
}

const res_1 = logItems(['Mango', 'Poly', 'Ajax']);
// console.log('res_1:', res_1);
const res_2 = logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// console.log('res_2:', res_2);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  const namesArray = names.split(',');
  const phonesArray = phones.split(',');

  if (namesArray.length === phonesArray.length) {
    let phoneBook = '';

    for (let index = 0; index < namesArray.length; index += 1) {
      phoneBook += `${namesArray[index]} : ${phonesArray[index]}\n`;
    }

    return phoneBook;
  }
}

const phoneBook = printInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);
// console.log(phoneBook);

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */
function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const hoursToStr = hours.toString().padStart(2, 0);
  const minutesToStr = minute.toString().padStart(2, 0);

  return `${hoursToStr}:${minutesToStr}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
