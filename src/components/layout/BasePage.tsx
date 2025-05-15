import { Helmet, HelmetData } from "react-helmet-async"
import { SITE_DATA } from "../../data"

const helmetData = new HelmetData({})

export const BasePage: FC<IBasePage> = ({ title, children }) => {
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

			{children}
		</>
	)
}

export interface IBasePage {
	title: string
	children?: Children
}
