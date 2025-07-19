export const MuFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-mu"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#00a04d" d="M0 360h640v120H0z" />
				<path fill="#151f6d" d="M0 120h640v120H0z" />
				<path fill="#ee2737" d="M0 0h640v120H0z" />
				<path fill="#ffcd00" d="M0 240h640v120H0z" />
			</g>
		</svg>
	)
}
