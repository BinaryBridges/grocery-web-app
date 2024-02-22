export function mixWeights(element1, element2) {
    // console.log(element1)
    // console.log(element2)
    // console.log(element1["weight"] + element2[1])
    return element1["weight"] + element2[1]
}

export function removeWeights(element1, element2) {
    //console.log(element1["weight"])
    //console.log(element2[1])
    return element2 - element1
}