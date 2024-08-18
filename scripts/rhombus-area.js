function calculateRhombusArea() {
    const diameter = getInputValueById('rhombus-diameters');
    const distance = getInputValueById('rhombus-distance');

    const area = 0.5 * diameter * distance;

    setInnerTextById('rhombus-area',area);
}