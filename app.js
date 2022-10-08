// I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter).

// Please write some JavaScript to make them rainbow-colored!

// In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

// Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.
// The first span should be red, the second should be orange,

//YOU CODE GOES HERE:
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!


const span = document.querySelectorAll('span');
let raindow = 0;
for(let spans of span){
        spans.style.color = colors[raindow];
        raindow ++ ;
}


// for(let raindow = 0; raindow < colors.length; raindow ++){
//         span[raindow].style.color = colors[raindow];
// }
