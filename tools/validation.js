import { isCyrillic, findUnique, fullTrim } from './utilities.js';

export default function inputValidation(input) {
 if (typeof input !== 'object') {
   throw new Error('Invalid input. Something went wrong!');
  }

 if (typeof input.key !== 'string' || !isCyrillic(fullTrim(input.key))) {
   throw new Error('Invalid keyword. Must be string and can only contain rus letters.');
 }

 if (typeof input.msg !== 'string' || !isCyrillic(fullTrim(input.msg))) {
   throw new Error('Invalid message. Must be string and can only contain rus letters.');
 }

 input.key = fullTrim(input.key).toLowerCase();
 input.msg = input.msg.toLowerCase();

 if (findUnique(input.key).length !== 17) {
   throw new Error('Keyword doesn\'t have enough unique characters. Need 17');
 }

 return {
   text: input.msg,
   key: findUnique(input.key),
 };
}
