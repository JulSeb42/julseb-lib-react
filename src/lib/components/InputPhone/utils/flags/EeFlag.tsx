export const EeFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ee"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<rect width="640" height="477.9" rx="0" ry="0" />
				<rect
					width="640"
					height="159.3"
					y="320.7"
					fill="#fff"
					rx="0"
					ry="0"
				/>
				<path fill="#1791ff" d="M0 0h640v159.3H0z" />
			</g>
		</svg>
	)
}
