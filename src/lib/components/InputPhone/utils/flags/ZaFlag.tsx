export const ZaFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-za"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M-71.9 0h682.7v512H-71.9z" />
				</clipPath>
			</defs>
			<g clipPath="url(#a)" transform="translate(67.4) scale(.93748)">
				<g fillRule="evenodd" strokeWidth="1pt">
					<path d="M-71.9 407.8V104.4L154 256.1-72 407.8z" />
					<path
						fill="#00c"
						d="m82.2 512.1 253.6-170.6H696V512H82.2z"
					/>
					<path fill="red" d="M66 0h630v170.8H335.7S69.3-1.7 66 0z" />
					<path
						fill="#fc0"
						d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192L-72 64z"
					/>
					<path
						fill="#093"
						d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"
					/>
					<path
						fill="#fff"
						d="M23 0h59.2l253.6 170.7H696V204H324.3L23 .1zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"
					/>
				</g>
			</g>
		</svg>
	)
}
