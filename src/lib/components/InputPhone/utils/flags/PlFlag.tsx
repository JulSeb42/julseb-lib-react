export const PlFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-pl"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#fff" d="M640 480H0V0h640z" />
				<path fill="#dc143c" d="M640 480H0V240h640z" />
			</g>
		</svg>
	)
}
