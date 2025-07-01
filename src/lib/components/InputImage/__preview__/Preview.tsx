import { useState, type ChangeEvent } from "react"
import { InputImage } from "../InputImage"
import type { ILibInputImage } from "../types"

export const Preview = (props: Omit<ILibInputImage, "value">) => {
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
		<InputImage {...props} value={image} onChange={e => handleImage(e)} />
	)
}
