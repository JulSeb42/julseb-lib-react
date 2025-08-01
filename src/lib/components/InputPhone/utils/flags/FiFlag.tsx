export const FiFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-fi"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fff" d="M0 0h640v480H0z" />
			<path fill="#002f6c" d="M0 174.5h640v131H0z" />
			<path fill="#002f6c" d="M175.5 0h130.9v480h-131z" />
		</svg>
	)
}
