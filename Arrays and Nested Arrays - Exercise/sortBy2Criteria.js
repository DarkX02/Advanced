function sortBy2Criteria(arr) {
    let sorted = arr.sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length)
    console.log(sorted.join('\n'));
}
sortBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
)