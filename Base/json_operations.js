// create JavaScript object
const jsObj = {
  name: 'JSON',
  components: ['afd', 'er', 'weq'],
  status: true,
};

console.log(jsObj);


// convert JavaScript to JSON
const convertToJson = JSON.stringify(jsObj);
console.log(convertToJson);


// Convert from JSON to Javascript
const convertFromJson = JSON.parse(convertToJson);
console.log(convertFromJson);
