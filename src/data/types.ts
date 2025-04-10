interface Base {
    name: string
    variable: string
    css: string
}

export interface Color extends Base {
    hex: string
    rgb: string
}

export interface Variable extends Base {
    value: string | number
}
