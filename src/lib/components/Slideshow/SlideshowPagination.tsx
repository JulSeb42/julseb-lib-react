/*=============================================== SlideshowNav ===============================================*/

import type { Dispatch, SetStateAction } from "react"
import classNames from "classnames"
import { uuid, generateNumbers } from "ts-utils-julseb"
import { Image } from "../.."
import type {
    LibColorsHover,
    LibSlideshowPagination,
    LibSlideshowPaginationPosition,
} from "../../types"
import {
    SlideshowThumbnail,
    SlideshowPaginationItem,
    StyledSlideshowPagination,
} from "./styles"

interface ILibSlideshowPaginationBase {
    "data-testid": string | undefined
    setActive: Dispatch<SetStateAction<number>>
    position: LibSlideshowPaginationPosition | undefined
    childrenLength: number
    hideOnTouch: boolean | undefined
    color: LibColorsHover
    activeSlide: number
    className: string | undefined
}

interface SlideshowWithThumbnails extends ILibSlideshowPaginationBase {
    navType: Extract<LibSlideshowPagination, "thumbnails">
    images: Array<string>
}

interface SlideshowWithoutThumbnails extends ILibSlideshowPaginationBase {
    navType: Exclude<LibSlideshowPagination, "thumbnails">
    images?: never
}

type ILibSlideshowPagination =
    | SlideshowWithThumbnails
    | SlideshowWithoutThumbnails

export function SlideshowPagination({
    "data-testid": testid,
    setActive,
    navType,
    images,
    childrenLength,
    position = "outside",
    hideOnTouch = false,
    color,
    activeSlide,
    className,
}: ILibSlideshowPagination) {
    return (
        <StyledSlideshowPagination
            data-testid={testid}
            className={className}
            $position={position}
            $hideOnTouch={hideOnTouch}
        >
            {navType === "thumbnails"
                ? images.map((img, i) => (
                      <SlideshowThumbnail
                          key={uuid()}
                          data-testid={testid && `${testid}.Thumbnail`}
                          className={classNames(
                              {
                                  SlideshowThumbnail: className,
                              },
                              { Active: activeSlide === i }
                          )}
                          onClick={() => setActive(i)}
                      >
                          <Image
                              data-testid={
                                  testid && `${testid}.Thumbnail.Image`
                              }
                              className={className && "SlideshowThumbnailImage"}
                              src={img}
                              alt={`Thumbnail ${img}`}
                              width="100%"
                              height="100%"
                              fit="cover"
                          />
                      </SlideshowThumbnail>
                  ))
                : generateNumbers(0, childrenLength - 1).map((_, i) => (
                      <SlideshowPaginationItem
                          data-testid={testid && `${testid}.PaginationItem`}
                          className={classNames(
                              { SlideshowPaginationItem: className },
                              { Active: activeSlide === i }
                          )}
                          key={uuid()}
                          onClick={() => setActive(i)}
                          $type={navType}
                          $color={color}
                      />
                  ))}
        </StyledSlideshowPagination>
    )
}
