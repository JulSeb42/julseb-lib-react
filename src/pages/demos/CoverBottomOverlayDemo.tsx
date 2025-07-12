import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export const CoverBottomOverlayDemo = () => {
	return (
		<CoverLayout title="Cover Bottom Overlay">
			<Cover
				img="/images/cover-img.avif"
				alt="Cover"
				alignItems="end"
				justifyContent="start"
				overlay="gradient-black"
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
