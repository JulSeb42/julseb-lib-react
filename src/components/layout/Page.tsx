import { Helmet, HelmetData } from "react-helmet-async"
import { SITE_DATA } from "../../data"
import { Nav } from "./Nav"

const helmetData = new HelmetData({})

export const Page: FC<IPage> = ({ title, children }) => {
	return (
		<>
			<Helmet helmetData={helmetData}>
				<title>{`${title} | ${SITE_DATA.NAME}`}</title>
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<link rel="icon" href={SITE_DATA.FAVICON} />
			</Helmet>

			<Nav />

			<div className="w-[calc(100%-250px)] relative left-[250px] flex justify-center">
				<main className="w-full max-w-[800px] flex flex-col items-stretch gap-6 py-12">
					{children}
				</main>
			</div>
		</>
	)
}

interface IPage {
	title: string
	children?: Children
}
