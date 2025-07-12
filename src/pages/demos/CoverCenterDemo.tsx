import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export const CoverCenterDemo = () => {
	return (
		<CoverLayout title="Cover Center">
			<Cover
				img="/images/cover-img.avif"
				alt="Cover"
				alignItems="center"
				justifyContent="center"
				className="text-white"
			>
				<Text tag="h1" display textAlign="center">
					Title
				</Text>

				<Text tag="h2" display textAlign="center">
					Subtitle
				</Text>
			</Cover>
		</CoverLayout>
	)
}
