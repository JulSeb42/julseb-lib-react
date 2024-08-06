/*=============================================== InputPin sub components types ===============================================*/

import type { LibFontSizes } from "../../types"
import type { ILibInputBaseMixin } from "../ComponentsMixins"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN INPUT_PIN COMPONENTS

export interface IStyledInputPin extends ILibInputBaseMixin {
    $inputSize: number
    $fontSize: LibFontSizes
}
