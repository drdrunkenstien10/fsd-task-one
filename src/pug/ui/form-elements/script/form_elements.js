// Dropdown
import { createDropdown } from '../dropdown/script';

// Date Dropdown
import { createDateDropdown } from '../date_dropdown/script';

const dropdownSelector = document.getElementById('dropdown');
const dateDropdownSelector = document.getElementById('date-dropdown');

const dropdownOptions = [
  { title: 'Взрослые', value: 0 },
  { title: 'Дети', value: 0 },
  { title: 'Младенцы', value: 0 },
];
createDropdown(dropdownSelector, dropdownOptions);
createDateDropdown(dateDropdownSelector);
