/*=============================================== Variables ===============================================*/

/*====================== Colors ======================*/

export enum COLORS_LIGHT {
    /** #000000 */ BLACK = "var(--color-black)",
    /** #FFFFFF */ WHITE = "var(--color-white)",
    /** #F8F8F8 */ GRAY_50 = "var(--color-light-gray-50)",
    /** #E4E4E4 */ GRAY_100 = "var(--color-light-gray-100)",
    /** #C8C8C8 */ GRAY_200 = "var(--color-light-gray-200)",
    /** #ADADAD */ GRAY_300 = "var(--color-light-gray-300)",
    /** #919191 */ GRAY_400 = "var(--color-light-gray-400)",
    /** #767676 */ GRAY_500 = "var(--color-light-gray-500)",
    /** #5E5E5E */ GRAY_600 = "var(--color-light-gray-600)",
    /** #474747 */ GRAY_700 = "var(--color-light-gray-700)",
    /** #2F2F2F */ GRAY_800 = "var(--color-light-gray-800)",
    /** #181818 */ GRAY_900 = "var(--color-light-gray-900)",
    /** #F4F6F7 */ PRIMARY_50 = "var(--color-light-primary-50)",
    /** #D1DAE1 */ PRIMARY_100 = "var(--color-light-primary-100)",
    /** #A4B5C3 */ PRIMARY_200 = "var(--color-light-primary-200)",
    /** #768FA4 */ PRIMARY_300 = "var(--color-light-primary-300)",
    /** #496A86 */ PRIMARY_400 = "var(--color-light-primary-400)",
    /** #1B4568 */ PRIMARY_500 = "var(--color-light-primary-500)",
    /** #163753 */ PRIMARY_600 = "var(--color-light-primary-600)",
    /** #10293E */ PRIMARY_700 = "var(--color-light-primary-700)",
    /** #0B1C2A */ PRIMARY_800 = "var(--color-light-primary-800)",
    /** #050E15 */ PRIMARY_900 = "var(--color-light-primary-900)",
    /** #F4F8FD */ SECONDARY_50 = "var(--color-light-secondary-50)",
    /** #D4E2F6 */ SECONDARY_100 = "var(--color-light-secondary-100)",
    /** #A8C5ED */ SECONDARY_200 = "var(--color-light-secondary-200)",
    /** #7DA7E5 */ SECONDARY_300 = "var(--color-light-secondary-300)",
    /** #518ADC */ SECONDARY_400 = "var(--color-light-secondary-400)",
    /** #266DD3 */ SECONDARY_500 = "var(--color-light-secondary-500)",
    /** #1E57A9 */ SECONDARY_600 = "var(--color-light-secondary-600)",
    /** #17417F */ SECONDARY_700 = "var(--color-light-secondary-700)",
    /** #0F2C54 */ SECONDARY_800 = "var(--color-light-secondary-800)",
    /** #08162A */ SECONDARY_900 = "var(--color-light-secondary-900)",
    /** #F3F9F6 */ SUCCESS_50 = "var(--color-light-success-50)",
    /** #CEE6DB */ SUCCESS_100 = "var(--color-light-success-100)",
    /** #9DCDB7 */ SUCCESS_200 = "var(--color-light-success-200)",
    /** #6BB392 */ SUCCESS_300 = "var(--color-light-success-300)",
    /** #3A9A6E */ SUCCESS_400 = "var(--color-light-success-400)",
    /** #09814A */ SUCCESS_500 = "var(--color-light-success-500)",
    /** #07673B */ SUCCESS_600 = "var(--color-light-success-600)",
    /** #054D2C */ SUCCESS_700 = "var(--color-light-success-700)",
    /** #04341E */ SUCCESS_800 = "var(--color-light-success-800)",
    /** #021A0F */ SUCCESS_900 = "var(--color-light-success-900)",
    /** #FBF2F4 */ DANGER_50 = "var(--color-light-danger-50)",
    /** #F0CCD1 */ DANGER_100 = "var(--color-light-danger-100)",
    /** #E199A4 */ DANGER_200 = "var(--color-light-danger-200)",
    /** #D16676 */ DANGER_300 = "var(--color-light-danger-300)",
    /** #C23349 */ DANGER_400 = "var(--color-light-danger-400)",
    /** #B3001B */ DANGER_500 = "var(--color-light-danger-500)",
    /** #8F0016 */ DANGER_600 = "var(--color-light-danger-600)",
    /** #6B0010 */ DANGER_700 = "var(--color-light-danger-700)",
    /** #48000B */ DANGER_800 = "var(--color-light-danger-800)",
    /** #240005 */ DANGER_900 = "var(--color-light-danger-900)",
    /** #FCF6F2 */ WARNING_50 = "var(--color-light-warning-50)",
    /** #F3DBCC */ WARNING_100 = "var(--color-light-warning-100)",
    /** #E7B699 */ WARNING_200 = "var(--color-light-warning-200)",
    /** #DC9266 */ WARNING_300 = "var(--color-light-warning-300)",
    /** #D06D33 */ WARNING_400 = "var(--color-light-warning-400)",
    /** #C44900 */ WARNING_500 = "var(--color-light-warning-500)",
    /** #9D3A00 */ WARNING_600 = "var(--color-light-warning-600)",
    /** #762C00 */ WARNING_700 = "var(--color-light-warning-700)",
    /** #4E1D00 */ WARNING_800 = "var(--color-light-warning-800)",
    /** #270F00 */ WARNING_900 = "var(--color-light-warning-900)",
    /** #FFFFFF */ BACKGROUND = "var(--color-light-background)",
    /** #000000 */ FONT = "var(--color-light-font)",

