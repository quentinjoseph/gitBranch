for (var i=0; for i<30; i++){
  if (i%5 === 0){
    console.log('buzz');
  }else if (i%3 === 0) {
    console.log('fizz');
  }else {
    console.log(i);
  }
}


function isPal(word){
  var ogWord = word;
  if(ogWord=== word.split(''.reverse().join(''))){
    console.log('yerp it is');
  }else {
    console.log('nope')
  }
}
