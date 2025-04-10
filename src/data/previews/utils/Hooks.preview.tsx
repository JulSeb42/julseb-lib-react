import {
    PreviewUseClickOutside,
    PreviewUseCopyToClipboard,
    PreviewUseDebounce,
    PreviewUseExportData,
    PreviewUseFetch,
    PreviewUseForm,
    PreviewUseIsOverflow,
    PreviewUseKeyPress,
    PreviewUseMaxWidth,
    PreviewUseMergeRefs,
    PreviewUseMinWidth,
    PreviewUsePaginatedData,
    PreviewUsePagination,
    PreviewUseTouchScreen,
    PreviewUseTranslation,
} from "./hooks"
import type { ComponentPreview } from "../../components"

export const hooksPreview: ComponentPreview<null> = {
    name: "Hooks",
    category: "helpers",
    component: null,
    import: null,
    additionalImports: [
        "useClickOutside",
        "useCopyToClipboard",
        "useDebounce",
        "useExportData",
        "useFetch",
        "useForm",
        "useIsOverflow",
        "useKeyPress",
        "useMaxWidth",
        "useMergeRefs",
        "useMinWidth",
        "usePaginatedData",
        "usePagination",
        "useTouchScreen",
        "useTranslation",
    ],
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [
        { previewTitle: "useClickOutside", demo: <PreviewUseClickOutside /> },
        {
            previewTitle: "useCopyToClipboard",
            demo: <PreviewUseCopyToClipboard />,
        },
        { previewTitle: "useDebounce", demo: <PreviewUseDebounce /> },
        { previewTitle: "useExportData", demo: <PreviewUseExportData /> },
        { previewTitle: "useFetch", demo: <PreviewUseFetch /> },
        { previewTitle: "useForm", demo: <PreviewUseForm /> },
        { previewTitle: "useIsOverflow", demo: <PreviewUseIsOverflow /> },
        { previewTitle: "useKeyPress", demo: <PreviewUseKeyPress /> },
        { previewTitle: "useMaxWidth", demo: <PreviewUseMaxWidth /> },
        { previewTitle: "useMergeRefs", demo: <PreviewUseMergeRefs /> },
        { previewTitle: "useMinWidth", demo: <PreviewUseMinWidth /> },
        { previewTitle: "usePaginatedData", demo: <PreviewUsePaginatedData /> },
        { previewTitle: "usePagination", demo: <PreviewUsePagination /> },
        { previewTitle: "useTouchScreen", demo: <PreviewUseTouchScreen /> },
        { previewTitle: "useTranslation", demo: <PreviewUseTranslation /> },
    ],
}
