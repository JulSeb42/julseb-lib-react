/*=============================================== Theme type ===============================================*/

import { COLORS_LIGHT, COLORS_DARK } from "../Variables"
import type { LibThemeNames } from "./global"

export const Themes: Record<LibThemeNames, any> = {
    light: {
        BLACK: COLORS_LIGHT.BLACK,
        WHITE: COLORS_LIGHT.WHITE,
        GRAY_50: COLORS_LIGHT.GRAY_50,
        GRAY_100: COLORS_LIGHT.GRAY_100,
        GRAY_200: COLORS_LIGHT.GRAY_200,
        GRAY_300: COLORS_LIGHT.GRAY_300,
        GRAY_400: COLORS_LIGHT.GRAY_400,
        GRAY_500: COLORS_LIGHT.GRAY_500,
        GRAY_600: COLORS_LIGHT.GRAY_600,
        GRAY_700: COLORS_LIGHT.GRAY_700,
        GRAY_800: COLORS_LIGHT.GRAY_800,
        GRAY_900: COLORS_LIGHT.GRAY_900,
        PRIMARY_50: COLORS_LIGHT.PRIMARY_50,
        PRIMARY_100: COLORS_LIGHT.PRIMARY_100,
        PRIMARY_200: COLORS_LIGHT.PRIMARY_200,
        PRIMARY_300: COLORS_LIGHT.PRIMARY_300,
        PRIMARY_400: COLORS_LIGHT.PRIMARY_400,
        PRIMARY_500: COLORS_LIGHT.PRIMARY_500,
        PRIMARY_600: COLORS_LIGHT.PRIMARY_600,
        PRIMARY_700: COLORS_LIGHT.PRIMARY_700,
        PRIMARY_800: COLORS_LIGHT.PRIMARY_800,
        PRIMARY_900: COLORS_LIGHT.PRIMARY_900,
        SECONDARY_50: COLORS_LIGHT.SECONDARY_50,
        SECONDARY_100: COLORS_LIGHT.SECONDARY_100,
        SECONDARY_200: COLORS_LIGHT.SECONDARY_200,
        SECONDARY_300: COLORS_LIGHT.SECONDARY_300,
        SECONDARY_400: COLORS_LIGHT.SECONDARY_400,
        SECONDARY_500: COLORS_LIGHT.SECONDARY_500,
        SECONDARY_600: COLORS_LIGHT.SECONDARY_600,
        SECONDARY_700: COLORS_LIGHT.SECONDARY_700,
        SECONDARY_800: COLORS_LIGHT.SECONDARY_800,
        SECONDARY_900: COLORS_LIGHT.SECONDARY_900,
        SUCCESS_50: COLORS_LIGHT.SUCCESS_50,
        SUCCESS_100: COLORS_LIGHT.SUCCESS_100,
        SUCCESS_200: COLORS_LIGHT.SUCCESS_200,
        SUCCESS_300: COLORS_LIGHT.SUCCESS_300,
        SUCCESS_400: COLORS_LIGHT.SUCCESS_400,
        SUCCESS_500: COLORS_LIGHT.SUCCESS_500,
        SUCCESS_600: COLORS_LIGHT.SUCCESS_600,
        SUCCESS_700: COLORS_LIGHT.SUCCESS_700,
        SUCCESS_800: COLORS_LIGHT.SUCCESS_800,
        SUCCESS_900: COLORS_LIGHT.SUCCESS_900,
        DANGER_50: COLORS_LIGHT.DANGER_50,
        DANGER_100: COLORS_LIGHT.DANGER_100,
        DANGER_200: COLORS_LIGHT.DANGER_200,
        DANGER_300: COLORS_LIGHT.DANGER_300,
        DANGER_400: COLORS_LIGHT.DANGER_400,
        DANGER_500: COLORS_LIGHT.DANGER_500,
        DANGER_600: COLORS_LIGHT.DANGER_600,
        DANGER_700: COLORS_LIGHT.DANGER_700,
        DANGER_800: COLORS_LIGHT.DANGER_800,
        DANGER_900: COLORS_LIGHT.DANGER_900,
        WARNING_50: COLORS_LIGHT.WARNING_50,
        WARNING_100: COLORS_LIGHT.WARNING_100,
        WARNING_200: COLORS_LIGHT.WARNING_200,
        WARNING_300: COLORS_LIGHT.WARNING_300,
        WARNING_400: COLORS_LIGHT.WARNING_400,
        WARNING_500: COLORS_LIGHT.WARNING_500,
        WARNING_600: COLORS_LIGHT.WARNING_600,
        WARNING_700: COLORS_LIGHT.WARNING_700,
        WARNING_800: COLORS_LIGHT.WARNING_800,
        WARNING_900: COLORS_LIGHT.WARNING_900,
        BACKGROUND: COLORS_LIGHT.BACKGROUND,
        FONT: COLORS_LIGHT.FONT,
        CURRENT_COLOR: "currentColor",
        TRANSPARENT: "transparent",
        LINK_FONT_DEFAULT: COLORS_LIGHT.LINK_FONT_DEFAULT,
        LINK_FONT_HOVER: COLORS_LIGHT.LINK_FONT_HOVER,
        LINK_FONT_ACTIVE: COLORS_LIGHT.LINK_FONT_ACTIVE,
        LINK_BACKGROUND_DEFAULT: COLORS_LIGHT.LINK_BACKGROUND_DEFAULT,
        LINK_BACKGROUND_HOVER: COLORS_LIGHT.LINK_BACKGROUND_HOVER,
        LINK_BACKGROUND_ACTIVE: COLORS_LIGHT.LINK_BACKGROUND_ACTIVE,
        FONT_GHOST_DEFAULT: COLORS_LIGHT.FONT_GHOST_DEFAULT,
        FONT_GHOST_HOVER: COLORS_LIGHT.FONT_GHOST_HOVER,
        FONT_GHOST_ACTIVE: COLORS_LIGHT.FONT_GHOST_ACTIVE,
        BACKGROUND_GHOST_DEFAULT: COLORS_LIGHT.BACKGROUND_GHOST_DEFAULT,
        BACKGROUND_GHOST_HOVER: COLORS_LIGHT.BACKGROUND_GHOST_HOVER,
        BACKGROUND_GHOST_ACTIVE: COLORS_LIGHT.BACKGROUND_GHOST_ACTIVE,
    },

    dark: {
        BLACK: COLORS_DARK.BLACK,
        WHITE: COLORS_DARK.WHITE,
        GRAY_50: COLORS_DARK.GRAY_50,
        GRAY_100: COLORS_DARK.GRAY_100,
        GRAY_200: COLORS_DARK.GRAY_200,
        GRAY_300: COLORS_DARK.GRAY_300,
        GRAY_400: COLORS_DARK.GRAY_400,
        GRAY_500: COLORS_DARK.GRAY_500,
        GRAY_600: COLORS_DARK.GRAY_600,
        GRAY_700: COLORS_DARK.GRAY_700,
        GRAY_800: COLORS_DARK.GRAY_800,
        GRAY_900: COLORS_DARK.GRAY_900,
        PRIMARY_50: COLORS_DARK.PRIMARY_50,
        PRIMARY_100: COLORS_DARK.PRIMARY_100,
        PRIMARY_200: COLORS_DARK.PRIMARY_200,
        PRIMARY_300: COLORS_DARK.PRIMARY_300,
        PRIMARY_400: COLORS_DARK.PRIMARY_400,
        PRIMARY_500: COLORS_DARK.PRIMARY_500,
        PRIMARY_600: COLORS_DARK.PRIMARY_600,
        PRIMARY_700: COLORS_DARK.PRIMARY_700,
        PRIMARY_800: COLORS_DARK.PRIMARY_800,
        PRIMARY_900: COLORS_DARK.PRIMARY_900,
        SECONDARY_50: COLORS_DARK.SECONDARY_50,
        SECONDARY_100: COLORS_DARK.SECONDARY_100,
        SECONDARY_200: COLORS_DARK.SECONDARY_200,
        SECONDARY_300: COLORS_DARK.SECONDARY_300,
        SECONDARY_400: COLORS_DARK.SECONDARY_400,
        SECONDARY_500: COLORS_DARK.SECONDARY_500,
        SECONDARY_600: COLORS_DARK.SECONDARY_600,
        SECONDARY_700: COLORS_DARK.SECONDARY_700,
        SECONDARY_800: COLORS_DARK.SECONDARY_800,
        SECONDARY_900: COLORS_DARK.SECONDARY_900,
        SUCCESS_50: COLORS_DARK.SUCCESS_50,
        SUCCESS_100: COLORS_DARK.SUCCESS_100,
        SUCCESS_200: COLORS_DARK.SUCCESS_200,
        SUCCESS_300: COLORS_DARK.SUCCESS_300,
        SUCCESS_400: COLORS_DARK.SUCCESS_400,
        SUCCESS_500: COLORS_DARK.SUCCESS_500,
        SUCCESS_600: COLORS_DARK.SUCCESS_600,
        SUCCESS_700: COLORS_DARK.SUCCESS_700,
        SUCCESS_800: COLORS_DARK.SUCCESS_800,
        SUCCESS_900: COLORS_DARK.SUCCESS_900,
        DANGER_50: COLORS_DARK.DANGER_50,
        DANGER_100: COLORS_DARK.DANGER_100,
        DANGER_200: COLORS_DARK.DANGER_200,
        DANGER_300: COLORS_DARK.DANGER_300,
        DANGER_400: COLORS_DARK.DANGER_400,
        DANGER_500: COLORS_DARK.DANGER_500,
        DANGER_600: COLORS_DARK.DANGER_600,
        DANGER_700: COLORS_DARK.DANGER_700,
        DANGER_800: COLORS_DARK.DANGER_800,
        DANGER_900: COLORS_DARK.DANGER_900,
        WARNING_50: COLORS_DARK.WARNING_50,
        WARNING_100: COLORS_DARK.WARNING_100,
        WARNING_200: COLORS_DARK.WARNING_200,
        WARNING_300: COLORS_DARK.WARNING_300,
        WARNING_400: COLORS_DARK.WARNING_400,
        WARNING_500: COLORS_DARK.WARNING_500,
        WARNING_600: COLORS_DARK.WARNING_600,
        WARNING_700: COLORS_DARK.WARNING_700,
        WARNING_800: COLORS_DARK.WARNING_800,
        WARNING_900: COLORS_DARK.WARNING_900,
        BACKGROUND: COLORS_DARK.BACKGROUND,
        FONT: COLORS_DARK.FONT,
        CURRENT_COLOR: "currentColor",
        TRANSPARENT: "transparent",
        LINK_FONT_DEFAULT: COLORS_DARK.LINK_FONT_DEFAULT,
        LINK_FONT_HOVER: COLORS_DARK.LINK_FONT_HOVER,
        LINK_FONT_ACTIVE: COLORS_DARK.LINK_FONT_ACTIVE,
        LINK_BACKGROUND_DEFAULT: COLORS_DARK.LINK_BACKGROUND_DEFAULT,
        LINK_BACKGROUND_HOVER: COLORS_DARK.LINK_BACKGROUND_HOVER,
        LINK_BACKGROUND_ACTIVE: COLORS_DARK.LINK_BACKGROUND_ACTIVE,
        FONT_GHOST_DEFAULT: COLORS_DARK.FONT_GHOST_DEFAULT,
        FONT_GHOST_HOVER: COLORS_DARK.FONT_GHOST_HOVER,
        FONT_GHOST_ACTIVE: COLORS_DARK.FONT_GHOST_ACTIVE,
        BACKGROUND_GHOST_DEFAULT: COLORS_DARK.BACKGROUND_GHOST_DEFAULT,
        BACKGROUND_GHOST_HOVER: COLORS_DARK.BACKGROUND_GHOST_HOVER,
        BACKGROUND_GHOST_ACTIVE: COLORS_DARK.BACKGROUND_GHOST_ACTIVE,
    },
}
