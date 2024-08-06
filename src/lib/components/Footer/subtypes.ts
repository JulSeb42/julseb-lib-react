/*=============================================== Footer sub components types ===============================================*/

import type { LibFooterLink } from "../../types"
import type { ILibFooter } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN FOOTER COMPONENTS

export interface ILibFooterLink
    extends Pick<ILibFooter, "data-testid" | "className"> {
    item: LibFooterLink
}

export interface ILibFooterLogo
    extends Pick<ILibFooter, "data-testid" | "className" | "logo"> {}
