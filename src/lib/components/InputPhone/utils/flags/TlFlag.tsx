export const TlFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-tl"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M0 0h682.7v512H0z" />
				</clipPath>
			</defs>
			<g fillRule="evenodd" clipPath="url(#a)" transform="scale(.9375)">
				<path fill="#cb000f" d="M0 0h1031.2v512H0z" />
				<path
					fill="#f8c00c"
					d="M0 0c3.2 0 512 256.7 512 256.7L0 512V0z"
				/>
				<path d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512V0z" />
				<path
					fill="#fff"
					d="M187.7 298.2 127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"
				/>
			</g>
		</svg>
	)
}
