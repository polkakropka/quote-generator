// sentences for generatorOne
let userChoice;
let generatorChoice;
let first = 
[
[   'To fly as fast as thought,',
    'All action results',
    'No one has a finer',
    'No yesterdays',
    'Beauty',
    'It is not so important',
    'You are the books you read, the music you listen to, the people you spend time with.'
],
[   ' you must begin by knowing that you have,',
    ' from thought,',
    ' command of language than the person,',
    ' are ever wasted for,',
    ' is not in the face,',
    ' to know everything',
    ' choose wisely what you feed your mind,',
],
[
    ' already arrived.',
    ' so it is thoughts that matter.',
    ' who keeps his mouth shut.',
    ' those who give themselves to today.',
    ' is a light in the heart.',
    ' as to appreciate what we learn.',
],
]

function printInside(text) {
    let newParagraph = document.createElement('p');
    newParagraph.className = "new-paragraph";
    newParagraph.innerText = text;
    document.getElementById('quote').appendChild(newParagraph);
       
}
// sentences for generatorTwo
let second = [
  [
    'Chuck Norris does not need to know about class factory pattern,',
    'MacGyver can build an airplane out of gum and paper clips',
    'No statement can catch',
    'Chuck Norris Internet connection is faster upstream than downstream',
    'Chuck Norris does not wear a condom,'],
  [
    ' he can instantiate interfaces.',
    ' but Chuck Norris can roundhouse-kick his head through a wall and take it.',
    ' the ChuckNorrisException.',
    ' because even data has more incentive to run from him than to him.',
    ' because there is no such thing as protection from Chuck Norris.',
],
];


// create a quote with generator

function generator(arr) {
    quoteTwo = "";
    quoteTwo = arr[0][Math.floor(Math.random()*arr[0].length)];
    quoteTwo += arr[1][Math.floor(Math.random()*arr[1].length)];

    if(arr.length == 3) {
        quoteTwo += arr[2][Math.floor(Math.random()*arr[2].length)];
    }
    printInside(quoteTwo);
};

function getValue(button) {
    userChoice = button.value;
};

function getQuote(button) {
    generatorChoice = button.value;
    document.getElementById('quote').innerHTML = "";
     for (var i = 0; i < userChoice; i++) {
        if (generatorChoice == 1) {
            generator(first);
        } else if (generatorChoice == 2) {
            generator(second);
        }   
    } 
};
       

