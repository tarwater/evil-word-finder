const fs = require('fs');
const natural = require('natural');
const data = fs.readFileSync('input', 'UTF-8');
natural.PorterStemmer.attach();

let l1 = data.tokenizeAndStem();

let counts = {};

l1.forEach(token => {
    counts[token] = ~~counts[token] + 1;
});

let results = [];

Object.keys(counts).forEach(word => {
    if(counts[word] >= 2){
        results.push(word + ": " + counts[word]);
    }
});

results = results.sort((a, b) =>{
   return Number(a.split(": ")[1]) - Number(b.split(": ")[1])
});

results.forEach(w => console.log(w));
