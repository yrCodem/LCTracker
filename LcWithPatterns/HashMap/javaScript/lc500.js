"use strict";
function findWords(words) {
    const row1 = /^[qwertyuiop]+$/i;
    const row2 = /^[asdfghjkl]+$/i;
    const row3 = /^[zxcvbnm]+$/i;
    return words.filter(word => row1.test(word) || row2.test(word) || row3.test(word));
}
