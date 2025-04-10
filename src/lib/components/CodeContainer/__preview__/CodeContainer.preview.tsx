import { CodeContainer } from "../../../"
import type { ILibCodeContainer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const code =
    "const Modal = styled.div`\n\topacity: 0;\n\tvisibility: hidden;\n\n\t&.Open {\n\t\topacity: 0;\n\t\tvisibility: visible;\n\t}\n`\n\nconst [isOpen, setIsOpen] = useState(false)\n\nreturn (\n\t<>\n\t\t<Button onClick={() => setIsOpen(!isOpen)}>Open modal</Button>\n\t\t<Modal className={classNames({ Open: isOpen })}>\n\t\t\t...\n\t\t</Modal>\n\t</>\n)"

export const codeContainerPreview: ComponentPreview<ILibCodeContainer> = {
    name: "CodeContainer",
    component: CodeContainer,
    category: "components",
    import: "CodeContainer",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibCodeContainer",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            props: {
                highlighterProps: { language: "typescript" },
                children: code,
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}
