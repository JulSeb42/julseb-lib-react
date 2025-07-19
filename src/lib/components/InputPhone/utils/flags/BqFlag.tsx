export const BqFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-bq"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#21468b" d="M0 0h640v480H0z" />
			<path fill="#fff" d="M0 0h640v320H0z" />
			<path fill="#ae1c28" d="M0 0h640v160H0z" />
		</svg>
	)
}
