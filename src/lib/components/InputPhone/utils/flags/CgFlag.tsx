export const CgFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-cg"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M-79.5 32h640v480h-640z" />
				</clipPath>
			</defs>
			<g
				fillRule="evenodd"
				strokeWidth="1pt"
				clipPath="url(#a)"
				transform="translate(79.5 -32)"
			>
				<path fill="#ff0" d="M-119.5 32h720v480h-720z" />
				<path fill="#00ca00" d="M-119.5 32v480l480-480h-480z" />
				<path fill="red" d="M120.5 512h480V32l-480 480z" />
			</g>
		</svg>
	)
}
