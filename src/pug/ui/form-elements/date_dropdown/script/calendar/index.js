// Helpers
import { createNodeTemplate } from '../../../../../../script/helpers/dom_manipulation';
import { getMonth } from '../../../../../../script/helpers/date';

export const createCalendar = (selector, options) => {
  const state = {
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
  const createDaysOfMonth = () => {
    const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
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

    const daysInMonth = new Date(
      state.currentYear,
      state.date.getMonth(),
      0
    ).getDate();

    console.log(typeof daysInMonth, daysInMonth);
    const arr = [...new Array(30)].fill(0).map((_, i) => i);
    console.log(arr);

    const daysOfTheMonth = () => {
      const arr = [...new Array(30)]
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

  // Wrapper
  const calendarWrapper = createNodeTemplate(
    'div',
    [{ name: 'class', value: 'calendar' }],
    createCalendarSlider() + createDaysOfMonth()
  );

  selector.insertAdjacentHTML('beforeend', calendarWrapper);
};
