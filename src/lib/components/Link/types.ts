import type { LibComponentBase, LibButtonLinkBlank } from "../../types"

export type ILibLink = LibComponentBase<HTMLAnchorElement | HTMLButtonElement> &
    LibButtonLinkBlank & {
        isNavLink?: boolean
        end?: boolean
    }
