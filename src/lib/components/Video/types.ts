/*=============================================== Video types ===============================================*/

import type { VideoHTMLAttributes, SourceHTMLAttributes } from "react"
import type { LibComponentBase, ObjectFit } from "../../types"

export interface ILibVideo
    extends Exclude<LibComponentBase<HTMLVideoElement>, "as">,
        VideoHTMLAttributes<HTMLVideoElement>,
        SourceHTMLAttributes<HTMLVideoElement> {
    fit?: ObjectFit
    aspectRatio?: string
    emptyText?: string
    type?:
        | "video/x-flv"
        | "video/mp4"
        | "application/x-mpegURL"
        | "video/MP2T"
        | "video/3gpp"
        | "video/quicktime"
        | "video/x-msvideo"
        | "video/x-ms-wmv"
}
