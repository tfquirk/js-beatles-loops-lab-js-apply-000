// add solution here

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let musicianPlays = [];
  let sentence = ''
  for (let i = 0; i < arrayMusicians.length; i++) {
    sentence = arrayMusicians[i] + ' plays ' + arrayInstruments[i]});
    musicianPlays.push(sentence)
  }
  return musicianPlays;
}