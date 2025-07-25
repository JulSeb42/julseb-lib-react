export const SoFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-so"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
				</clipPath>
			</defs>
			<g
				fillRule="evenodd"
				clipPath="url(#a)"
				transform="translate(80) scale(.9375)"
			>
				<path fill="#40a6ff" d="M-128 0h768v512h-768z" />
				<path
					fill="#fff"
					d="M336.5 381.2 254 327.7l-82.1 54 30.5-87.7-82-54.2L222 239l31.4-87.5 32.1 87.3 101.4.1-81.5 54.7 31.2 87.6z"
				/>
			</g>
		</svg>
	)
}
