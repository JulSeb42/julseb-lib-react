export const IdFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-id"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#e70011" d="M0 0h640v240H0Z" />
			<path fill="#fff" d="M0 240h640v240H0Z" />
		</svg>
	)
}
