export const SjFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-sj"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#ef2b2d" d="M0 0h640v480H0z" />
			<path fill="#fff" d="M180 0h120v480H180z" />
			<path fill="#fff" d="M0 180h640v120H0z" />
			<path fill="#002868" d="M210 0h60v480h-60z" />
			<path fill="#002868" d="M0 210h640v60H0z" />
		</svg>
	)
}