    /** #000000 */ LINK_FONT_DEFAULT = "var(--color-light-link-font-default)",
    /** #474747 */ LINK_FONT_HOVER = "var(--color-light-link-font-hover)",
    /** #181818 */ LINK_FONT_ACTIVE = "var(--color-light-link-font-active)",
    /** #FFFFFF */ LINK_BACKGROUND_DEFAULT = "var(--color-light-link-background-default)",
    /** #ADADAD */ LINK_BACKGROUND_HOVER = "var(--color-light-link-background-hover)",
    /** #E4E4E4 */ LINK_BACKGROUND_ACTIVE = "var(--color-light-link-background-active)",
    /** #181818 */ FONT_GHOST_DEFAULT = "var(--color-light-font-ghost-default)",
    /** #2F2F2F */ FONT_GHOST_HOVER = "var(--color-light-font-ghost-hover)",
    /** #474747 */ FONT_GHOST_ACTIVE = "var(--color-light-font-ghost-active)",
    /** #F8F8F8 */ BACKGROUND_GHOST_DEFAULT = "var(--color-light-background-ghost-default)",
    /** #C8C8C8 */ BACKGROUND_GHOST_HOVER = "var(--color-light-background-ghost-hover)",
    /** #E4E4E4 */ BACKGROUND_GHOST_ACTIVE = "var(--color-light-background-ghost-active)",

    TRANSPARENT = "transparent",
    CURRENT_COLOR = "currentColor",
}

