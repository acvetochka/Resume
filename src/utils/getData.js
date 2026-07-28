// utils/data.js

import { data } from '../data';

const lang = window.location.pathname.includes('de.html')
  ? 'de'
  : 'en';

export const getData = key => data[lang][key];