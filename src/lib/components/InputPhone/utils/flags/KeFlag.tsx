export const KeFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-ke"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<path
					id="a"
					strokeMiterlimit="10"
					d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
				/>
			</defs>
			<path fill="#fff" d="M0 0h640v480H0z" />
			<path d="M0 0h640v144H0z" />
			<path fill="#060" d="M0 336h640v144H0z" />
			<g id="b" transform="matrix(3 0 0 3 320 240)">
				<use xlinkHref="#a" width="100%" height="100%" stroke="#000" />
				<use xlinkHref="#a" width="100%" height="100%" fill="#fff" />
			</g>
			<use
				xlinkHref="#b"
				width="100%"
				height="100%"
				transform="matrix(-1 0 0 1 640 0)"
			/>
			<path
				fill="#b00"
				d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
			/>
			<path
				id="c"
				d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
			/>
			<use
				xlinkHref="#c"
				width="100%"
				height="100%"
				transform="matrix(-1 0 0 1 640 0)"
			/>
			<g fill="#fff" transform="matrix(3 0 0 3 320 240)">
				<ellipse rx="4" ry="6" />
				<path id="d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
				<use
					xlinkHref="#d"
					width="100%"
					height="100%"
					transform="scale(-1)"
				/>
				<use
					xlinkHref="#d"
					width="100%"
					height="100%"
					transform="scale(-1 1)"
				/>
				<use
					xlinkHref="#d"
					width="100%"
					height="100%"
					transform="scale(1 -1)"
				/>
			</g>
		</svg>
	)
}
