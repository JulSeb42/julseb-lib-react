import type { ImgHTMLAttributes } from "react"
import type {
	LibAllColors,
	LibAllColorsAndOverlays,
	LibComponentBase,
	Classes,
	LibRadiuses,
	CssObjectFit,
} from "../../types"

export interface ILibImage
	extends Omit<LibComponentBase<HTMLImageElement>, "element">,
		ImgHTMLAttributes<HTMLImageElement> {
	caption?:
		| string
		| {
				text: string
				backgroundColor?: LibAllColorsAndOverlays
				textColor?: LibAllColors
				imgClasses?: Classes
				captionClasses?: Classes
		  }
	borderRadius?: LibRadiuses
	fit?: CssObjectFit
}
