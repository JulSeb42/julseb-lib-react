export const SsFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ss"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#078930" d="M0 336h640v144H0z" />
			<path fill="#fff" d="M0 144h640v192H0z" />
			<path d="M0 0h640v144H0z" />
			<path fill="#da121a" d="M0 168h640v144H0z" />
			<path fill="#0f47af" d="m0 0 415.7 240L0 480z" />
			<path
				fill="#fcdd09"
				d="M200.7 194.8 61.7 240l139 45.1L114.9 167v146z"
			/>
		</svg>
	)
}
