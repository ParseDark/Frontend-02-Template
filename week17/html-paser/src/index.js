const parser = require('./ParserHtml');
const { ResponseParse } = require('./ResponseParse');
const render = require('./render');



const htmlObj = parser("<a href='url' ></a>")

console.log(htmlObj);
debugger

