export const getAllSpacing = (unitOfMeasure) => {
    let tailwindMeasures
    for (let i = 0; i <= 120; i++) {
        tailwindMeasures = {
            ...tailwindMeasures,
            [i + unitOfMeasure]: i + unitOfMeasure,
            [`-${i}` + unitOfMeasure]: `-${i}` + unitOfMeasure
        }

    }
    return tailwindMeasures
}
export const nums = (from, to) => {
    let tailwindMeasures
    for (let i = from; i <= to; i++) {
        tailwindMeasures = {
            ...tailwindMeasures,
            [i]: i,
            [`-${i}`]: `-${i}`
        }

    }
}