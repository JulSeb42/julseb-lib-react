export const ClFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-cl"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M0 0h682.7v512H0z" />
				</clipPath>
			</defs>
			<g fillRule="evenodd" clipPath="url(#a)" transform="scale(.9375)">
				<path fill="#fff" d="M256 0h512v256H256z" />
				<path fill="#0039a6" d="M0 0h256v256H0z" />
				<path
					fill="#fff"
					d="M167.8 191.7 128.2 162l-39.5 30 14.7-48.8L64 113.1l48.7-.5L127.8 64l15.5 48.5 48.7.1-39.2 30.4 15 48.7z"
				/>
				<path fill="#d52b1e" d="M0 256h768v256H0z" />
			</g>
		</svg>
	)
}
