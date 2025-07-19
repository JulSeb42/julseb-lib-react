export const UaFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ua"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="gold" d="M0 0h640v480H0z" />
				<path fill="#0057b8" d="M0 0h640v240H0z" />
			</g>
		</svg>
	)
}
