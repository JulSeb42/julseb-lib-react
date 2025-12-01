import type { FC } from "react"
import { Image as Img } from "../Image"
import type { ILibLazyImage } from "./types"

const Image: FC<ILibLazyImage> = ({ className, ref, ...rest }) => {
	return <Img className={className} ref={ref} {...rest} />
}

// eslint-disable-next-line
export default Image
