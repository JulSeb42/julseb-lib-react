export const UyFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-uy"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fff" d="M0 0h640v480H0z" />
			<path
				fill="#0038a8"
				d="M266 53.3h374v53.4H266zm0 106.7h374v53.3H266zM0 266.7h640V320H0zm0 106.6h640v53.4H0z"
			/>
			<g
				fill="#fcd116"
				stroke="#000"
				strokeMiterlimit="20"
				strokeWidth=".6"
				transform="translate(133.3 133.3) scale(2.93333)"
			>
				<g id="c">
					<g id="b">
						<g id="a">
							<path
								strokeLinecap="square"
								d="M1.5 9 6 12c-8 13 1 15-6 21 3-7-3-5-3-17"
								transform="rotate(22.5)"
							/>
							<path
								fill="none"
								d="M0 11c-2 13 4.5 17 0 22"
								transform="rotate(22.5)"
							/>
							<path d="M0 0h6L0 33-6 0h6v33" />
						</g>
						<use
							xlinkHref="#a"
							width="100%"
							height="100%"
							transform="rotate(45)"
						/>
					</g>
					<use
						xlinkHref="#b"
						width="100%"
						height="100%"
						transform="rotate(90)"
					/>
				</g>
				<use
					xlinkHref="#c"
					width="100%"
					height="100%"
					transform="scale(-1)"
				/>
				<circle r="11" />
			</g>
			<g transform="translate(133.3 133.3) scale(.29333)">
				<g id="d">
					<path d="M81-44c-7 8-11-6-36-6S16-35 12-38s21-21 29-22 31 7 40 16m-29 9c7 6 1 19-6 19S26-28 32-36" />
					<path d="M19-26c1-12 11-14 27-14s23 12 29 15c-7 0-13-10-29-10s-16 0-27 10m3 2c4-6 9 6 20 6s17-3 24-8-10 12-21 12-26-6-23-10" />
					<path d="M56-17c13-7 5-17 0-19 2 2 10 12 0 19M0 43c6 0 8-2 16-2s27 11 38 7c-23 9-14 3-54 3h-5m63 6c-4-7-3-5-11-16 8 6 10 9 11 16M0 67c25 0 21-5 54-19-24 3-29 11-54 11h-5m5-29c7 0 9-5 17-5s19 3 24 7c1 1-3-8-11-9S25 9 16 7c0 4 3 3 4 9 0 5-9 5-11 0 2 8-4 8-9 8" />
				</g>
				<use
					xlinkHref="#d"
					width="100%"
					height="100%"
					transform="scale(-1 1)"
				/>
				<path d="M0 76c-5 0-18 3 0 3s5-3 0-3" />
			</g>
		</svg>
	)
}
