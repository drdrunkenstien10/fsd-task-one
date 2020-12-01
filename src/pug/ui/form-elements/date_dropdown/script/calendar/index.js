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

    return createNodeTemplate(
      'div',
      [{ name: 'class', value: 'calendar__month' }],
      weekDaysContainer
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
