//---------------- onclick functions---------------//

// making red background 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// making blue background 
const blue = document.getElementById("make-blue");
blue.onclick = blueMake;

function blueMake() {
    document.body.style.backgroundColor = 'blue';
}

// making green background 
const green = document.getElementById("make-green");
green.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//-------------- addEventListener functions ----------//

// making golden red background

const golden = document.getElementById("make-goldenRed");
golden.addEventListener('click', makeGolden);

function makeGolden() {
    document.body.style.backgroundColor = 'goldenrod';
}

// making hot pink background

const pink = document.getElementById("make-hotPink");
pink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// making light blue background directly

document.getElementById("make-lightBlue").addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})


//-------------- showing input text value --------------//

document.getElementById("update-name").addEventListener('click', function () {
    const nameField = document.getElementById("name-field");
    const p = document.getElementById("get-text");
    p.innerText = nameField.value;
    nameField.value = "";
});