export const LvFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-lv"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#fff" d="M0 0h640v480H0z" />
				<path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z" />
			</g>
		</svg>
	)
}
