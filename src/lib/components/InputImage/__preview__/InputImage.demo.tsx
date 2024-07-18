/*=============================================== InputImageDemo ===============================================*/

import { useState, type ChangeEvent } from "react"
import { InputImage } from "../../../"

export function InputImageDemo() {
    const [image, setImage] = useState("")

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const uploadData = new FormData()

        uploadData.append("imageUrl", e.target.files ? e.target.files[0] : "")

        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0] as any)
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setImage(reader.result as string)
            })

            return reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <InputImage
            id="image"
            value={image}
            label="Input image"
            onChange={e => handleImage(e)}
            icons={{ empty: "user" }}
            iconSizes={{ empty: 120, hover: 100 }}
            width="100%"
            height={180}
            data-testid="testid"
        />
    )
}

export function InputImageDemoWithValidation() {
    const [image, setImage] = useState("")

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const uploadData = new FormData()

        uploadData.append("imageUrl", e.target.files ? e.target.files[0] : "")

        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0] as any)
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setImage(reader.result as string)
            })

            return reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <InputImage
            id="image2"
            value={image}
            label="Input image validation"
            onChange={e => handleImage(e)}
            validation={{
                status: false,
                message: "Validation not passed",
            }}
        />
    )
}

export function InputImageDemoDisabled() {
    return (
        <InputImage
            id="image-disabled"
            value=""
            label="Input image disabled"
            disabled
        />
    )
}
