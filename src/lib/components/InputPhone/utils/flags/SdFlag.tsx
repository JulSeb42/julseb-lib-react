export const SdFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-sd"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M0 0h682.7v512H0z" />
				</clipPath>
			</defs>
			<g
				fillRule="evenodd"
				strokeWidth="1pt"
				clipPath="url(#a)"
				transform="scale(.9375)"
			>
				<path d="M0 341.3h1024V512H0z" />
				<path fill="#fff" d="M0 170.6h1024v170.7H0z" />
				<path fill="red" d="M0 0h1024.8v170.7H0z" />
				<path fill="#009a00" d="M0 0v512l341.3-256L0 0z" />
			</g>
		</svg>
	)
}
