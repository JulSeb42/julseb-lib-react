export const CwFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-cw"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M0 0h682.7v512H0z" />
				</clipPath>
				<path
					id="b"
					d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z"
				/>
			</defs>
			<g clipPath="url(#a)" transform="scale(.94)">
				<path fill="#002b7f" d="M0 0h768v512H0z" />
				<path fill="#f9e814" d="M0 320h768v64H0z" />
				<use
					xlinkHref="#b"
					width="13500"
					height="9000"
					x="2"
					y="2"
					fill="#fff"
					transform="scale(42.67)"
				/>
				<use
					xlinkHref="#b"
					width="13500"
					height="9000"
					x="3"
					y="3"
					fill="#fff"
					transform="scale(56.9)"
				/>
			</g>
		</svg>
	)
}
