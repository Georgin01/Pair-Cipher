import outputFunc from '../tools/output.js';
import pairCipher from './pairCipher.js';

// Переменные используемые для вывода шифра
const output = document.getElementById('output');
const key = document.getElementById('key');
const message = document.getElementById('message');
const decode = document.getElementById('decode');

// Импортированная вспомагательная функция для вывода
outputFunc(message, key, decode, output, pairCipher);
