export const RwFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-rw"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#20603d" d="M0 0h640v480H0z" />
			<path fill="#fad201" d="M0 0h640v360H0z" />
			<path fill="#00a1de" d="M0 0h640v240H0z" />
			<g transform="translate(511 125.4) scale(.66667)">
				<g id="b">
					<path
						id="a"
						fill="#e5be01"
						d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
					/>
					<use
						xlinkHref="#a"
						width="100%"
						height="100%"
						transform="scale(1 -1)"
					/>
				</g>
				<use
					xlinkHref="#b"
					width="100%"
					height="100%"
					transform="scale(-1 1)"
				/>
				<circle
					r="34.3"
					fill="#e5be01"
					stroke="#00a1de"
					strokeWidth="3.4"
				/>
			</g>
		</svg>
	)
}
