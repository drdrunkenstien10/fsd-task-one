// Helpers
import { createNodeTemplate } from '../../../../../../script/helpers/dom_manipulation';
import { getMonth } from '../../../../../../script/helpers/date';

export const createCalendar = (selector, options) => {
  let state = {
    date: new Date(),
    currentMonth: getMonth(new Date()),
    currentYear: new Date().getFullYear(),
  };

  console.log(state);

  // Slider
  const createCalendarSlider = () => {
    const btnBack = createNodeTemplate(
      'button',
      [{ name: 'class', value: 'calendar__btn calendar__btn_back' }],
      ''
    );

    const btnForward = createNodeTemplate(
      'button',
      [{ name: 'class', value: 'calendar__btn calendar__btn_forward' }],
      ''
    );

    const currentDate = createNodeTemplate(
      'time',
      [{ name: 'class', value: 'calendar__current-date' }],
      `${state.currentMonth} ${state.currentYear}`
    );

    return createNodeTemplate(
      'div',
      [{ name: 'class', value: 'calendar__slider' }],
      btnBack + currentDate + btnForward
    );
  };

  // Days of Months
  const createDaysOfMonth = state => {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const daysOfTheWeek = weekDays
      .map(day =>
        createNodeTemplate(
          'span',
          [{ name: 'class', value: 'calendar__week-day' }],
          day
        )
      )
      .join('');

    const weekDaysContainer = createNodeTemplate(
      'div',
      [{ name: 'class', value: 'calendar__week-days' }],
      daysOfTheWeek
    );

    const daysInMonth = () =>
      new Date(state.currentYear, state.date.getMonth() + 1, 0).getDate();

    const arr = [...new Array(daysInMonth())].fill(0).map((_, i) => i);
    console.log(arr);

    const daysOfTheMonth = () => {
      const arr = [...new Array(daysInMonth())]
        .fill(0)
        .map((_, i) =>
          createNodeTemplate(
            'span',
            [{ name: 'class', value: 'calendar__month-day' }],
            i + 1
          )
        );
      return arr;
    };

    console.log('days', daysOfTheMonth());

    const monthDaysContainer = createNodeTemplate(
      'div',
      [{ name: 'class', value: 'calendar__month-days' }],
      daysOfTheMonth().join('')
    );

    return createNodeTemplate(
      'div',
      [{ name: 'class', value: 'calendar__month' }],
      weekDaysContainer + monthDaysContainer
    );
  };

  // Filter
  const createFilter = () => {
    const reset = createNodeTemplate(
      'button',
      [
        { name: 'class', value: 'calendar__filter-item' },
        { name: 'data-type', value: 'reset' },
      ],
      'очистить'
    );

    const submit = createNodeTemplate(
      'button',
      [
        { name: 'class', value: 'calendar__filter-item' },
        { name: 'data-type', value: 'submit' },
      ],
      'применить'
    );

    return createNodeTemplate(
      'div',
      [
        {
          name: 'class',
          value: 'calendar__filter',
        },
      ],
      submit + reset
    );
  };

  // Wrapper
  const calendarWrapper = createNodeTemplate(
    'div',
    [{ name: 'class', value: 'calendar' }],
    createCalendarSlider() + createDaysOfMonth(state) + createFilter()
  );

  selector.insertAdjacentHTML('beforeend', calendarWrapper);

  // Events
  const $btnBack = document.querySelector('.calendar__btn_back');
  const $btnForward = document.querySelector('.calendar__btn_forward');
  const $currentDate = document.querySelector('.calendar__current-date');
  const $calendarMonth = document.querySelector('.calendar__month');

  const setNextMonthHandler = () => {
    const newDate = new Date(state.currentYear, state.date.getMonth() + 1);
    console.log(newDate);
    state = {
      ...state,
      date: newDate,
      currentMonth: getMonth(newDate),
      currentYear: newDate.getFullYear(),
    };
    $currentDate.textContent = `${state.currentMonth} ${state.currentYear}`;
    console.log($calendarMonth);
    $calendarMonth.innerHTML = createDaysOfMonth(state);
  };

  const setPrevMonthHandler = () => {
    const newDate = new Date(state.currentYear, state.date.getMonth() - 1);
    console.log(newDate);
    state = {
      ...state,
      date: newDate,
      currentMonth: getMonth(newDate),
      currentYear: newDate.getFullYear(),
    };
    $currentDate.textContent = `${state.currentMonth} ${state.currentYear}`;
    console.log($calendarMonth);
    $calendarMonth.innerHTML = createDaysOfMonth(state);
  };

  $btnForward.addEventListener('click', setNextMonthHandler);
  $btnBack.addEventListener('click', setPrevMonthHandler);
};
