export const MzFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-mz"
			viewBox="0 0 640 480"
			width={width}
		>
			<defs>
				<clipPath id="a">
					<path fillOpacity=".7" d="M0 0h682.7v512H0z" />
				</clipPath>
			</defs>
			<g clipPath="url(#a)" transform="scale(.9375)">
				<path fill="#009a00" fillRule="evenodd" d="M0 0h768v160H0z" />
				<path fill="#fff" fillRule="evenodd" d="M0 160h768v16H0z" />
				<path fillRule="evenodd" d="M0 176h768v160H0z" />
				<path fill="#fff" fillRule="evenodd" d="M0 336h768v16H0z" />
				<path fill="#ffca00" fillRule="evenodd" d="M0 352h768v160H0z" />
				<path fill="red" fillRule="evenodd" d="M0 0v512l336-256L0 0z" />
				<path
					fill="#ffca00"
					fillRule="evenodd"
					d="m198.5 333-51.2-37.5L96.1 333l19.9-60.3-51.5-37.1 63.5.2 19.3-60.4 19.4 60.5 63.5-.3-51.5 37.1z"
				/>
				<path
					fill="#fff"
					fillRule="evenodd"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.1"
					d="M102.8 290.9h37c3 3.3 9.5 4.7 15.8 0 11.6-6.4 34 0 34 0l4.4-4.7-10.7-35.2-3.9-4.2s-8.3-5-24-3.3c-15.7 1.7-21.2-.5-21.2-.5s-13.7 1.6-17.6 3.6l-4.4 4.4-9.4 39.9z"
				/>
				<path
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.1"
					d="M110.3 281.8s35.2-4.4 45.4 9.1c-5.7 4-10.8 4.3-16.2.3.8-1.5 12.6-13.8 42.7-9.7"
				/>
				<path
					fill="none"
					stroke="#000"
					strokeWidth="1.2"
					d="m148 246.6-.3 38.8m31.7-38.3L186 278"
				/>
				<path
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.1"
					d="m117 246.6-3.7 16"
				/>
				<path
					fillRule="evenodd"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.1"
					d="m78.9 295.1 8.6 10.2c1 .6 2 .6 2.9 0l12.8-15.4 5.4-6.7c.9-1 1.1-2.1 1-3l10.4-9.3 2.2.2c-1-.2-1.7-.7-1-1.8l2.4-1.8 1.8 2.3s-2.6 3.4-2.9 3.4h-2.8l-5.4 4.9 2.4 2 3.5 9.8 4.4-3.1-2.8-10 6.1-6.7-2.3-3.6 1.6-2s21.3 13.4 29.6 9.8c.2 0 .5-9.6.5-9.6s-22.2-2.3-22.7-6.7 5-5 5-5l-2.4-3.2.5-1.8 3.9 4.8 8.7-7.4 51.5 58.6c2.8-1.1 3.4-1.8 3.6-4.6L155 241.5l3.8-4.1c.8-.9 1-1.2 1-2.6l6-5.1a7.3 7.3 0 0 1 3.8 3L186 219c.4.4 1.7.8 2.6.4l26.9-25.9-29.3 20.7-1-.7c0-.9 1-1 0-2.6-1.2-1.4-2.9 1.3-3.1 1.3-.3 0-4.3-1.4-5.2-3.2l-.2 4.7-7.5 7-5.7-.3-8.2 8-1 3 1.3 2.7s-4.4 3.8-4.4 3.6c0-.3-.9-1.2-1-1.3l3.8-3.4.5-2.3-1.2-2c-.4.3-5.2 5.4-5.5 4.8l-14-15.5.8-2.9-8.7-9.5c-3.2-1.1-8.3-1.3-9.3 5.7-.8 1.6-7.4.2-7.4.2l-3.6.8L85.2 241l11.3 13.6 23.2-29.3.7-8.3 4.8 5.4c1.7.2 3.2.3 4.7-.5l13.7 15.3-2.3 2.3 2 2.2 2.4-1.6.9 1.3c-1.1.6-2 1.5-3.1 2.1-1.8-1.2-3.6-2.7-3.5-5l-7.7 6.4-.3 1.2-22.9 19-2 .3-.5 6 14.9-12.4v-1.8l1.5 1.3 11.6-9.3s.8 1 .5 1-10.3 9.3-10.3 9.3l-.2 1-1.8 1.6-1-.8-14 12.4h-2l-7.7 7.7c-2 .2-3.7.4-5.4 1.5l-13.8 12.2z"
				/>
			</g>
		</svg>
	)
}
