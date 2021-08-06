const URL = require('_old syntax/Javascript2/Chapter09/Exercise9.02/url');
const url = URL.parse('https://www.google.com/maps#horizontal');

url.host = 'maps.google.com';
url.pathname = '/q'
url.hash = 'vertical';

console.log(URL.format(url));
