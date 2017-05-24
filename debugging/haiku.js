var haiku = [
  'the wind of Fuji',
  'I\'ve brought on my fan',
  'a gift from Edo'
];

var resultLines = [];

for (var i = 0; i < haiku.length; i++) {
  var line = haiku[i];
  var words = line.split(' ');
  var resultWords = [];
  for (var j = 0; j < words.length; j++) {
    var word = words[j];
    var reversed = word.split('').reverse().join('');
    resultWords.push(reversed);
  }
  resultLines.push(resultWords.join(' '));
}

console.log(resultLines.join('\n'));
