export const RuFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ru"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#fff" d="M0 0h640v480H0z" />
				<path fill="#0039a6" d="M0 160h640v320H0z" />
				<path fill="#d52b1e" d="M0 320h640v160H0z" />
			</g>
		</svg>
	)
}
