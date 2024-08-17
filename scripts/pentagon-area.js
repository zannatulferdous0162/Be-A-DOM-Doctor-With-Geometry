function calculatePentagonArea() {
    const perimitar = getInputValueById('pentagon-perimitar');
    const apothem = getInputValueById('pentagon-apothem');
   //calculation

   const area = 0.5 * perimitar * apothem;
   console.log(area);

   //display 
   setInnerTextById('pentagon-area',area);

}

function getInputValueById(inputFieldId) {
 const  inputField = document.getElementById(inputFieldId);
 const  inputValueText = inputField.value;
 const  inputValue = parseFloat(inputValueText);
 return inputValue;
}

//display calculation
function setInnerTextById(elementId,area){
    const  element = document.getElementById(elementId);
    element.innerText = area;
}