import type { RequireAtLeastOne } from "../../lib/types"
import type { Color, Variable } from "../../data/types"

interface CardProps {
    color?: Color
    overlay?: Variable
}

export type ColorCardProps = RequireAtLeastOne<CardProps, "color" | "overlay">
