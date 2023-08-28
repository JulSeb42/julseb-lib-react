/*=============================================== ImagePage ===============================================*/

import { Page } from "../../components"
import { Image } from "../../lib"

export function ImagePage() {
    return (
        <Page title="Image">
            <Image
                src="/images/image-card.jpg"
                alt="Image"
                borderRadius="xxl"
            />
            <Image
                src="/images/image-card.jpg"
                alt="Image"
                caption={{ text: "Caption" }}
                borderRadius="xxl"
            />

            <Image
                src="/images/image-card.jpg"
                alt="Image"
                height={300}
                fit="cover"
            />
            <Image
                src="/images/image-card.jpg"
                alt="Image"
                height={300}
                fit="cover"
                caption="Caption"
            />

            <Image
                src="/images/image-card.jpg"
                alt="Image"
                height={300}
                fit="contain"
            />
            <Image
                src="/images/image-card.jpg"
                alt="Image"
                height={300}
                fit="contain"
                caption={{
                    text: "Caption",
                    background: "white-80",
                    textColor: "secondary",
                }}
            />
        </Page>
    )
}
