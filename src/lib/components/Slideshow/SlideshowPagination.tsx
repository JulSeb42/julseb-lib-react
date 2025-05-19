import type { FC } from "react"
import classNames from "classnames"
import { uuid, generateNumbers } from "@julseb-lib/utils"
import { Image } from "../.."
import {
    SlideshowThumbnail,
    SlideshowPaginationItem,
    StyledSlideshowPagination,
} from "./styles"
import type { ILibSlideshowPagination } from "./subtypes"

export const SlideshowPagination: FC<ILibSlideshowPagination> = ({
    "data-testid": testid,
    className,
    pagination,
    images,
    setActive,
    contentLength,
    activeSlide,
}) => {
    const {
        position = "outside",
        hideOnTouch,
        type = "dots",
        color = "primary",
    } = pagination as any

    return (
        <StyledSlideshowPagination
            data-testid={testid && `${testid}.SlideshowPagination`}
            className={className && "SlideshowPagination"}
            $position={position}
            $hideOnTouch={hideOnTouch}
        >
            {type === "thumbnails"
                ? images?.map((img, i) => (
                      <SlideshowThumbnail
                          key={uuid()}
                          data-testid={
                              testid &&
                              `${testid}.SlideshowPagination.Thumbnail`
                          }
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
                                  testid &&
                                  `${testid}.SlideshowPagination.Thumbnail.Image`
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
                : generateNumbers(0, contentLength - 1).map((_, i) => (
                      <SlideshowPaginationItem
                          data-testid={
                              testid &&
                              `${testid}.SlideshowPagination.PaginationItem`
                          }
                          className={classNames(
                              { SlideshowPaginationItem: className },
                              { Active: activeSlide === i }
                          )}
                          key={uuid()}
                          onClick={() => setActive(i)}
                          $type={type}
                          $color={color}
                      />
                  ))}
        </StyledSlideshowPagination>
    )
}
