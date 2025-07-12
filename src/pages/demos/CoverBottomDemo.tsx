import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export const CoverBottomDemo = () => {
	return (
		<CoverLayout title="Cover Bottom">
			<Cover
				img="/images/cover-img.avif"
				alt="Cover"
				alignItems="end"
				justifyContent="start"
				className="text-white"
			>
				<Text tag="h1" display>
					Title
				</Text>

				<Text tag="h2" display>
					Subtitle
				</Text>
			</Cover>
		</CoverLayout>
	)
}
