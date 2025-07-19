export const MgFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-mg"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#fc3d32" d="M213.3 0H640v240H213.3z" />
				<path fill="#007e3a" d="M213.3 240H640v240H213.3z" />
				<path fill="#fff" d="M0 0h213.3v480H0z" />
			</g>
		</svg>
	)
}
