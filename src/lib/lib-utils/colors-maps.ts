import { COLORS_LIGHT, COLORS_DARK, OVERLAYS } from "../Variables"
import type { LibAllColors, LibColorsShort, LibOverlays } from "../types"

type Color = COLORS_LIGHT | COLORS_DARK

export const colorsLightShortMap = new Map<LibColorsShort, Color>([
    ["primary", COLORS_LIGHT.PRIMARY_500],
    ["secondary", COLORS_LIGHT.SECONDARY_500],
    ["success", COLORS_LIGHT.SUCCESS_500],
    ["danger", COLORS_LIGHT.DANGER_500],
    ["warning", COLORS_LIGHT.WARNING_500],
    ["gray", COLORS_LIGHT.GRAY_500],
    ["black", COLORS_LIGHT.BLACK],
    ["white", COLORS_LIGHT.WHITE],
])

export const allColorsLightMap = new Map<LibAllColors, Color>([
    ...colorsLightShortMap,
    ["gray-50", COLORS_LIGHT.GRAY_50],
    ["gray-100", COLORS_LIGHT.GRAY_100],
    ["gray-200", COLORS_LIGHT.GRAY_200],
    ["gray-300", COLORS_LIGHT.GRAY_300],
    ["gray-400", COLORS_LIGHT.GRAY_400],
    ["gray-500", COLORS_LIGHT.GRAY_500],
    ["gray-600", COLORS_LIGHT.GRAY_600],
    ["gray-700", COLORS_LIGHT.GRAY_700],
    ["gray-800", COLORS_LIGHT.GRAY_800],
    ["gray-900", COLORS_LIGHT.GRAY_900],
    ["primary-50", COLORS_LIGHT.PRIMARY_50],
    ["primary-100", COLORS_LIGHT.PRIMARY_100],
    ["primary-200", COLORS_LIGHT.PRIMARY_200],
    ["primary-300", COLORS_LIGHT.PRIMARY_300],
    ["primary-400", COLORS_LIGHT.PRIMARY_400],
    ["primary-500", COLORS_LIGHT.PRIMARY_500],
    ["primary-600", COLORS_LIGHT.PRIMARY_600],
    ["primary-700", COLORS_LIGHT.PRIMARY_700],
    ["primary-800", COLORS_LIGHT.PRIMARY_800],
    ["primary-900", COLORS_LIGHT.PRIMARY_900],
    ["secondary-50", COLORS_LIGHT.SECONDARY_50],
    ["secondary-100", COLORS_LIGHT.SECONDARY_100],
    ["secondary-200", COLORS_LIGHT.SECONDARY_200],
    ["secondary-300", COLORS_LIGHT.SECONDARY_300],
    ["secondary-400", COLORS_LIGHT.SECONDARY_400],
    ["secondary-500", COLORS_LIGHT.SECONDARY_500],
    ["secondary-600", COLORS_LIGHT.SECONDARY_600],
    ["secondary-700", COLORS_LIGHT.SECONDARY_700],
    ["secondary-800", COLORS_LIGHT.SECONDARY_800],
    ["secondary-900", COLORS_LIGHT.SECONDARY_900],
    ["success-50", COLORS_LIGHT.SUCCESS_50],
    ["success-100", COLORS_LIGHT.SUCCESS_100],
    ["success-200", COLORS_LIGHT.SUCCESS_200],
    ["success-300", COLORS_LIGHT.SUCCESS_300],
    ["success-400", COLORS_LIGHT.SUCCESS_400],
    ["success-500", COLORS_LIGHT.SUCCESS_500],
    ["success-600", COLORS_LIGHT.SUCCESS_600],
    ["success-700", COLORS_LIGHT.SUCCESS_700],
    ["success-800", COLORS_LIGHT.SUCCESS_800],
    ["success-900", COLORS_LIGHT.SUCCESS_900],
    ["danger-50", COLORS_LIGHT.DANGER_50],
    ["danger-100", COLORS_LIGHT.DANGER_100],
    ["danger-200", COLORS_LIGHT.DANGER_200],
    ["danger-300", COLORS_LIGHT.DANGER_300],
    ["danger-400", COLORS_LIGHT.DANGER_400],
    ["danger-500", COLORS_LIGHT.DANGER_500],
    ["danger-600", COLORS_LIGHT.DANGER_600],
    ["danger-700", COLORS_LIGHT.DANGER_700],
    ["danger-800", COLORS_LIGHT.DANGER_800],
    ["danger-900", COLORS_LIGHT.DANGER_900],
    ["warning-50", COLORS_LIGHT.WARNING_50],
    ["warning-100", COLORS_LIGHT.WARNING_100],
    ["warning-200", COLORS_LIGHT.WARNING_200],
    ["warning-300", COLORS_LIGHT.WARNING_300],
    ["warning-400", COLORS_LIGHT.WARNING_400],
    ["warning-500", COLORS_LIGHT.WARNING_500],
    ["warning-600", COLORS_LIGHT.WARNING_600],
    ["warning-700", COLORS_LIGHT.WARNING_700],
    ["warning-800", COLORS_LIGHT.WARNING_800],
    ["warning-900", COLORS_LIGHT.WARNING_900],
    ["background", COLORS_LIGHT.BACKGROUND],
    ["font", COLORS_LIGHT.FONT],
    ["currentColor", COLORS_LIGHT.CURRENT_COLOR],
    ["transparent", COLORS_LIGHT.TRANSPARENT],
])

