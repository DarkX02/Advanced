function validityChecker(x1, y1, x2, y2) {
    let calc1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2)
    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(calc1) ? 'valid' : 'invalid'}`);
    let calc2 = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(calc2) ? 'valid' : 'invalid'}`);
    let calc3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(calc3) ? 'valid' : 'invalid'}`);
}
