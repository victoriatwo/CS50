// Start with population n llamas. Goal is f llamas.
// Each year, n/3 llamas are added and n/4 llamas are subtracted
function totalYears(currentPopulation: number, targetPopulation: number) {
    let years = 0;
    while (currentPopulation < targetPopulation) {
        currentPopulation = currentPopulation + Math.trunc(currentPopulation/3) - Math.trunc(currentPopulation/4);
        years++;
    }
    // Return years until currentPopulation reaches targetPopulation
    return years;
}

console.log(totalYears(100, 1000000));