import type { FC } from "react"
import { Link } from "react-router-dom"
import { Logo, LogoImg } from "./styles"
import type { ILibHeaderLogo } from "./subtypes"

export const HeaderLogo: FC<ILibHeaderLogo> = ({
	"data-testid": testid,
	className,
	logo,
	children,
	isOpen,
}) => {
	const {
		to = "/",
		href,
		img,
		imgOpen,
		alt = "Logo",
		width = 100,
		height = 30,
	} = logo as any

	if (img) {
		const imgProps = {
			"data-testid": testid && `${testid}.HeaderLogo.Img`,
			className: className && "HeaderLogoImg",
			src: imgOpen && isOpen ? imgOpen : img,
			alt,
			width,
			height,
		}

		return href ? (
			<a
				href={href}
				data-testid={testid && `${testid}.HeaderLogo`}
				className={className && "HeaderLogo"}
				role="link"
			>
				<LogoImg {...imgProps} />
			</a>
		) : (
			<Link
				data-testid={testid && `${testid}.HeaderLogo`}
				className={className && "HeaderLogo"}
				to={to}
				role="link"
			>
				<LogoImg {...imgProps} />
			</Link>
		)
	}

	return (
		<Logo
			data-testid={testid && `${testid}.HeaderLogo`}
			as={href ? "a" : Link}
			className={className && "HeaderLogo"}
			to={to}
			href={href}
			translate="no"
			role="link"
			aria-label="Header Logo"
		>
			{children}
		</Logo>
	)
}
