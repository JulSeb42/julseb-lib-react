export const TdFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-td"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#000067" d="M0 0h214v480H0z" />
				<path fill="red" d="M426 0h214v480H426z" />
				<path fill="#ff0" d="M214 0h212v480H214z" />
			</g>
		</svg>
	)
}
