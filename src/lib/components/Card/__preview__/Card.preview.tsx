/*=============================================== CardPreview ===============================================*/

import { getRandomAvatar } from "@julseb-lib/utils"
import { Card, Text, Button, Image, Avatar } from "../../../"
import type { ILibCard } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const cardPreview: ComponentPreview<ILibCard> = {
    name: "Card",
    component: Card,
    category: "components",
    import: "Card",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibCard",
    additionalTypeImports: null,
    extends: ["HTMLDivElement", "LibButtonLinkBlank", "ILibFlexbox"],
    previews: [
        {
            previewTitle: "User card",
            props: {
                // border={{ width: 1 }}
                // gap="xs"
                // alignItems="center"
                // justifyContent="center"
                // flexDirection="column"
                // padding="xs"
                // borderRadius="m"
                border: { width: 1 },
                gap: "xs",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "xs",
                borderRadius: "m",
                to: "/",
                children: (
                    <>
                        <Avatar img={getRandomAvatar("male")} size={48} />
                        <Text tag="strong">Julien</Text>
                    </>
                ),
            },
        },
        {
            previewTitle: "Basic",
            props: {
                border: { width: 1 },
                borderRadius: "m",
                padding: "s",
                children: <Text tag="h4">Hello World</Text>,
                "data-testid": "testid",
                className: "className",
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
                "data-testid": "testid",
                className: "className",
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
                "data-testid": "testid",
                className: "className",
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
                "data-testid": "testid",
                className: "className",
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
