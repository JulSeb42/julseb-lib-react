/*=============================================== CardPreview ===============================================*/

import { Card, Text, Button, Image } from "../../../"
import type {} from "../../../types"
import type { ILibCard } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const cardPreview: ComponentPreview<ILibCard> = {
    name: "Card",
    component: Card,
    category: "components",
    import: "Card",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibCard",
    additionalTypeImports: [],
    extends: ["HTMLDivElement", "LibButtonLinkBlank", "ILibFlexbox"],
    previews: [
        {
            previewTitle: "Basic",
            props: {
                border: { width: 1 },
                borderRadius: "m",
                padding: "s",
                children: <Text tag="h4">Hello World</Text>,
            },
        },
        {
            previewTitle: "With background image & onClick",
            props: {
                border: { style: "dashed" },
                borderRadius: "l",
                padding: "xs",
                onClick: () => alert("Hello"),
                cursor: "pointer",
                backgroundImg: { img: "/images/image-card.jpg" },
                children: <Text tag="h4">Hello World</Text>,
                textColor: "white",
            },
        },
        {
            previewTitle: "As Link",
            props: {
                to: "/",
                borderRadius: "xxl",
                padding: { topBottom: "xxl", leftRight: "xs" },
                border: { width: 4 },
                children: <Text>To</Text>,
            },
        },
        {
            previewTitle: "Action Card",
            props: {
                padding: 0,
                border: { color: "gray-100" },
                width: 400,
                shadow: "xs",
                flexDirection: "column",
                borderRadius: "m",
                children: (
                    <>
                        <Image
                            src="https://images.unsplash.com/photo-1644722126641-d01298483d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                            alt="Img"
                            height={150}
                            fit="cover"
                        />

                        <Card
                            flexDirection="column"
                            alignItems="stretch"
                            width="100%"
                            padding="xs"
                        >
                            <Text tag="h4">Title</Text>

                            <Text>Hello</Text>

                            <Card justifyContent="flex-end">
                                <Button>Button</Button>
                            </Card>
                        </Card>
                    </>
                ),
            },
        },
    ],
}
