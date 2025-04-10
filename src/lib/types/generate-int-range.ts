type Enumerate<
    N extends number,
    Acc extends Array<number> = []
> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>

/**
 * @description Generate a range of numbers for types
 * @example IntRange<1, 4> => 1 | 2 | 3
 */
export type GenerateIntegerRange<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
>

// TODO: search how to fix it to get first and last numbers possible
