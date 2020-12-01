// Helpers
import { createNodeTemplate } from './helpers/dom_manipulation';

export const createDropdown = (selector, options) => {
  const defaultOptions = [...options];
  let state = defaultOptions.map(option => ({ ...option }));
  // Label
  const dropdownLabel = createNodeTemplate(
    'span',
    [{ name: 'class', value: 'dropdown__label' }],
    'Сколько Гостей'
  );

  // Button Expand
  const dropdownExpandBtn = createNodeTemplate(
    'button',
    [{ name: 'class', value: 'dropdown__expand' }],
    ''
  );

  // Option
  const createDropdownOption = (title, value, id, isZero) => {
    const optionTitle = createNodeTemplate(
      'span',
      [{ name: 'class', value: 'dropdown__option-title' }],
      title
    );
    const optionIncBtn = createNodeTemplate(
      'button',
      [
        { name: 'class', value: 'dropdown__option-btn' },
        { name: 'data-type', value: 'inc' },
        { name: 'data-id', value: id },
      ],
      '+'
    );
    const optionDecBtn = createNodeTemplate(
      'button',
      [
        { name: 'class', value: 'dropdown__option-btn' },
        { name: 'data-type', value: 'dec' },
        { name: 'data-id', value: id },
        !isZero && { name: 'disabled', value: true },
      ],
      '-'
    );
    const optionValue = createNodeTemplate(
      'span',
      [{ name: 'class', value: 'dropdown__option-value' }],
      value
    );
    return createNodeTemplate(
      'div',
      [{ name: 'class', value: 'dropdown__option' }],
      optionTitle + optionDecBtn + optionValue + optionIncBtn
    );
  };

  // Filter
  const createDropdownFilter = state => {
    const sumOfValues = state.reduce((acc, n) => acc + n.value, 0);
    console.log(sumOfValues);
    const reset = createNodeTemplate(
      'button',
      [
        {
          name: 'class',
          value:
            sumOfValues === 0
              ? 'dropdown__filter-btn hidden'
              : 'dropdown__filter-btn',
        },
        { name: 'data-type', value: 'reset' },
      ],
      'Очистить'
    );
    const submit = createNodeTemplate(
      'button',
      [
        { name: 'class', value: 'dropdown__filter-btn' },
        { name: 'data-type', value: 'submit' },
      ],
      'Применить'
    );
    return createNodeTemplate(
      'div',
      [{ name: 'class', value: 'dropdown__filter' }],
      submit + reset
    );
  };

  // Options and Filter
  const createOptionsAndFilter = state =>
    state
      .map(({ title, value }, i) =>
        createDropdownOption(title, value, i, Boolean(value))
      )
      .join('') + createDropdownFilter(state);

  // Options
  const createDropdownOptions = state =>
    createNodeTemplate(
      'div',
      [{ name: 'class', value: 'dropdown__options' }],
      createOptionsAndFilter(state)
    );

  // Dropdown
  const dropdown = createNodeTemplate(
    'div',
    [{ name: 'class', value: 'dropdown' }],
    [dropdownLabel, dropdownExpandBtn, createDropdownOptions(state)].join('')
  );

  // Apend
  selector.insertAdjacentHTML('beforeend', dropdown);

  // Selectors
  const $expandBtn = document.querySelector('.dropdown__expand');
  const $options = document.querySelector('.dropdown__options');

  // Events
  const expandHandler = e => {
    $options.classList.toggle('open');
    $expandBtn.classList.toggle('open');
  };

  const optionsHandler = e => {
    const { dataset } = e.target;
    if ('type' in dataset === true) {
      if (dataset.type === 'inc') {
        console.log(options, 'opt1');
        state[dataset.id].value += 1;
        console.log(state);
        console.log(defaultOptions, 'opt');
        $options.innerHTML = createOptionsAndFilter(state);
        return;
      }
      if (dataset.type === 'dec') {
        if (state[dataset.id] <= 0) return;
        state[dataset.id].value -= 1;
        console.log(state);
        $options.innerHTML = createOptionsAndFilter(state);
        return;
      }
      if (dataset.type === 'reset') {
        state = defaultOptions.map(option => ({ ...option }));
        console.log(state);
        $options.innerHTML = createOptionsAndFilter(state);
      }
    }
  };

  $expandBtn.addEventListener('click', expandHandler);
  $options.addEventListener('click', optionsHandler);
};
