export const McFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-mc"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#f31830" d="M0 0h640v240H0z" />
				<path fill="#fff" d="M0 240h640v240H0z" />
			</g>
		</svg>
	)
}
