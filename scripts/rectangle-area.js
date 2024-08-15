function calculateRectangleArea() {
    const reactangleWidthArea = document.getElementById('reactangle-width');
    const reactangleWidthValue =reactangleWidthArea.value;
    const width = parseFloat(reactangleWidthValue);
    console.log(width);


    const reactangleLengthArea = document.getElementById('reactangle-length');
    const reactangleLength = reactangleLengthArea.value;
    const length = parseFloat(reactangleLength);
    console.log(length);

    // calculation reactangle area 
    const area = width * length;
    console.log(area);

    // diaplay reactangle area
    const displayReactangleArea = document.getElementById('reactangle-area');
    displayReactangleArea.innerText = area;
}