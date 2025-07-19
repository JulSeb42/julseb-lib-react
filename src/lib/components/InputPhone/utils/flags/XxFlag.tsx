export const XxFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-xx"
			viewBox="0 0 640 480"
			width={width}
		>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#adb5bd"
				strokeWidth="1.1"
				d="M.5.5h638.9v478.9H.5z"
			/>
			<path
				fill="none"
				stroke="#adb5bd"
				strokeWidth="1.1"
				d="m.5.5 639 479M639.5.5l-639 479"
			/>
		</svg>
	)
}
