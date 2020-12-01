const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
export const getMonth = date => months[date.getMonth()];

export const getFirstDay = date =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDay();
