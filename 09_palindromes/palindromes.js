const palindromes = function (words) {
    let word = "";
    let n = words.length;
    for (let i=0; i<n; i++) {
        word += words[i];
    }
    let tmp = "";
    n = word.length;
    for(let i=0; i<n; i++) {
        if(word[i] >= 'a' && word[i] <= 'z')
            tmp += word[i];
        else if(word[i] >= 'A' && word[i] <= 'Z')
            tmp += word[i];

    }
 //   console.log(word);
    for(i in word) {
        if(i >= 'a' && i <= 'z')
            tmp += i;
        else if(i >= 'A' && i <= 'Z')
            tmp += i;
    }

    word = tmp;
    word = word.toLowerCase();
    const len = word.length;
    let left = 0, right = len-1;
    let ok = 1;
    while(left < right)
    {
        if(word[left] != word[right]) {
            ok = 0;
            return false;
        }
        left ++, right --;
    }
    if(ok)
        return true;
};

// Do not edit below this line
module.exports = palindromes;
