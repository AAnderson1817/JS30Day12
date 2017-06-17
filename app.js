const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup',(e) =>{
  pressed.push(e.key);
  //We don't need the 'pressed' array to contain every character we've ever entered. It's too much! We only need to check however many characters our secret code contains. 'wesbos' only has 6, so our array only needs to be 6 characters long. The below code uses splice to achieve this effect by trimming from the end.
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    console.log('WIIIINNNERRRRRR');
    cornify_add();
  }
})
