export const GqFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-gq"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#e32118" d="M0 0h640v480H0z" />
			<path fill="#fff" d="M0 0h640v320H0z" />
			<path fill="#3e9a00" d="M0 0h640v160H0z" />
			<path fill="#0073ce" d="M0 0v480l180-240z" />
			<g stroke="#000">
				<path
					fill="#fff"
					d="M281.6 191.8h76.6V272c0 27-35.2 6.2-38.2 20.6-5.2-14.8-38.2 6.6-38.2-22.2l-.2-78.6z"
				/>
				<path
					fill="#73452b"
					strokeWidth=".2"
					d="M325.4 279.8s-1 1-2.8.2c-1.8-.8-2-51.4-2-51.4 4-4.4 7.2-5.8 7.2-5.8l2.4 2c-9 4.6-8.2 11.2-7.4 22.6.2 4.2.2 9.6 1.2 14.8 1.4 6.6 4.2 12.2 4.4 16.4.2 2.6-3 1.2-3 1.2z"
				/>
				<path
					fill="#73452b"
					strokeWidth=".2"
					d="M319.2 221.6h3.6c-3 29-.4 46.2-.4 54.6 0 2.8 1.6 3.8 1.4 3.8-3.6 4-5.4-.2-5.4-.2z"
				/>
				<path
					fill="#a36629"
					strokeWidth=".2"
					d="M313.6 279.8c-3.4 1.6-3.8-1.6-3.6-2 7.4-15 10.6-48 3.8-51.6l.4-3.2c2.6.8 5 4.2 5 4.2 1 37 0 52.2-.6 52.8-3.6 3.8-5-.6-5.2-1"
				/>
				<path
					fill="none"
					strokeWidth=".2"
					d="M313.4 279.2c-.6-3.2 5.2-11.4 4.8-20m5 7c1.8 5 2.6 9.4 2.2 13.6"
				/>
				<path
					fill="#009a3b"
					strokeWidth=".2"
					d="M331 208c1.2-1.4 1.2-1.4 3.4-1.4.4-3 5.4-3 5.8.8 4-.8 4.8 1.6 3.2 4 3.8-1 7.2 0 6.2 4.4 6.8 1.8 4.2 6.6 1.2 7.6-.4 3-3.2 4-7 2.8-4.8 3.4-7.6 2.2-9.8-1.2-5.4.8-5.8-.4-8.2-3.4-4.2 1.8-5 1.8-8.6-.4-.2 2.8-1.2 2-3 1.8.2 3.6-1.2 5.2-4.4 4 2.4 5-3.8 7.2-6.8 3-2.8.2-3-.6-4.4-1.6-1.2 4-5.6 3.4-6.4 1.2-5.6-.8-5-3.8-.4-4 .4-3.2 3.2-2.6 5-2.2.2-2 1.4-1.6 2.4-1.2-.6-1.4-.2-2.2 1.6-2.6-2.6-3.4-1-4.6 1.6-5.8-1.4-3.2 1-3 2.8-3.2-.2-3.4.8-4 4.4-4.4-.4-1.2.2-2.2 2.2-2.2-1.2-3.4.4-4.2 4-3.6.6-5 11.2-2.6 10.4 4.2 3 .4 4 1 4.8 3.4z"
				/>
				<path
					fill="none"
					strokeWidth=".2"
					d="M309.6 206.2c.8.4 1.8 0 2 2.2 1.6-2.8 3.6-1.2 3.6 2m11-5.8c-.8 1.2-3.8 1.2-3.4 4.4-1-1.4-3-1.8-3.8-.4m12-.6c0 .8-.2 3.2-1 4.4m13.4-1c.2.2-2.8 0-4.2 1m11.6 11c-.8-.4-2.4-1.4-3.6.2 0-.8 0-3-2.2-3m-1.2 5.6c0-2-.4-2.6-.8-3.2m-5.8.4c-1.6-1.2-3.2.6-3.2 1.6m-8.4-3.4c0-.8-.6-2.4.8-3M302.8 230c.4-2 1.8-2 1.6-3-.2-1.6-2-3-4.2-.8m4.2.8c1.2-.4 2.4-.2 2.8.4m-6.2-7.8c.8-.8 2.8-.6 4 0m0-4.8c1 0 2.8-.4 3.4 1.4 2.2-3.4 3.8-3 4.2-2.2m4-.4c1.6-.6 4.4 1 6 3.8.8-2.2 2-1.8 3.2-2m7.6 2c2.6-1.2 4.2 1.2 5 2.2 1.2-1.6 2.2-1.6 3.4-1.6m-32.6 4.2c.6-1 2-1.2 3-.6-.2-1.8 1-2.6 1.8-2.2"
				/>
				<path
					fill="gold"
					strokeWidth=".7"
					d="m317.4 180.5-4.4.2-2.2 4-2.4-3.8-4.4.2 2-4-2.4-3.7 4.6-.2 2-4 2.4 3.8 4.4-.2-2 4zm-18.8 1.5-4.4 1-1.2 4.3-3.2-3.2-4.2 1 1.2-4.2-3-3.2 4.2-1.1 1.2-4.3 3.2 3.2 4.4-1-1.4 4.3zm-18.2 3.7-4 2-.2 4.4-3.8-2.4-4 2 .4-4.5-3.8-2.4 4-2 .4-4.5 3.6 2.5 4-2-.2 4.4zm42.8-5.2 4.4.2 2 4 2.4-3.8 4.4.2-2-4 2.4-3.7-4.4-.2-2.2-4-2.4 3.8-4.4-.2 2 4zM342 182l4.2 1 1.2 4.3 3.2-3.2 4.2 1-1.2-4.2 3.2-3.2-4.4-1.1-1.2-4.3-3.2 3.2-4.2-1 1.2 4.3zm18 3.7 4 2 .2 4.4 3.8-2.4 4 2-.2-4.5 3.6-2.4-4-2-.2-4.5-3.8 2.5-4-2 .4 4.4z"
				/>
				<g fill="#fff" strokeWidth=".7">
					<path d="m365.4 270.4 5 7.2 4.6-6.8-3.2-5.8zm-31.8 21 .4 7.2s2 0 3.8-.6c1.6-.6 3-1.8 3-1.8l-.2-3.8zm-26.8 0-.4 7s-1.8 0-3.6-.4c-1.6-.4-3-1.4-3-1.4l-2-4.8zm-32.2-21-5.2 7.2-5.6-9.2 4.2-4.4z" />
					<path d="M299.6 305.8c0 6.8 41.2 6.8 41.2 0v-9.6c0 5-41.2 4-41.2 0z" />
					<path d="M262.8 283.6c3.6 18.4 36.8 18.8 36.8 18.8v-6.2c-.8-2.4.6-3.2 6-4 2.2-.2 1.2-3.4 1.2-3.4s-14.4 2.6-24.6-1.4c-13.8-5.6-15.8-16.4-15.8-16.4s-1 8.4-3.6 12.6zm114.6 0c-3.4 18.4-36.6 18.8-36.6 18.8v-6.2c.6-2.4-.8-3.2-6.2-4-2.2-.2-1-3.4-1-3.4s14.4 2.6 24.6-1.4c13.6-5.6 15.2-16.4 15.2-16.4s1.4 8.4 4 12.6z" />
					<path d="M265.4 276.6c-9.2-5-2-10.2-1.2-25 1.4 9 11.6 12.8 10.4 18.6-4.2.2-6.2-6.2-8.2.8l-1 5.6zm109.4 0c9.2-5.2 1.6-10.2.8-25-1.4 9-11.4 12.8-10.2 18.6 4 .2 6-6.2 8 .8l1.4 5.4z" />
				</g>
				<path
					stroke="none"
					d="m271 283.4 1 .8-2.2 2.4c-1 1-1.1 1.6-.5 2.2.7.7 1.3.4 2-.4l2.5-2.6.8.8-2.4 2.8c-1.3 1.5-2.5 1.2-3.6.2-.8-.8-1.4-2 0-3.5l2.4-2.7zm4 3.4 1 .6-.2 4.8 2.2-3.4 1 .6-3.2 5.2-1.2-.6.2-4.8-2.2 3.4-1-.6zm1.8 8.4 2.8-5.6 1 .6-2.6 5.4zm4.4-4.8-2.2 5.8 2.2.8c2 .7 3-.2 3.6-1.9.7-1.8.4-3-1.6-3.9l-2-.8zm.8 1.4c2 .7 2.2 1.5 1.6 3-.6 1.3-1 1.8-3 .8l1.4-3.8zm5.8.8-3.6 5.4 1.4.4.8-1.4 2.4.6.2 1.4 1.4.2-1.4-6.4-1.2-.2zm.4 1.4.4 2.4-1.6-.2 1.2-2.2zm3-.9-.2 6.2h2.3c2.2.1 2.8-1 2.9-3 0-1.8-.7-3-2.9-3l-2.1-.2zm1.2 1c2.2.1 2.5.8 2.5 2.3-.1 1.5-.4 2.1-2.6 1.8v-4zm19.8 7.7v6.4h1.4v-2.4s1.2 0 2.2-.2c.7-.2 1.3-.7 1.3-2 0-1.2-.7-1.8-1.9-1.8h-3zm1.4 1h1.4c1.1 0 1 1.8 0 1.8h-1.4v-1.8zm5.8-1-2.6 6.4h1.4l.6-1.6h2.6l.6 1.6h1.4l-2.6-6.4h-1.4zm.6 1.4 1 2.4h-1.8l.8-2.4zm3.4 3.8 3.4-4.2h-3v-1h4.8v1L325 307h3.6v1.2h-5.2zm20.2-12.4 1.2-.2.6 3.6c.2 1.3-.4 2.1-1.3 2.5-1 .4-2.4 0-2.5-1.7l1-.2c.2 1 .6 1.1 1 1 .5-.2.7-.8.6-1.4zm2-.4 1.1-.2.6 3c.2 1.3.6 1.8 1.5 1.7 1-.2 1.1-.8.9-2l-.7-3.1 1.2-.2.8 3.3c.4 2-.6 2.7-2 3-1.1.2-2.4 0-2.8-2zm6.2 2.8 1-.4c.5.9 1.2.8 1.8.6.8-.4 1-1.1.5-1.4-.6-.3-2 .2-2.7 0-.9-.4-1.3-1-1.2-1.7 0-1 .8-1.4 1.7-1.7 1-.3 2-.2 2.7 1l-1.2.4c-.4-.7-1-.6-1.4-.4-.4.2-1 .5-.6 1 .2.5 1.7.2 2.5.2s1.4.6 1.5 1.3c.2 1.1-.2 1.7-1.5 2.2-1.5.6-2.9 0-3.1-1.1zm5.4-5-1.6.8-.4-1 4.4-1.8.4.8-1.6.8 1.8 4.4-1 .6zm2.6-2.2 1-.6 2.8 5.2-1 .6zm6.8.4 1.2-.4a2.4 2.4 0 0 1-2.4 3.3c-3 0-3.4-3.4-2.9-4.5.8-1.9 3-1.8 4-.8l-1 .8c-.6-.8-2-.3-2 .4a2.7 2.7 0 0 0 1.4 3c1 .4 2.4-.8 1.7-1.8zm-.6-4.2 1-.8 3.6 4.8-1 .8zm3.8-3-1 .8 2.2 6 1-1-.6-1.2 1.8-1.6 1.2.6 1-.8-5.6-2.8zm.4 1.4 2 1-1.2 1.2-.8-2.2z"
				/>
			</g>
		</svg>
	)
}
