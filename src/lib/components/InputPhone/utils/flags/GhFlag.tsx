export const GhFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-gh"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#006b3f" d="M0 0h640v480H0z" />
			<path fill="#fcd116" d="M0 0h640v320H0z" />
			<path fill="#ce1126" d="M0 0h640v160H0z" />
			<path d="m320 160 52 160-136.1-98.9H404L268 320z" />
		</svg>
	)
}
