export const GyFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-gy"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#399408" d="M2.4 0H640v480H2.4z" />
				<path
					fill="#fff"
					d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8.2 0z"
				/>
				<path
					fill="#ffde08"
					d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"
				/>
				<path d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477V.8z" />
				<path
					fill="#de2110"
					d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"
				/>
			</g>
		</svg>
	)
}
