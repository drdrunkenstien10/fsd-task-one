// Helpers
import { createNodeTemplate } from '../../../../../script/helpers/dom_manipulation';

// Calendar
import { createCalendar } from './calendar';

export const createDateDropdown = (selector, options) => {
  const createDatePicker = value => {
    const pickerBtn = createNodeTemplate(
      'button',
      [{ name: 'class', value: 'date-dropdown__btn' }],
      ''
    );

    const pickerDate = createNodeTemplate(
      'span',
      [{ name: 'class', value: 'date-dropdown__date' }],
      'ДД.ММ.ГГГГ'
    );
    const picker = createNodeTemplate(
      'div',
      [
        { name: 'class', value: 'date-dropdown__date-picker' },
        { name: 'data-name', value },
      ],
      pickerDate + pickerBtn
    );
    const label = createNodeTemplate(
      'label',
      [{ name: 'class', value: 'date-dropdown__label' }],
      value
    );
    return createNodeTemplate(
      'div',
      [{ name: 'class', value: 'date-dropdown__section' }],
      label + picker
    );
  };
  const createSections = () => {
    const sections = ['выезд', 'прибытие'];
    return sections.map(section => createDatePicker(section)).join('');
  };

  const container = createNodeTemplate(
    'div',
    [{ name: 'class', value: 'date-dropdown' }],
    createSections()
  );

  selector.insertAdjacentHTML('beforeend', container);

  const $dateDropdown = document.querySelector('.date-dropdown');
  createCalendar($dateDropdown);
};
