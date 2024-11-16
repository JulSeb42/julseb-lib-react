/*=============================================== Clean percentage ===============================================*/

export function cleanPercentage(value: number) {
    const isNegativeOrNaN = !Number.isFinite(+value)
    const isTooHigh = value > 100
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +value
}
