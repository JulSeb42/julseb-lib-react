export const AmFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-am"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#d90012" d="M0 0h640v160H0z" />
			<path fill="#0033a0" d="M0 160h640v160H0z" />
			<path fill="#f2a800" d="M0 320h640v160H0z" />
		</svg>
	)
}
