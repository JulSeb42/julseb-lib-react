export const LuFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-lu"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#00a1de" d="M0 240h640v240H0z" />
			<path fill="#ed2939" d="M0 0h640v240H0z" />
			<path fill="#fff" d="M0 160h640v160H0z" />
		</svg>
	)
}
