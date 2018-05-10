import X2JS = require("x2js");

export interface Xml2jsOptions {}

export let parse = (xml) => {
   const X2JS2 = X2JS as any; // don't hate me, their typings suck
   const x2js = new X2JS2();

   return x2js.xml2js(xml);
};