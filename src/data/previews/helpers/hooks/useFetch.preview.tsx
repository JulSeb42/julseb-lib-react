import { Fragment } from "react/jsx-runtime"
import axios, { type AxiosResponse } from "axios"
import { useFetch, Flexbox, Loader, Text, Image } from "../../../../lib"

export const PreviewUseFetch = () => {
	const { response, error, loading } = useFetch<AxiosResponse>(
		axios.get("https://dog.ceo/api/breeds/image/random"),
	)

	return (
		<Fragment>
			{loading ? (
				<Flexbox
					alignItems="center"
					justifyContent="center"
					className="p-3"
				>
					<Loader variant={3} />
				</Flexbox>
			) : error ? (
				<Text>{error.message}</Text>
			) : (
				response && (
					<Image src={response.data.message} alt="Random dog" />
				)
			)}
		</Fragment>
	)
}
