export const EsCtFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-es-ct"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fcdd09" d="M0 0h640v480H0z" />
			<path
				stroke="#da121a"
				strokeWidth="60"
				d="M0 90h810m0 120H0m0 120h810m0 120H0"
				transform="scale(.79012 .88889)"
			/>
		</svg>
	)
}
