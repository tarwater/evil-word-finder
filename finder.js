const fs = require('fs');
const natural = require('natural');
const data = fs.readFileSync('input', 'UTF-8');
natural.PorterStemmer.attach();

let tokens = data.tokenizeAndStem();

let counts = {};

tokens.forEach(token => {
    counts[token] = ~~counts[token] + 1;
});

let results = [];

Object.keys(counts).forEach(word => {
    if(counts[word] >= 2){
        results.push(word + ": " + counts[word]);
    }
});

results = results.sort((a, b) =>{
   return Number(b.split(": ")[1]) - Number(a.split(": ")[1])
});


let logger = fs.createWriteStream('output');
results.forEach(res => logger.write(res + "\n"));
