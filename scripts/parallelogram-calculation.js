function calculateParallelogramArea (){
   const base = getInputValueById('parallelogram-base');
   const height = getInputValueById('parallelogram-height')
 
   const area = base * height ;
   console.log(area)
   
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}





// function calculateParallelogramArea() {
//     const parallelogramBaseArea = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseArea.value;
//     const base = parseFloat(parallelogramBaseText);
//     console.log(base);

//     const parallelogrameLengthArea  = document.getElementById('parallelogram-length');
//     const parallelogrameLengthText = parallelogrameLengthArea.value;
//     const length = parseFloat(parallelogrameLengthText);
//     console.log(length);

//     //calculation  parallelograme
//     const area  = base * length;
//     console.log(area);

//     //get display parallelograme area
//     const displayParallelogramArea = document.getElementById('parallelogram-area');
//     displayParallelogramArea.innerText = area;

// }