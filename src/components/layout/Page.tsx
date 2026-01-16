import { useState } from "react"
import { BasePage } from "./BasePage"
import { Nav } from "./Nav"
import { Text, clsx } from "../../lib"

export const Page: FC<IPage> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<BasePage title={title}>
			<Nav isOpen={isOpen} setIsOpen={setIsOpen} />

			<div
				className={clsx(
					"md:left-[250px] relative flex justify-center px-[5%] md:w-[calc(100%-250px)]",
					// isOpen ? "left-[250px]" : "left-0",
				)}
			>
				<main className="flex flex-col items-stretch gap-6 py-12 w-full max-w-[800px]">
					<Text tag="h1">{title}</Text>

					{children}
				</main>
			</div>
		</BasePage>
	)
}

interface IPage {
	title: string
	children?: Children
}
