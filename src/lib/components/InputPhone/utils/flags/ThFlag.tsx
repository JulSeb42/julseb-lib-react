export const ThFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-th"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#f4f5f8" d="M0 0h640v480H0z" />
				<path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
				<path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
			</g>
		</svg>
	)
}
