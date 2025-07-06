import { Link } from "react-router-dom"
import { Text } from "../.."

export const Paragraphs = () => {
	return (
		<div className="flex flex-col items-stretch">
			<Text tag="p">Paragraph</Text>

			<Text tag="p">
				Paragraph <Text tag="strong">strong</Text>
			</Text>
			<Text tag="p">
				Paragraph <Text tag="em">italic</Text>
			</Text>
			<Text tag="p" linkColor="danger">
				Paragraph with <Link to="#">link</Link>
			</Text>
			<Text tag="p" className="className" linkColor="warning">
				Paragraph with <button>button</button>
			</Text>
			<Text tag="p">
				Paragraph <code>code</code>
			</Text>
		</div>
	)
}
