export const MlFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ml"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="red" d="M425.8 0H640v480H425.7z" />
				<path fill="#009a00" d="M0 0h212.9v480H0z" />
				<path fill="#ff0" d="M212.9 0h214v480h-214z" />
			</g>
		</svg>
	)
}
