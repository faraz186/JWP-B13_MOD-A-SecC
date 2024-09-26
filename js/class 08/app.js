// var str = prompt("Enter some Text");

// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 3) === "   ") {
//     alert("! found");
//   }
// }

// var text = `The New Yorker magazine doesn't allow
// the phrase World War II. They say it should be`;

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "The Second world war" + text.slice(i + 12);
//   }
// }

// console.log(text);

// var text = `The New Yorker magazine doesnt allow the Khan phrase World War II. They say it should be`;

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 4) === "Khan") {
//     text = text.slice(0, i) + "Imran khan" + text.slice(i + 4);
//   }
// }

// console.log(text);

// var text = `The New Yorker magazine doesnt allow the Khan phrase World War II. They say it should be`;

// var indexNum = text.indexOf("World War II");

// var startingText = text.slice(0, 53);

// var replaceText = "The Second world war";

// var remainText = text.slice(indexNum + 12);

// console.log(startingText + replaceText + remainText);

// indexOf Method

// var str = `To find the last instance of a segment in a string, use lastIndexOf. The following code
// finds the index of the first character of the last instance`;

// var index = str.indexOf("lastIndexOf");

// var start = str.slice(0, 56);

// var replacing = "indexOf";

// var remainText = str.slice(index + 11);

// console.log(start + replacing + remainText);

// LastIndexof() method

// var text = `to be or not be`;

// var index = text.lastIndexOf("be");

// console.log(index);

// replace method and replaceAll method

// var text = `The New Yorker magazine doesnt allow the phrase World War II. They say it should be World War II`;

// console.log(text.replaceAll("World War II", "The Second world war"));

// console.log(text.replace("World War II", "The Second world war"));

// var str = "hello world";

// var getChar = str.endsWith("f");

// var getChar = str.split("");

// console.log(getChar);

// var arr = [10, "faraz", undefined, 40, true];

// var data = arr.join("_");

// console.log(data);

var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

var arr = [];

for (var i = 0; i < country_list.length; i++) {
  if (country_list[i].includes("tan")) {
    arr.push(country_list[i]);
  }
}

console.log(arr);

/////////////////////////////////////////////////////

var arr = [];

for (var i = 0; i < country_list.length; i++) {
  if (country_list[i].startsWith("P")) {
    arr.push(country_list[i]);
  }
}

console.log(arr);