export enum COLORS_DARK {
    /** #000000 */ BLACK = "var(--color-black)",
    /** #FFFFFF */ WHITE = "var(--color-white)",
    /** #181818 */ GRAY_50 = "var(--color-dark-gray-50)",
    /** #2F2F2F */ GRAY_100 = "var(--color-dark-gray-100)",
    /** #474747 */ GRAY_200 = "var(--color-dark-gray-200)",
    /** #5E5E5E */ GRAY_300 = "var(--color-dark-gray-300)",
    /** #767676 */ GRAY_400 = "var(--color-dark-gray-400)",
    /** #919191 */ GRAY_500 = "var(--color-dark-gray-500)",
    /** #ADADAD */ GRAY_600 = "var(--color-dark-gray-600)",
    /** #C8C8C8 */ GRAY_700 = "var(--color-dark-gray-700)",
    /** #E4E4E4 */ GRAY_800 = "var(--color-dark-gray-800)",
    /** #F8F8F8 */ GRAY_900 = "var(--color-dark-gray-900)",
    /** #141E33 */ PRIMARY_50 = "var(--color-dark-primary-50)",
    /** #293D66 */ PRIMARY_100 = "var(--color-dark-primary-100)",
    /** #3D5B99 */ PRIMARY_200 = "var(--color-dark-primary-200)",
    /** #527ACC */ PRIMARY_300 = "var(--color-dark-primary-300)",
    /** #6698FF */ PRIMARY_400 = "var(--color-dark-primary-400)",
    /** #85ADFF */ PRIMARY_500 = "var(--color-dark-primary-500)",
    /** #A3C1FF */ PRIMARY_600 = "var(--color-dark-primary-600)",
    /** #C2D6FF */ PRIMARY_700 = "var(--color-dark-primary-700)",
    /** #E0EAFF */ PRIMARY_800 = "var(--color-dark-primary-800)",
    /** #F7FAFF */ PRIMARY_900 = "var(--color-dark-primary-900)",
    /** #172D2E */ SECONDARY_50 = "var(--color-dark-secondary-50)",
    /** #2E595C */ SECONDARY_100 = "var(--color-dark-secondary-100)",
    /** #44868B */ SECONDARY_200 = "var(--color-dark-secondary-200)",
    /** #5BB2B9 */ SECONDARY_300 = "var(--color-dark-secondary-300)",
    /** #72DFE7 */ SECONDARY_400 = "var(--color-dark-secondary-400)",
    /** #8EE5EC */ SECONDARY_500 = "var(--color-dark-secondary-500)",
    /** #AAECF1 */ SECONDARY_600 = "var(--color-dark-secondary-600)",
    /** #C7F2F5 */ SECONDARY_700 = "var(--color-dark-secondary-700)",
    /** #E3F9FA */ SECONDARY_800 = "var(--color-dark-secondary-800)",
    /** #F8FEFE */ SECONDARY_900 = "var(--color-dark-secondary-900)",
    /** #112F20 */ SUCCESS_50 = "var(--color-dark-success-50)",
    /** #235E40 */ SUCCESS_100 = "var(--color-dark-success-100)",
    /** #348D61 */ SUCCESS_200 = "var(--color-dark-success-200)",
    /** #46BC81 */ SUCCESS_300 = "var(--color-dark-success-300)",
    /** #57EBA1 */ SUCCESS_400 = "var(--color-dark-success-400)",
    /** #79EFB4 */ SUCCESS_500 = "var(--color-dark-success-500)",
    /** #9AF3C7 */ SUCCESS_600 = "var(--color-dark-success-600)",
    /** #BCF7D9 */ SUCCESS_700 = "var(--color-dark-success-700)",
    /** #DDFBEC */ SUCCESS_800 = "var(--color-dark-success-800)",
    /** #F7FEFA */ SUCCESS_900 = "var(--color-dark-success-900)",
    /** #331A1A */ DANGER_50 = "var(--color-dark-danger-50)",
    /** #663333 */ DANGER_100 = "var(--color-dark-danger-100)",
    /** #994D4D */ DANGER_200 = "var(--color-dark-danger-200)",
    /** #CC6666 */ DANGER_300 = "var(--color-dark-danger-300)",
    /** #FF8080 */ DANGER_400 = "var(--color-dark-danger-400)",
    /** #FF9999 */ DANGER_500 = "var(--color-dark-danger-500)",
    /** #FFB3B3 */ DANGER_600 = "var(--color-dark-danger-600)",
    /** #FFCCCC */ DANGER_700 = "var(--color-dark-danger-700)",
    /** #FFE6E6 */ DANGER_800 = "var(--color-dark-danger-800)",
    /** #FFF9F9 */ DANGER_900 = "var(--color-dark-danger-900)",
    /** #332917 */ WARNING_50 = "var(--color-dark-warning-50)",
    /** #65522E */ WARNING_100 = "var(--color-dark-warning-100)",
    /** #987A46 */ WARNING_200 = "var(--color-dark-warning-200)",
    /** #CAA35D */ WARNING_300 = "var(--color-dark-warning-300)",
    /** #FDCC74 */ WARNING_400 = "var(--color-dark-warning-400)",
    /** #FED690 */ WARNING_500 = "var(--color-dark-warning-500)",
    /** #FEE0AC */ WARNING_600 = "var(--color-dark-warning-600)",
    /** #FEEBC7 */ WARNING_700 = "var(--color-dark-warning-700)",
    /** #FFF5E3 */ WARNING_800 = "var(--color-dark-warning-800)",
    /** #FFFDF8 */ WARNING_900 = "var(--color-dark-warning-900)",
    /** #121212 */ BACKGROUND = "var(--color-dark-background)",
    /** #FFFFFF */ FONT = "var(--color-dark-font)",

