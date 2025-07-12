import type {
	ClassNames,
	LibAllColors,
	LibComponentBase,
	LibRadiuses,
	ReactChildren,
	CSSProperties,
} from "../../types"

interface ILibAvatarBase extends LibComponentBase<HTMLSpanElement> {
	borderRadius?: LibRadiuses
	borderColor?: LibAllColors
	backgroundColor?: LibAllColors
	contentColor?: LibAllColors
}

interface AvatarWithBadge extends ILibAvatarBase {
	badge?:
		| boolean
		| number
		| {
				content?: ReactChildren
				contentColor?: LibAllColors
				color?: LibAllColors
				className?: ClassNames
		  }
	containerStyle?: CSSProperties
	containerClassName?: ClassNames
}

interface AvatarWithoutBadge extends ILibAvatarBase {
	badge?: undefined | false
	containerStyle?: never
	containerClassName?: never
}

export type ILibAvatar = AvatarWithBadge | AvatarWithoutBadge
