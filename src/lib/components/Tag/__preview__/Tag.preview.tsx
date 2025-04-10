import { Tag, Flexbox } from "../../../"
import { typeValues, type LibColorsShort } from "../../../types"
import type { ILibTag } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const TagDemo = ({ ...rest }: ILibTag) => {
    const colors = Object.keys(typeValues.colorsShort) as Array<LibColorsShort>

    return (
        <Flexbox gap="xs" alignItems="flex-start">
            {colors.map(c => (
                <Tag
                    key={c}
                    backgroundColor={c}
                    {...rest}
                    data-testid="testid"
                    className="className"
                >
                    Tag
                </Tag>
            ))}
        </Flexbox>
    )
}

export const tagPreview: ComponentPreview<ILibTag> = {
    name: "Tag",
    component: Tag,
    category: "components",
    import: "Tag",
    noStretch: true,
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibTag",
    additionalTypeImports: null,
    extends: ["HTMLSpanElement"],
    previews: [
        { previewTitle: "Default", demo: <TagDemo /> },
        {
            previewTitle: "With different border radius",
            demo: (
                <TagDemo
                    borderRadius="m"
                    padding={{ leftRight: "m", topBottom: "xxs" }}
                />
            ),
        },
        {
            previewTitle: "With icons",
            props: {
                children: "Tag",
                icons: {
                    left: "chevron-right",
                    right: "close",
                },
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
