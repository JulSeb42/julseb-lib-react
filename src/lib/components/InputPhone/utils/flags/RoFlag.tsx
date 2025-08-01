export const RoFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ro"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#00319c" d="M0 0h213.3v480H0z" />
				<path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
				<path fill="#de2110" d="M426.7 0H640v480H426.7z" />
			</g>
		</svg>
	)
}
