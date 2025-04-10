type Mixin = {
    name: string
    effect: string
    variables: string
    example: string
}

export const allMixins: Array<Mixin> = [
    {
        name: "AllColors",
        effect: "Returns any color from the library",
        variables: "$color, theme",
        example:
            "color: ${({ $color, theme }) =>\n    Mixins.AllColors($color, theme)}",
    },
    {
        name: "ColorsShort",
        effect: "Short names for main colors",
        variables: "$color, theme",
        example:
            "background-color: ${({ $backgroundColor, theme }) =>\n    Mixins.ColorsShort($backgroundColor, theme)}",
    },
    {
        name: "ColorsAndOverlays",
        effect: "Return any color or overlay from the library",
        variables: "$color, theme",
        example:
            "background-color: ${({ $backgroundColor, theme }) =>\n    Mixins.ColorsAndOverlays($backgroundColor, theme)}",
    },
    {
        name: "ColorsHoverDefault",
        effect: "Default colors for element which change colors on hover",
        variables: "$color, theme",
        example:
            "color: ${({ theme, $color }) =>\n    Mixins.ColorsHoverDefault($color, theme)};",
    },
    {
        name: "ColorsHoverHover",
        effect: "Hover colors for element which change colors on hover",
        variables: "$color, theme",
        example:
            "&:hover {\n     color: ${({ theme, $color }) =>\n        Mixins.ColorsHoverHover($color, theme)};\n}",
    },
    {
        name: "ColorsHoverActive",
        effect: "Active colors for element which change colors on hover",
        variables: "$color, theme",
        example:
            "&:active {\n     color: ${({ theme, $color }) =>\n        Mixins.ColorsHoverActive($color, theme)};\n}",
    },
    {
        name: "ColorsGhostDefault",
        effect: "Default colors for buttons with ghost variant",
        variables: "$color, theme",
        example:
            "color: ${({ theme, $color }) =>\n    Mixins.ColorsGhostDefault($color, theme)};",
    },
    {
        name: "ColorsGhostHover",
        effect: "Hover colors for buttons with ghost variant",
        variables: "$color, theme",
        example:
            "&:hover {\n     color: ${({ theme, $color }) =>\n        Mixins.ColorsGhostHover($color, theme)};\n}",
    },
    {
        name: "ColorsGhostActive",
        effect: "Active colors for buttons with ghost variant",
        variables: "$color, theme",
        example:
            "&:active {\n     color: ${({ theme, $color }) =>\n        Mixins.ColorsGhostActive($color, theme)};\n}",
    },
    {
        name: "Colors50",
        effect: "Returns one of the colors 50",
        variables: "$color, theme",
        example:
            "background-color: ${({ theme, $backgroundColor }) =>\n    Mixins.Colors50($backgroundColor, theme)}",
    },

    {
        name: "Icon",
        effect: "Adds an icon",
        variables: "$name, $color, $size",
        example:
            '&:before { \n     ${Mixins.Icon({ \n         $name: "chevron-down", \n         $color: "primary", \n         $size: 24, \n     })}; \n}',
    },
    {
        name: "Overlay",
        effect: "Adds an overlay",
        variables: "$overlay",
        example:
            "background: ${({ $overlay }) =>\n    Mixins.Overlay($overlay)}",
    },
    {
        name: "BorderRadius",
        effect: "Sets border radius",
        variables: "$borderRadius",
        example:
            "${({ $borderRadius }) =>\n     Mixins.BorderRadius($borderRadius)}",
    },
    {
        name: "Transition",
        effect: "Sets transition",
        variables: "$transition",
        example:
            "transition: ${({ $transition }) =>\n    Mixins.Transition($transition)}",
    },
    {
        name: "Shadow",
        effect: "Adds a shadow",
        variables: "$shadow",
        example: "box-shadow: ${({ $shadow }) =>\n     Mixins.Shadow($shadow)}",
    },
    {
        name: "BoxShadow",
        effect: "Adds a box-shadow, either for all states, or different for default, hover and active",
        variables: "$boxShadow",
        example: "${({ $boxShadow }) =>\n    Mixins.BoxShadow($boxShadow)}",
    },
    {
        name: "FontSize",
        effect: "Returns a font size from the lib",
        variables: "$fontSize",
        example:
            "font-size:\n    ${({ $fontSize }) =>\n         Mixins.FontSize($fontSize)}",
    },
    {
        name: "FontWeight",
        effect: "Returns a font weight from the library",
        variables: "$fontWeight",
        example:
            "font-weight:\n     ${({ $fontWeight }) =>\n        Mixins.FontWeight($fontWeight)}",
    },
    {
        name: "Spacers",
        effect: "Returns a spacer from the library",
        variables: "$spacer",
        example: "gap: ${({ $gap }) =>\n     Mixins.Spacers($gap)}",
    },
    {
        name: "HideScrollbar",
        effect: "Hides scrollbars on element",
        variables: "-",
        example: "${Mixins.HideScrollbar}",
    },
    {
        name: "StretchTags",
        effect: 'Adds "align-self: stretch" to all elements which should take the full width of Wrapper / Main / Aside components',
        variables: "-",
        example: "${Mixins.StretchTags}",
    },
    {
        name: "Padding",
        effect: "Adds paddings on element",
        variables: "$padding",
        example: "${({ $padding  }) =>\n     Mixins.Padding($padding)}",
    },
    {
        name: "Margin",
        effect: "Adds margins on element",
        variables: "$margin",
        example: "${({ $margin  }) =>\n     Mixins.Margin($margin)}",
    },
    {
        name: "Grid",
        effect: "Adds a CSS grid",
        variables:
            "$inline, $col, $gap, $columnGap, $rowGap, $justifyItems, $alignItems, $justifyContent, $alignContent",
        example:
            "${({ $col, $gap }) => Mixins.Grid({ \n     $col, \n     $gap \n})}",
    },
    {
        name: "Flexbox",
        effect: "Adds a CSS flexbox",
        variables:
            "$inline, $flexDirection, $flexWrap, $justifyContent, $alignItems, $justifyItems, $alignContent, $gap, $columnGap, $rowGap",
        example:
            "${({ $flexDirection, $flexWrap }) => Mixins.Flexbox({\n    $flexDirection,\n    $flexWrap,\n})}",
    },
    {
        name: "Border",
        effect: "Adds a border",
        variables: "$border",
        example: "${({ $border }) =>\n     Mixins.Border($border)}",
    },
    {
        name: "Outline",
        effect: "Adds an outline",
        variables: "$outline",
        example: "${({ $outline }) =>\n     Mixins.Outline($outline)}",
    },
    {
        name: "BackgroundImage",
        effect: "Adds background-image to element",
        variables: "img, clip, origin , position, repeat, size",
        example: "${({ $outline }) =>\n     Mixins.Outline($outline)}",
    },

    {
        name: "Position",
        effect: "Adds position to element",
        variables: "$position, $left, $top, $right, $bottom, $zIndex",
        example:
            "${({ $position, $top }) => Mixins.Position({\n    $position,\n    $top\n})}",
    },
]
