export const GgFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			id="flag-gg"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fff" d="M0 0h640v480H0z" />
			<path fill="#e8112d" d="M256 0h128v480H256z" />
			<path fill="#e8112d" d="M0 176h640v128H0z" />
			<path
				id="a"
				fill="#f9dd16"
				d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
			/>
			<use
				xlinkHref="#a"
				width="36"
				height="24"
				transform="rotate(90 320 240)"
			/>
			<use
				xlinkHref="#a"
				width="36"
				height="24"
				transform="rotate(-90 320 240)"
			/>
			<use
				xlinkHref="#a"
				width="36"
				height="24"
				transform="rotate(180 320 240)"
			/>
		</svg>
	)
}
