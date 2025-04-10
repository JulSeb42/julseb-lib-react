import { Fade, generateNumbers, Text } from "../../../"
import type { ILibFade } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ullamcorper risus. Sed porttitor dolor eget leo accumsan ultricies. Morbi feugiat libero a mi sollicitudin, et varius eros porttitor. Aliquam ac elementum erat, interdum cursus tortor. Maecenas faucibus mollis nisl. Integer vel justo leo. Donec ac magna vel est blandit tristique. Cras nec mauris dictum elit blandit pellentesque sed vel sem. Nam ullamcorper malesuada orci, ac cursus mi convallis at. Donec aliquet pharetra velit, non suscipit elit consectetur vitae. Praesent suscipit, mi a interdum maximus, tellus metus feugiat urna, sed semper felis enim sed magna. Donec vestibulum commodo sapien quis lobortis. Maecenas et venenatis elit. Sed sed porttitor ante. Curabitur eu orci tristique, tristique justo eu, tempus elit."

export const fadePreview: ComponentPreview<ILibFade> = {
    name: "Fade",
    component: Fade,
    category: "components",
    import: "Fade",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibFade",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            demo: (
                <>
                    {generateNumbers(0, 10).map(i => (
                        <Fade
                            key={i}
                            data-testid="testid"
                            className="className"
                        >
                            <Text>{text}</Text>
                        </Fade>
                    ))}
                </>
            ),
        },
    ],
}
