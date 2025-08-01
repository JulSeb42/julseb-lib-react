export const TtFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-tt"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fff" d="M0 0h640v480H0z" />
			<path
				fill="#e00000"
				fillRule="evenodd"
				d="M463.7 480 0 1v478.8l463.7.2zM176.3 0 640 479V.2L176.3 0z"
			/>
			<path
				fillRule="evenodd"
				d="M27.7.2h118.6l468.2 479.3H492.2L27.7.2z"
			/>
		</svg>
	)
}
