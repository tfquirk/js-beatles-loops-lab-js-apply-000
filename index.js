// add solution here

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let musicianPlays = [];
  
  for (let i = 0; i < arrayMusicians.length; i++) {
    musicianPlays.push(arrayMusicians[i] + ' plays ' + arrayInstruments[i]);
  }
  return musicianPlays;
}

function johnLennonFacts(array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] + '!!!';
    i++;
  }
}
