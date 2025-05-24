import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { MEDIA, Mixins, setDefaultTheme, SPACERS } from "../../"
import type { LibAllColors, LibSpacers } from "../../types"

const StyledWrapper = styled.section<{
	$gap: LibSpacers
	$backgroundColor: LibAllColors
	$minHeight: string | number
}>`
	position: relative;
	background-color: ${({ $backgroundColor, theme }) =>
		Mixins.AllColors($backgroundColor, theme)};
	min-height: ${({ $minHeight }) => stringifyPx($minHeight)};
	padding: 0 ${SPACERS.XXL};
	${({ $gap }) =>
		Mixins.Flexbox({
			$gap,
			$justifyContent: "center",
		})}

	@media ${MEDIA.BREAKPOINT_TABLET_SMALL} {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		min-height: ${({ $minHeight }) => stringifyPx($minHeight)};
		padding: ${SPACERS.L} ${SPACERS.M};
	}
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
