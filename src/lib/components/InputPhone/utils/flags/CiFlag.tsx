export const CiFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ci"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#00cd00" d="M426.8 0H640v480H426.8z" />
				<path fill="#ff9a00" d="M0 0h212.9v480H0z" />
				<path fill="#fff" d="M212.9 0h214v480h-214z" />
			</g>
		</svg>
	)
}
