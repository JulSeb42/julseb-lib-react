export const AeFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ae"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#00732f" d="M0 0h640v160H0z" />
			<path fill="#fff" d="M0 160h640v160H0z" />
			<path d="M0 320h640v160H0z" />
			<path fill="red" d="M0 0h220v480H0z" />
		</svg>
	)
}
