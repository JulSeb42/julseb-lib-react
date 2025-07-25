export const GdFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-gd"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<g id="c">
					<g id="b">
						<path
							id="a"
							fill="#fcd116"
							d="M0-1v1h.5"
							transform="rotate(18 0 -1)"
						/>
						<use xlinkHref="#a" transform="scale(-1 1)" />
					</g>
					<use xlinkHref="#b" transform="rotate(72)" />
					<use xlinkHref="#b" transform="rotate(144)" />
					<use xlinkHref="#b" transform="rotate(216)" />
					<use xlinkHref="#b" transform="rotate(288)" />
				</g>
			</defs>
			<path fill="#ce1126" d="M0 0h640v480H0z" />
			<path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
			<path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
			<circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126" />
			<use
				xlinkHref="#c"
				width="100%"
				height="100%"
				transform="matrix(52.8 0 0 52.8 320 240)"
			/>
			<use
				xlinkHref="#d"
				width="100%"
				height="100%"
				x="-100"
				transform="translate(-30.3)"
			/>
			<use
				xlinkHref="#c"
				id="d"
				width="100%"
				height="100%"
				transform="matrix(31.2 0 0 31.2 320 33.6)"
			/>
			<use
				xlinkHref="#d"
				width="100%"
				height="100%"
				x="100"
				transform="translate(30.3)"
			/>
			<path
				fill="#ce1126"
				d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z"
			/>
			<path
				fill="#fcd116"
				d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
			/>
			<use
				xlinkHref="#d"
				width="100%"
				height="100%"
				x="-100"
				transform="translate(-30.3 414.6)"
			/>
			<use
				xlinkHref="#c"
				width="100%"
				height="100%"
				transform="matrix(31.2 0 0 31.2 320 448.2)"
			/>
			<use
				xlinkHref="#d"
				width="100%"
				height="100%"
				x="100"
				transform="translate(30.3 414.6)"
			/>
		</svg>
	)
}
