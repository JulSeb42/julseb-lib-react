export const BwFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-bw"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#00cbff" d="M0 0h640v480H0z" />
				<path fill="#fff" d="M0 160h640v160H0z" />
				<path d="M0 186h640v108H0z" />
			</g>
		</svg>
	)
}
