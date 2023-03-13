// copied from Carbon's tools/uniqueId

let lastId = 0;

 export default function uniqueId(prefix = 'id') {
   lastId++;
   return `${prefix}${lastId}`;
 }