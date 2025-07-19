export const YeFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ye"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#fff" d="M0 0h640v472.8H0z" />
				<path fill="#f10600" d="M0 0h640v157.4H0z" />
				<path d="M0 322.6h640V480H0z" />
			</g>
		</svg>
	)
}
