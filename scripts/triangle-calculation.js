function calculateTraiangleArea() {
    // get triangle base value
const triangleBaseInput = document.getElementById('triangle-base');
const triangleBaseText = triangleBaseInput.value;
const base = parseFloat(triangleBaseText);
console.log(base)

// get triangle height value 
const triangleHeightInput = document.getElementById('triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText);
 console.log(height);

 // calculate triangle area 
 const area = 0.5 * base * height;
 console.log(area);

 //display triangle area 
 const displayTriangleArea = document.getElementById('triangle area');
 displayTriangleArea.innerText = area;
 
}