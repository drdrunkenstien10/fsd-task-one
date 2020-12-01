// Dropdown
import { createDropdown } from '../dropdown/script';

const dropdownSelector = document.getElementById('dropdown');

const dropdownOptions = [
  { title: 'Взрослые', value: 0 },
  { title: 'Дети', value: 0 },
  { title: 'Младенцы', value: 0 },
];
createDropdown(dropdownSelector, dropdownOptions);
