export const MmFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-mm"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fecb00" d="M0 0h640v480H0z" />
			<path fill="#34b233" d="M0 160h640v320H0z" />
			<path fill="#ea2839" d="M0 320h640v160H0z" />
			<g transform="translate(320 256.9) scale(176.87999)">
				<path id="a" fill="#fff" d="m0-1 .3 1h-.6z" />
				<use
					xlinkHref="#a"
					width="100%"
					height="100%"
					transform="rotate(-144)"
				/>
				<use
					xlinkHref="#a"
					width="100%"
					height="100%"
					transform="rotate(-72)"
				/>
				<use
					xlinkHref="#a"
					width="100%"
					height="100%"
					transform="rotate(72)"
				/>
				<use
					xlinkHref="#a"
					width="100%"
					height="100%"
					transform="rotate(144)"
				/>
			</g>
		</svg>
	)
}
