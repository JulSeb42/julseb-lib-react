import { designTokens } from "../../../design-tokens"
import type { LibTextAllTag } from "../../../types"

export const tags = Object.values(
	designTokens.allTextTags
) as Array<LibTextAllTag>
