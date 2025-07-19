export const PwFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-pw"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M-70.3 0h640v480h-640z" />
				</clipPath>
			</defs>
			<g
				fillRule="evenodd"
				strokeWidth="1pt"
				clipPath="url(#a)"
				transform="translate(70.3)"
			>
				<path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z" />
				<path
					fill="#ffde00"
					d="M335.6 232.1a135.9 130.1 0 1 1-271.7 0 135.9 130.1 0 1 1 271.7 0z"
				/>
			</g>
		</svg>
	)
}
