export const NgFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ng"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#fff" d="M0 0h640v480H0z" />
				<path
					fill="#008753"
					d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z"
				/>
			</g>
		</svg>
	)
}
