export const CzFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-cz"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fff" d="M0 0h640v240H0z" />
			<path fill="#d7141a" d="M0 240h640v240H0z" />
			<path fill="#11457e" d="M360 240 0 0v480z" />
		</svg>
	)
}
