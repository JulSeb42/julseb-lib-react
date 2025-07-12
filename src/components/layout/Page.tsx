import { BasePage } from "./BasePage"
import { Nav } from "./Nav"
import { Text } from "../../lib"

export const Page: FC<IPage> = ({ title, children }) => {
	return (
		<BasePage title={title}>
			<Nav />

			<div className="left-[250px] relative flex justify-center w-[calc(100%-250px)]">
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
