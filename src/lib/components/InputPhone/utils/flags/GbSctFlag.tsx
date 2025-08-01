export const GbSctFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-gb-sct"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#0065bd" d="M0 0h640v480H0z" />
			<path
				stroke="#fff"
				strokeWidth=".6"
				d="m0 0 5 3M0 3l5-3"
				transform="scale(128 160)"
			/>
		</svg>
	)
}
