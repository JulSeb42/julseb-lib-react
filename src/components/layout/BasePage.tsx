import { SITE_DATA } from "../../data"

export const BasePage: FC<IBasePage> = ({ title, children }) => {
	return (
		<>
			<title>{`${title} | ${SITE_DATA.NAME}`}</title>
			<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
			<meta
				content="width=device-width, initial-scale=1"
				name="viewport"
			/>
			<link rel="icon" href={SITE_DATA.FAVICON} />

			{children}
		</>
	)
}

export interface IBasePage {
	title: string
	children?: Children
}
