/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const timer = {};

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Повертає об'єкт з властивостями hours, mins, secs
 * - Адська копіпаста з stackoverflow 💩
 */
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

/*
 * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
 */
function pad(value) {
  return String(value).padStart(2, '0');
}
/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рисує інтерфейс
 */
function updateClockface({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}
