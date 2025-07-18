export const SeFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-se"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#005293" d="M0 0h640v480H0z" />
			<path
				fill="#fecb00"
				d="M176 0v192H0v96h176v192h96V288h368v-96H272V0h-96z"
			/>
		</svg>
	)
}
