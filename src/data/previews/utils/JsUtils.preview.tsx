import type { ComponentPreview } from "../../components"
import { allJsUtils } from "../../utils/all-js-utils"
import { RenderPreview } from "./RenderPreview"

export const utilsPreview: ComponentPreview<null> = {
    name: "JsUtils",
    category: "helpers",
    component: null,
    import: null,
    additionalImports: [
        "calculateAverage",
        "calculateTotalSum",
        "capitalize",
        "convertDate",
        "convertDateShort",
        "convertPrice",
        "convertToEmail",
        "convertYoutube",
        "deleteDuplicates",
        "detectLanguage",
        "disableScroll",
        "enableScroll",
        "filterObject",
        "formatDate",
        "formatHour",
        "generateNumbers",
        "getFirstName",
        "getLastName",
        "getPercentage",
        "getRandom",
        "getRandomAvatar",
        "getRandomDate",
        "getRandomNumber",
        "getRandomString",
        "getRandomTime",
        "getTimeNow",
        "getToday",
        "getTomorrow",
        "getYesterday",
        "hexToRgb",
        "emailRegex",
        "passwordRegex",
        "rgbToHex",
        "scrollToTop",
        "slugify",
        "sortByFrequency",
        "stringifyPx",
        "toCamelCase",
        "toConstantCase",
        "toDotCase",
        "toKebabCase",
        "toPascalCase",
        "toPathCase",
        "toSentenceCase",
        "toSnakeCase",
        "toTitleCase",
        "unslugify",
        "uuid",
    ],
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <RenderPreview data={allJsUtils} /> }],
}
