function previousDay(year, month, day) {
    // if (day === 1) {
    //     if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    //         day = 31
    //         month
    //     } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    //         console.log(30);
    //     } else {
    //         console.log(28);
    //     }
    // }
    //`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    // if (day - 1 === 0) {
    //     let date = new Date(year, month, day - 1)
    //     date.setDate(0)
    //     console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
    // }
    let date = new Date(year, month - 1, day)
    date.setDate(date.getDate() - 1)
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
previousDay(2016, 10, 1)