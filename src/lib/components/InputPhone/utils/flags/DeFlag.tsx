export const DeFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-de"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#ffce00" d="M0 320h640v160H0z" />
			<path d="M0 0h640v160H0z" />
			<path fill="#d00" d="M0 160h640v160H0z" />
		</svg>
	)
}
