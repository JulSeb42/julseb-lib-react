export const SlFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-sl"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#0000cd" d="M0 320.3h640V480H0z" />
				<path fill="#fff" d="M0 160.7h640v159.6H0z" />
				<path fill="#00cd00" d="M0 0h640v160.7H0z" />
			</g>
		</svg>
	)
}