    /** #FFFFFF */ LINK_FONT_DEFAULT = "var(--color-dark-link-font-default)",
    /** #5E5E5E */ LINK_FONT_HOVER = "var(--color-dark-link-font-hover)",
    /** #2F2F2F */ LINK_FONT_ACTIVE = "var(--color-dark-link-font-active)",
    /** #121212 */ LINK_BACKGROUND_DEFAULT = "var(--color-dark-link-background-default)",
    /** #C8C8C8 */ LINK_BACKGROUND_HOVER = "var(--color-dark-link-background-hover)",
    /** #F8F8F8 */ LINK_BACKGROUND_ACTIVE = "var(--color-dark-link-background-active)",
    /** #F8F8F8 */ FONT_GHOST_DEFAULT = "var(--color-dark-font-ghost-default)",
    /** #C8C8C8 */ FONT_GHOST_HOVER = "var(--color-dark-font-ghost-hover)",
    /** #E4E4E4 */ FONT_GHOST_ACTIVE = "var(--color-dark-font-ghost-active)",
    /** #181818 */ BACKGROUND_GHOST_DEFAULT = "var(--color-dark-background-ghost-default)",
    /** #474747 */ BACKGROUND_GHOST_HOVER = "var(--color-dark-background-ghost-hover)",
    /** #2F2F2F */ BACKGROUND_GHOST_ACTIVE = "var(--color-dark-background-ghost-active)",

    TRANSPARENT = "transparent",
    CURRENT_COLOR = "currentColor",
}

/*====================== Overlays ======================*/

export enum OVERLAYS {
    /** rgba(0, 0, 0, 0.5) */ BLACK_50 = "var(--overlay-black-50)",
    /** rgba(0, 0, 0, 0.8) */ BLACK_80 = "var(--overlay-black-80)",
    /** rgba(255, 255, 255, 0.5) */ WHITE_50 = "var(--overlay-white-50)",
    /** rgba(255, 255, 255, 0.8) */ WHITE_80 = "var(--overlay-white-80)",
    /** linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%) */ GRADIENT_BLACK = "var(--overlay-gradient-black)",
    /** linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%) */ GRADIENT_WHITE = "var(--overlay-gradient-white)",
}

/*====================== Font families ======================*/

export enum FONT_FAMILIES {
    /** "Lato", sans-serif */ BODY = "var(--font-family-body)",
    /** monospace */ CODE = "var(--font-family-code)",
}

/*====================== Font sizes ======================*/

export enum FONT_SIZES {
    /** 5rem */ DISPLAY_H1 = "var(--font-size-display-h1)",
    /** 4rem */ DISPLAY_H2 = "var(--font-size-display-h2)",
    /** 3.5rem */ DISPLAY_H3 = "var(--font-size-display-h3)",
    /** 3rem */ DISPLAY_H4 = "var(--font-size-display-h4)",
    /** 2.5rem */ DISPLAY_H5 = "var(--font-size-display-h5)",
    /** 2.5rem */ H1 = "var(--font-size-h1)",
    /** 2rem */ H2 = "var(--font-size-h2)",
    /** 1.8rem */ H3 = "var(--font-size-h3)",
    /** 1.5rem */ H4 = "var(--font-size-h4)",
    /** 1.3rem */ H5 = "var(--font-size-h5)",
    /** 1.1rem */ H6 = "var(--font-size-h6)",
    /** 1rem */ BODY = "var(--font-size-body)",
    /** 0.875rem */ SMALL = "var(--font-size-small)",
}

