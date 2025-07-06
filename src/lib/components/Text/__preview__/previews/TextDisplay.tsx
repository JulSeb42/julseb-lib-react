import { Text } from "../.."

export const TextDisplay = () => {
	return (
		<div className="flex flex-col items-stretch">
			<Text tag="h1" display>
				Title h1 display
			</Text>

			<Text tag="h2" display>
				Title h2 display
			</Text>

			<Text tag="h3" display>
				Title h3 display
			</Text>

			<Text tag="h4" display>
				Title h4 display
			</Text>

			<Text tag="h5" display>
				Title h5 display
			</Text>
		</div>
	)
}