export const colorsDarkShortMap = new Map<LibColorsShort, COLORS_DARK>([
    ["primary", COLORS_DARK.PRIMARY_500],
    ["secondary", COLORS_DARK.SECONDARY_500],
    ["success", COLORS_DARK.SUCCESS_500],
    ["danger", COLORS_DARK.DANGER_500],
    ["warning", COLORS_DARK.WARNING_500],
    ["gray", COLORS_DARK.GRAY_500],
    ["black", COLORS_DARK.BLACK],
    ["white", COLORS_DARK.WHITE],
])

export const allColorsDarkMap = new Map<
    LibAllColors,
    COLORS_DARK | "currentColor" | "transparent"
>([
    ...colorsDarkShortMap,
    ["gray-50", COLORS_DARK.GRAY_50],
    ["gray-100", COLORS_DARK.GRAY_100],
    ["gray-200", COLORS_DARK.GRAY_200],
    ["gray-300", COLORS_DARK.GRAY_300],
    ["gray-400", COLORS_DARK.GRAY_400],
    ["gray-500", COLORS_DARK.GRAY_500],
    ["gray-600", COLORS_DARK.GRAY_600],
    ["gray-700", COLORS_DARK.GRAY_700],
    ["gray-800", COLORS_DARK.GRAY_800],
    ["gray-900", COLORS_DARK.GRAY_900],
    ["primary-50", COLORS_DARK.PRIMARY_50],
    ["primary-100", COLORS_DARK.PRIMARY_100],
    ["primary-200", COLORS_DARK.PRIMARY_200],
    ["primary-300", COLORS_DARK.PRIMARY_300],
    ["primary-400", COLORS_DARK.PRIMARY_400],
    ["primary-500", COLORS_DARK.PRIMARY_500],
    ["primary-600", COLORS_DARK.PRIMARY_600],
    ["primary-700", COLORS_DARK.PRIMARY_700],
    ["primary-800", COLORS_DARK.PRIMARY_800],
    ["primary-900", COLORS_DARK.PRIMARY_900],
    ["secondary-50", COLORS_DARK.SECONDARY_50],
    ["secondary-100", COLORS_DARK.SECONDARY_100],
    ["secondary-200", COLORS_DARK.SECONDARY_200],
    ["secondary-300", COLORS_DARK.SECONDARY_300],
    ["secondary-400", COLORS_DARK.SECONDARY_400],
    ["secondary-500", COLORS_DARK.SECONDARY_500],
    ["secondary-600", COLORS_DARK.SECONDARY_600],
    ["secondary-700", COLORS_DARK.SECONDARY_700],
    ["secondary-800", COLORS_DARK.SECONDARY_800],
    ["secondary-900", COLORS_DARK.SECONDARY_900],
    ["success-50", COLORS_DARK.SUCCESS_50],
    ["success-100", COLORS_DARK.SUCCESS_100],
    ["success-200", COLORS_DARK.SUCCESS_200],
    ["success-300", COLORS_DARK.SUCCESS_300],
    ["success-400", COLORS_DARK.SUCCESS_400],
    ["success-500", COLORS_DARK.SUCCESS_500],
    ["success-600", COLORS_DARK.SUCCESS_600],
    ["success-700", COLORS_DARK.SUCCESS_700],
    ["success-800", COLORS_DARK.SUCCESS_800],
    ["success-900", COLORS_DARK.SUCCESS_900],
    ["danger-50", COLORS_DARK.DANGER_50],
    ["danger-100", COLORS_DARK.DANGER_100],
    ["danger-200", COLORS_DARK.DANGER_200],
    ["danger-300", COLORS_DARK.DANGER_300],
    ["danger-400", COLORS_DARK.DANGER_400],
    ["danger-500", COLORS_DARK.DANGER_500],
    ["danger-600", COLORS_DARK.DANGER_600],
    ["danger-700", COLORS_DARK.DANGER_700],
    ["danger-800", COLORS_DARK.DANGER_800],
    ["danger-900", COLORS_DARK.DANGER_900],
    ["warning-50", COLORS_DARK.WARNING_50],
    ["warning-100", COLORS_DARK.WARNING_100],
    ["warning-200", COLORS_DARK.WARNING_200],
    ["warning-300", COLORS_DARK.WARNING_300],
    ["warning-400", COLORS_DARK.WARNING_400],
    ["warning-500", COLORS_DARK.WARNING_500],
    ["warning-600", COLORS_DARK.WARNING_600],
    ["warning-700", COLORS_DARK.WARNING_700],
    ["warning-800", COLORS_DARK.WARNING_800],
    ["warning-900", COLORS_DARK.WARNING_900],
    ["background", COLORS_DARK.BACKGROUND],
    ["font", COLORS_DARK.FONT],
    ["currentColor", "currentColor"],
    ["transparent", "transparent"],
])

export const overlaysMap = new Map<LibOverlays, OVERLAYS>([
    ["black-50", OVERLAYS.BLACK_50],
    ["black-80", OVERLAYS.BLACK_80],
    ["white-50", OVERLAYS.WHITE_50],
    ["white-80", OVERLAYS.WHITE_80],
    ["gradient-black", OVERLAYS.GRADIENT_BLACK],
    ["gradient-white", OVERLAYS.GRADIENT_WHITE],
])