/*====================== Font weights ======================*/

export enum FONT_WEIGHTS {
    /** 400 */ REGULAR = "var(--font-weight-regular)",
    /** 700 */ BOLD = "var(--font-weight-bold)",
    /** 900 */ BLACK = "var(--font-weight-black)",
}

/*====================== Line heights ======================*/

export enum LINE_HEIGHTS {
    /** 1.5 */ BODY = "var(--line-height-body)",
    /** 1.8 */ CODE = "var(--line-height-code)",
}

/*====================== Shadows ======================*/

export enum SHADOWS {
    /** 0px 10px 14px 8px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.3) */ XXL = "var(--shadow-xxl)",
    /** 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3) */ XL = "var(--shadow-xl)",
    /** 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3) */ L = "var(--shadow-l)",
    /** 0px 4px 8px 3px rgba(0, 0, 0, 0.15), px 1px 3px rgba(0, 0, 0, 0.3) */ M = "var(--shadow-m)",
    /** 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15) */ S = "var(--shadow-s)",
    /** 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15) */ XS = "var(--shadow-xs)",
}

/*====================== Spacers ======================*/

export enum SPACERS {
    /** 48px */ XXL = "var(--spacer-xxl)",
    /** 32px */ XL = "var(--spacer-xl)",
    /** 24px */ L = "var(--spacer-l)",
    /** 16px */ M = "var(--spacer-m)",
    /** 12px */ S = "var(--spacer-s)",
    /** 8px */ XS = "var(--spacer-xs)",
    /** 4px */ XXS = "var(--spacer-xxs)",
}

/*====================== Radiuses ======================*/

export enum RADIUSES {
    /** 24px */ XXL = "var(--radius-xxl)",
    /** 16px */ XL = "var(--radius-xl)",
    /** 12px */ L = "var(--radius-l)",
    /** 8px */ M = "var(--radius-m)",
    /** 4px */ S = "var(--radius-s)",
    /** 2px */ XS = "var(--radius-xs)",
    /** 99em */ ROUND = "var(--radius-round)",
    /** 50% */ CIRCLE = "var(--radius-circle)",
}

/*====================== Layouts ======================*/

export enum LAYOUTS {
    /** 600px */ MAIN_DEFAULT = "var(--main-default)",
    /** 800px */ MAIN_LARGE = "var(--main-large)",
    /** 400px */ MAIN_FORM = "var(--main-form)",
    /** 100% */ MAIN_FULL = "var(--main-full)",
    /** 250px */ ASIDE_DEFAULT = "var(--aside-default)",
    /** 200px */ ASIDE_SMALL = "var(--aside-small)",
}

/*====================== Transitions ======================*/

export enum TRANSITIONS {
    /** all 200ms ease */ SHORT = "var(--transition-short)",
    /** all 500ms ease */ LONG = "var(--transition-long)",
    /** all 0.5s cubic-bezier(0.25, 0.75, 0, 0.66) */ BEZIER = "var(--transition-bezier)",
    /** all 1000ms ease */ PROGRESS_CIRCLE = "var(--transition-progress-circle)",
}

/*====================== Breakpoints ======================*/

export enum MEDIA {
    BREAKPOINT_TABLET_LARGE = "(max-width: 1024px)",
    BREAKPOINT_TABLET_SMALL = "(max-width: 768px)",
    BREAKPOINT_MOBILE = "(max-width: 600px)",
    TOUCH = "(hover: none) and (pointer: coarse)",
    HOVER = "(hover: hover)",
    PREFERS_LIGHT = "(prefers-color-scheme: light)",
    PREFERS_DARK = "(prefers-color-scheme: dark)",
}

/*====================== Icon multiplier ======================*/

export const ICON_MULTIPLIER = 0.6 as const

/*====================== Input constants ======================*/

export const INPUT_HEIGHT = 32 as const
