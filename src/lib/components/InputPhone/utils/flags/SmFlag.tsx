export const SmFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-sm"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd" strokeWidth="1pt">
				<path fill="#19b6ef" d="M0 240h640v240H0z" />
				<path fill="#fff" d="M0 0h640v240H0z" />
			</g>
			<path
				fill="#fd0"
				fillRule="evenodd"
				stroke="#7d6c00"
				strokeWidth="2.4"
				d="M317 339.2C369.6 300 426 220 359.9 177.8c-12.3-2.4-26-1.7-32.7 3.6-3.5-2-6.3-1.8-9.8 1.9-2.5-3-5-4.4-10-2.9a40.8 40.8 0 0 0-31.5-3C218 211.8 253.4 294 317 339.1z"
			/>
			<g stroke="#3a9d4f">
				<path
					fill="#4fd46b"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeWidth="2.4"
					d="M414 250.1s6-8 6.2-8c5.9-3.4 6.5-7.9 6.5-7.9 5.9-1.8 4-6.7 4.5-7.3a6.4 6.4 0 0 0 1.4-7.1c0-.8 2-8.4-.8-9.4.1-8-4.8-7.3-8.8-2-4.2 1.2-5.1 4.7-3.6 8.5-5.5 0-5.7 8-4.1 12.4-7.3-.2-3.3 8-3.5 8.4-2.4 1.2 1.9 12.8 2.3 12.4zm-46 68.2 3.6 2.2c.8 2.8 3.4 4.6 5.3 4.1 1 4.3 5.6 3.7 9 1.2 2.7 4 6 4 10.6 2.7 4 3 9.3 1.7 12.8-1.4 3.7 3 6.2.8 8.1-2.5 3 .8 5.2.3 6.3-2.6 5.7-.5 2.9-5.9-1.8-8.2 3.7-3.2 7.9-10 2-11-1.8-1.3-5.3-1-7.9.2-.7-3-4.8-3.7-9.4-.4-1.5-3.3-7-1.7-9.5.6-3.3-2.8-7.2-2.8-12.9.4L368 318.3zm0-8.7c.6-3.8-2-10.6 2-11.2-.7-6.3.3-13.3 7.5-12.7 1.2-5.9 1-11.4 7.8-12.2 0 0 5.5-19.1 11.2-5.9 2.2 3.9 1.8 10.2-2.7 9 .9 4.7-.7 8.9-5.9 8.7 2.3 3.4 1.6 7.9-1 10l-19 14.3zm33.1-23.9 6-1.2c6-4 8.5-5.7 11.5-1.2 5.1-1 10-.6 9.8 3.4 6 .5 6 4.3 5.3 7.4 1 5.3-1.4 12.3-5 3.8-11.9-7.2-18.6-6.2-37.3-2l9.7-10.2zm3.1-5.9c.2-.2 17.5-4.7 15.7-10 4.9-.8 5.9-5.7 6-5.7 10.3-3.2 9.7-9.1 9.7-9.1 2.9-3.1 8-6.3 6.9-11.8.3-6.3.9-10.2-7.6-6.1-6.3-.6-8.5 3-10.3 8.5-3-3.5-7.8 2.1-8.4 7.1 0 0-7.7 7.6-7.7 7.8l-6.5 12 2.2 7.3z"
				/>
				<path
					fill="#4fd46b"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeWidth="2.4"
					d="M404.5 266.4c-4.1-3.1-6.4-6.9-5.7-10.6-2.7-3.7-4.6-5.9-2-9.2l-2-7.5c-5.4-2-3.1-6.5-1.7-8.1-2.5-3.5-2.6-7.2-.2-10.4 0-6.5 4.6-4 8.3 0 0 0 6.4 4.5 1.7 8.5 4.7 1.7 6 5.7 3.4 7.4 4.1 1.8 4.7 5.5 2.5 8 4.1 3.2 2.6 7.4 3.8 11.1l-8.1 10.8z"
				/>
				<path
					fill="#4fd46b"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeWidth="2.4"
					d="M411.8 236c-.2-.1-6.9-8.7-5-9.3-.5-2.6-2.5-5.5-1.3-8.1-3.3-3.4-3.4-7.3-.8-10.4-2.2-3-1.2-7.1 1.8-9.8-1-5 2.6-6.2 5.7-7.1 2.3-8 6-6 8.2.2 3.2 2.8 2.7 7 1.6 10.2 3.8 2.5 1.5 5.7-.2 7l-10 27.4z"
				/>
				<path
					fill="#4fd46b"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeWidth="2.4"
					d="m410.8 193.1-5.7-5.7c1.5-3 2.7-8.3-1.6-10.8-2.4-5.7-14.2-12.9-16.1.8-1.8-4.1-5.6-8.2-8.3-3.4-6.2-5.3-9.5-3.7-6.3 3 0 0-2.9 4.5 4.6 8 .6.6-2.4 8.1 6.6 8.3-1.7 2.6 1 6.2 4.6 6-2.5 3.1 1.8 6.5 4.5 5.2-1.1 3.5-1 5.2 3.9 5.7l5.5 6.3 4.5 6.1 3.8-29.5z"
				/>
				<path
					fill="none"
					strokeLinecap="round"
					strokeWidth="2.2"
					d="M414.3 246.5c.3-.3 11-24.8 12.4-32.2M415.4 203s1.8 20-3.1 34.6m-29.7-54.7s21.9 21 24 29.7m-8.7-32s1.4 17.3 7.5 34.3m31 28.4S414.6 261.8 404 278m11.8 30s-28.8 4-41.4 4.3m32 8s-35.8-.8-38.4-3.4m20.5-43c0 .4-18.2 30.3-18.8 40"
				/>
			</g>
			<path
				fill="#65c7ff"
				fillRule="evenodd"
				stroke="#7d6c00"
				strokeWidth="2.4"
				d="M316.9 333.4c-37.8-35.6-76.5-102.4-38-136.2 6.8 3.8 14.9.4 26-4 3.4 3.7 7.7 4.6 12 1.8a9 9 0 0 0 10.7-2.1c11 6.3 24.9 9.6 28.2 3.3 37.8 36-.6 103.2-39 137.3z"
			/>
			<path
				fill="#8fc753"
				fillRule="evenodd"
				d="M317 332.4a212.8 212.8 0 0 1-42.3-57.6c2-1.7 2.9-2.2 3.9-5 5.8.8 8.9 1 16.5-.4 1.6 5.8 1.9 10.6 5.5 15.4l7.7-15a33.6 33.6 0 0 0 16.5 0c3.2 4.2 2 10.7 7.7 15.6 3.4-10 6.7-10.6 10.1-16 5 1.8 8.2 1 12.3-.3 2 2.5 1 2.4 5 6a193.7 193.7 0 0 1-42.8 57.3z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth="1.1"
				d="M272.6 164.3a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.8 0zm-3.5-7.7a3.4 3.4 0 1 1-6.6 0 3.4 3.4 0 0 1 6.7 0zm-4-7.1a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm-2.8-7a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm.5-7.6a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm17.6-12.5a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth="1.1"
				d="M273.8 123.6a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm-7.3 4.3a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm22.4-5.4a3.4 3.4 0 1 1-6.6 0 3.4 3.4 0 0 1 6.6 0zm9.4.8a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm8.2-.5a3.4 3.4 0 1 1-6.6 0 3.4 3.4 0 0 1 6.7 0z"
			/>
			<path
				fill="#fd0"
				fillRule="evenodd"
				stroke="#7d6c00"
				strokeWidth="1.1"
				d="M325.9 117.5a8.6 8.6 0 1 1-17.2 0 8.6 8.6 0 0 1 17.2 0z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth="1.1"
				d="M335 122.7a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.7 0zm8.6.7a3.4 3.4 0 1 1-6.6 0 3.4 3.4 0 0 1 6.7 0zm8.5-.4a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm7.1-.3a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm8.9 1a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm7 4.4a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0z"
			/>
			<path
				fill="#e40000"
				fillRule="evenodd"
				stroke="#ac0000"
				strokeWidth="2.4"
				d="m269.4 151.7 8.6 16.5h79.2l9.2-15.9c-5.4-3.7-9-6.5-16.7-4.8-4.3-6.2-9-7.3-16-6.7-2.1-2.1-4-3.4-7.6-4l-16.6.5c-4.4.4-7.8 3.8-8 3.8-7-.9-13.5-.7-15.2 6.2-6.5-1.6-11 .2-16.9 4.4z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth="1.1"
				d="M378 135.3a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm.6 8a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm-2.5 7.2a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm-3 6a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.7 0zm-3.7 7.5a3.4 3.4 0 1 1-6.7 0 3.4 3.4 0 0 1 6.7 0zm-46.8-9.6a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth="1.1"
				d="M323.6 143a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeWidth="1.1"
				d="M322.7 132a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0z"
			/>
			<path
				fill="#fd0"
				fillRule="evenodd"
				stroke="#7d6c00"
				strokeWidth="1.1"
				d="M315.5 109v-4.2l-3.6-.1.2-3.2h3v-2.8h4.5v2.5h3.5l-.1 3.4h-3.6v4.5h-4z"
			/>
			<path
				fill="none"
				stroke="#fd0"
				strokeWidth="3.3"
				d="M277.6 168.2c-7.1-12-17.6-28.4-11-35.5 8.9-10.1 29.9-1 43.3-6.8 1 11.4-2.2 30.4 2.9 34.3l-4.8 4.2c-3-3.7-8.4-8.8-15.2.2-4-3.4-8.3-2.8-10.4 1.7-2 .3-1.9 1.1-4.8 1.9zm80-.5c7.2-12 17.6-28.3 11.1-35.4-9-10.1-30-1-43.3-6.9-1 11.5 2.2 30.5-3 34.4l4.8 4.2c4.7-6.5 10.4-6.7 15.3.2 3.9-3.4 7.9-3 10.4 1.7 2 .3 1.8 1 4.8 1.8z"
			/>
			<path
				fill="#fd0"
				fillRule="evenodd"
				stroke="#7d6c00"
				strokeWidth="2.4"
				d="M277.3 177.1a437 437 0 0 1 79.3 0l3.1-9c-27.7-5-46.8-5.6-83-.6l.6 9.6z"
			/>
			<path
				fill="#c76e2e"
				fillRule="evenodd"
				d="m314.1 329.4.6-4.2c2.9.8 5 .5 7.4-.4l2.4-3.7-1.8-2.1c-1.6.3-3 1.8-4 3.1-1.6.1-3-.7-4.6-1l-1.5-6.4c-1.5-1.8-4.7-1.7-4 1.5l.3 2.5c.6 1.5.9 3.6 1.9 4.7v2.6l3.3 3.4zm1.2-18.3c-2 1-4.6-.8-7.3-1.9-2.5-.1-4.4 2-7.4 1.3.6-1.6 1.9-1.9 2.8-2.8-.7-4.1 1.5-5.5 2.1-5.5.6 0 3.1.6 3.1.6l2.4.3c1.5 2.7 3.5 5 4.3 8z"
			/>
			<path
				fill="#ffe100"
				fillRule="evenodd"
				stroke="#e9bf00"
				strokeWidth="2.4"
				d="M300.8 366c7-11.4 56.2-34.4 102.4-84.2-47 45.3-76.4 56.4-114.8 84l12.4.3z"
			/>
			<path
				fill="#9d4916"
				fillRule="evenodd"
				stroke="#68300e"
				strokeWidth="1.1"
				d="M368.4 313.2a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0zm34.4-34.9a4 4 0 1 1-8.1 0 4 4 0 0 1 8 0zm11.4-29.6a3.6 3.6 0 1 1-7.1 0 3.6 3.6 0 0 1 7.1 0zM403 210.3a3.6 3.6 0 1 1-7.1 0 3.6 3.6 0 0 1 7.1 0z"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#a9a9a9"
				strokeWidth="1.1"
				d="M279.1 269.6v-15.2l-1.5-1.2v-3.6l2.8-.3.5-17-1.8-1-.2-2.8s2 .8 2 .3l.5-3.4s-1.3-.2-1.3-.7 1.6-1.8 1.6-1.8-.8-.8-1-1.3l-.8-2.8.8-2.9-.5-1.5-1.3-2.3 1.8-1.8-.5-2.8a10 10 0 0 1 1.5-2.9c.3-.2 2.3-3 2.3-3l4.4-1 5.1.7 2.8 1.8.5 4.6s-.5 2.8-.7 2.8l-2.3 1s-2.6.3-2.9 0 .8 3.2.8 3.2v3l-.2 3.9s0 1.8-.3 2-.8 1-.8 1l-.2 4 4 1-.2 2.3-2.8.2.5 15.7 4.1.7v4.4l-1.8 1-.5 15.7h-14.4zm62.4.3v-15.2l-1.5-1.3v-3.6l2.8-.2.5-17-1.8-1-.2-2.8s2 .7 2 .2l.5-3.3s-1.3-.3-1.3-.8 1.6-1.8 1.6-1.8-.8-.7-1-1.3l-.8-2.8.8-2.8-.6-1.5-1.2-2.3 1.8-1.8-.6-2.9a10 10 0 0 1 1.6-2.8l2.3-3 4.4-1.1 5.1.8 2.8 1.8.5 4.6s-.5 2.8-.7 2.8l-2.3 1s-2.6.3-2.9 0 .8 3.1.8 3.1v3.1l-.3 3.9s0 1.7-.2 2l-.8 1-.2 3.9 4 1-.2 2.3-2.8.3.5 15.6 4.1.8v4.4l-1.8 1-.5 15.7h-14.4zm-31.6.5v-15.2l-1.5-1.2v-3.7l2.8-.2.5-17-1.8-1-.2-2.8s2 .8 2 .3l.5-3.4s-1.2-.2-1.2-.7 1.5-1.9 1.5-1.9-.8-.7-1-1.2l-.8-2.9.8-2.8-.5-1.5-1.3-2.3 1.8-1.8-.5-2.9a9 9 0 0 1 1.5-2.8c.3-.2 2.3-3 2.3-3l4.4-1 5.1.7 2.8 1.8.6 4.6s-.6 2.8-.8 2.8l-2.3 1s-2.6.3-2.8 0 .7 3.1.7 3.1v3.1l-.2 3.9s0 1.8-.3 2l-.8 1-.2 3.9 4 1-.2 2.3-2.8.3.5 15.7 4.1.7v4.4l-1.8 1-.5 15.7H310z"
			/>
			<path
				fillRule="evenodd"
				d="M283 269.5v-12h6.6V270l-6.7-.5zm31.4 1 .3-12.2h6v11.9l-6.3.2zm31-.3-.4-11.5 6.5-.2v12l-6-.3zm-60.8-36h3.8v6.1h-3.8zm30.3.2h5.3v6h-5.3zm31 .5h4.6v5.7H346z"
			/>
			<path
				fill="none"
				stroke="#a8a8a8"
				strokeWidth="1.1"
				d="M286.6 207c4 4.6 4.3 4.6 4.3 4.6m26.2-4.6c.8 1.5 2 4.8 3.6 5.1m29.3-4.4s1.3 3.6 3 4.1"
			/>
			<path
				fill="#b97700"
				fillRule="evenodd"
				d="M282.2 194c12-3.9-2.8-11.6-5.3 0-3.8.7-4.3 3.5-12.7 2.3-20.4 33-5.3 86.5 54.1 141.8-106.4-90.6-63.2-157.6-33.7-155 16 1 8 21-2.4 11z"
			/>
			<path
				fill="none"
				stroke="#7d6c00"
				strokeWidth="2.4"
				d="M285.6 177s9.7 2.7 9.7 6.8m0-7.5s6.8 3 8.3 5.6m45.1-4.5s-8.6 1.2-10.5 3.8m-2.6-3s-5 4.1-4.5 5.3m3.4 12.7c-.8-.3-4.2-4.9-3.4-10.5m-29.8 7.5s2.3-2.6 2.3-7.5m13.5-1.9.4 11m9.4-1.6c0-.7 3-7.9-.4-11.3m-20.3-1.5s-2.6 7.2-.7 13.2m20-6.8s-4.2 1.2-6 3m-11.8-1.9c0-.3 4.6-1 6 1.6"
			/>
			<path
				fill="#c76e2e"
				fillRule="evenodd"
				d="M300.6 301.9c.2 0 3.8-.7 3.8-2.4 1.8-1.2.5-4.5.5-4.5l-3.4-.6-4.6-5.2c-.2-1.6.3-3.1-.7-4.8-3.2.8-5 3.5-6 6.5.7 1 .8 2 2.3 2.9 1.5.2 2.5-.7 3.9-.4.7 1.3.5 2.4.8 3.6 1.9 1.3 2.3 3.2 3.4 4.9zm-4.1-22.2v-6.2l-4.4-.2c-.6 1-1.6 1.4-2.2 2.2l-3.1 1.6c1.3 1.5 2.9 2.4 3.8 3.2 2.3.6 4.1.6 5.9-.6zm-13.8 9.1-2.4-4a7.2 7.2 0 0 1 4.7.3s1 2.5.3 3.4c-.4.9-2.7.5-2.6.3zm36.5 4.1a4.6 4.6 0 0 0 2.7-3.3l-4.5-5.1-4-.1c-1-1-2.4-1.2-3.6-1.2 0 0 1.2 2 2.8 2.3 1.2 2.6 6.2 7.4 6.6 7.4zm4.3.6c0-.1 4-1.4 6-1.3-.1-1.6 3-5.3 3-5.3l5.6 7.3c-1 .8-2.8.6-4.2.8 0 0-2.7 2.6-3 2.7s-5.2 1.3-7.6-.2c-1-2 .3-4.3.2-4zm3.2-12.8a14 14 0 0 0 0-7.6h-6.4l-4.2 2s1.3 4.2 3 3.8c.7 2.1 2.9 1.6 4 2.4l3.6-.6zm24.9-6.4c-1 2.7-1.4 5.5-.2 8 1.2.3 2.6 1 3.6.8l5.1-9.2c-3.5-1.1-6.4-1-8.6.4z"
			/>
			<path
				fill="#b97700"
				fillRule="evenodd"
				d="M353.1 193.2c-12-3.9 2.8-11.7 5.3 0 3.9.6 4.4 3.5 12.8 2.3 20.3 33 5.2 86.5-54.2 141.8 106.5-90.6 63.2-157.6 33.7-155.1-16 1-8 21 2.4 11z"
			/>
			<path
				fill="#c76e2e"
				fillRule="evenodd"
				d="M354.3 284.7c-.2 0-3 2-3 2l-4.2 1.7-4.4.1-1-3 3.4-3c-2.8-.5-5.7.7-8 2.8 0 0 0 3.3 2 5 1.1 1.4 4.5 4 4.5 4a7 7 0 0 0 5.4-1l5.3-8.6zm-23.2 30.1c1.4.4 11.3-12.7 11.3-12.7a10 10 0 0 0-4.9-5.4s-4.8 5.7-4.9 7.6c-.8 1.7-3 8.3-2 9.2-.1.2-.5 2.9.5 1.3z"
			/>
			<path
				fill="#006800"
				fillRule="evenodd"
				stroke="#004100"
				strokeLinejoin="round"
				strokeWidth="2.4"
				d="M266.4 317.4c-14.8-12.9-34.8-20-62.7-10.3 7.5 3.2 15.6 4.3 22.5 7.9l40.2 2.4z"
			/>
			<path
				fill="none"
				stroke="#00a400"
				strokeLinecap="round"
				strokeWidth="2.2"
				d="M223.4 308.3c29.3.6 37.8 7.9 36.3 6.7"
			/>
			<path
				fill="#006800"
				fillRule="evenodd"
				stroke="#004100"
				strokeLinejoin="round"
				strokeWidth="2.2"
				d="M267 319c-8.8 1.6-20.8 10-24.4 9.7-9.5-1.1-18.5-5-27.7-8-3.8-1.2-7.7 0-11.6 0 32.8-15.5 44-13.4 63.7-1.8z"
			/>
			<path
				fill="#006800"
				fillRule="evenodd"
				stroke="#004100"
				strokeLinejoin="round"
				strokeWidth="2.4"
				d="M245.4 296s-11 1.6-15.9 1.9c-4.8-.3-12-4.8-19.8-13-4-4.6-13.4-4-13.4-4 20.6-4.4 36.7-.2 49 15.2zm-15-21.2c-14.9-1-33.5-14.3-37.7-30.2 0 .2 5.5 3.5 4.6 4.3 24.4 6.2 26 11.2 33.1 25.9zm25 25.5c2.1-13.5 2.7-22.4-3.6-30.4-5.3-6-6.6-9.7-10.4-18.3-1.1 17.8-5 32.5 14 48.7zM232 263c11-16.1 13-28.3 11.2-47.5-.3 1.5-4 11-4.2 11-16.5 10.3-9.2 26.5-7 36.5z"
			/>
			<path
				fill="#006800"
				fillRule="evenodd"
				stroke="#004100"
				strokeLinejoin="round"
				strokeWidth="2.4"
				d="M222.2 185c11 16.1 9.4 31.3 7.6 50.5-.3-1.5-4-11-4.2-11-16.5-10.3-5.5-29.5-3.4-39.5z"
			/>
			<path
				fill="#006800"
				fillRule="evenodd"
				stroke="#004100"
				strokeLinejoin="round"
				strokeWidth="2.4"
				d="M231.3 210c26.8-13.6 16.5-30.7 21.4-44-18.6 13.9-21 28.6-21.3 44z"
			/>
			<path
				fill="none"
				stroke="#00a400"
				strokeLinecap="round"
				strokeWidth="2.2"
				d="M235 206.6c3.4-9.5 10-25.6 10.7-25.6M227 226.4c-.6-6.7-4-24.7-4.3-26.5"
			/>
			<path
				fill="#006800"
				fillRule="evenodd"
				stroke="#004100"
				strokeLinejoin="round"
				strokeWidth="2.4"
				d="M228.3 256.5c-15-1-31-21.3-35.3-37.1 0 .2 5.5 3.4 4.6 4.2 21.4 9.6 23.6 18.2 30.7 32.9zm-4.4-14c-11-16.1-13-28.3-11.3-47.5.3 1.5 4 11 4.3 11 16.4 10.3 9.1 26.5 7 36.5zm9.9-28.3c27.7-12.3 19.2-25.2 27.4-38.7-18.6 13.8-27.1 23.4-27.4 38.7z"
			/>
			<path
				fill="none"
				stroke="#00a400"
				strokeLinecap="round"
				strokeWidth="2.2"
				d="M235 211.4a70.7 70.7 0 0 0 15.2-20.7"
			/>
			<g fillRule="evenodd">
				<path
					fill="#ffe100"
					stroke="#e9bf00"
					strokeWidth="2.4"
					d="m333.6 366.4 13.4.2c-44.7-42-130.5-60.2-118.6-137.4-12.3 83.7 70.1 91.5 105.2 137.2z"
				/>
				<path
					fill="#9d4916"
					stroke="#68300e"
					strokeWidth="1.1"
					d="M235.4 212.7a4.3 4.3 0 1 1-8.6 0 4.3 4.3 0 0 1 8.6 0zm-2.6 23.6a4 4 0 1 1-8.1 0 4 4 0 0 1 8 0zm3.8 33.7a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0zm31.3 37.2a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0zm4.5 10.7a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0z"
				/>
			</g>
			<g fill="#fff" fillRule="evenodd">
				<g stroke="#000" strokeWidth="1.1">
					<path d="M288.2 349a15.5 15.5 0 0 1-4.8-5.8l-14-1.5-.2 8 19-.7z" />
					<path
						strokeLinejoin="round"
						d="M185.3 339.6c8.2 1.5 20.5-.8 24.5 4.5 4.8 5.4-15.1 13.9-12.3 18.6 6.2 6.5 12.5 3.8 19.4.2 1.7-3.5 3-9.8 3.8-11.7-2.5-5.7-9.3-8.6-7.5-17.3 11.3-4.2 33.2-3.9 35.6-2.2 1.8 3.6.1 5.2.5 8.1-1.9 3.7-6.7 9.8-6.7 13.1 12 4.2 15-.6 25.8-.4 12.6.2 20.2 3.6 23-1.4-2-4.4-13.5-.8-17.8-3.6-2.2-.7-3.6-2.5-5.5-4.4s-7.2-2-8-6.9c2.2-10.2 17-8.6 19.3-10.2l38.4 2.7c7-.2 11 12.3 1.5 16-9.4 3.8-37.1-5.5-49.2.9-.6-2.6-9.3-6.6-9.9-6.7-3.7 1-10.9.7-10.9.7-1.7 3.2-3.8 5.6-5.5 8.9-8-3.5-15.5 2.7-24.2.9l-13.6 1.5-8.6-.8-13.2 3.8 9.4-8.3-8.3-6z"
					/>
					<path d="M184.7 338a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0zm-1 18a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.3 0z" />
				</g>
				<g stroke="#000" strokeWidth="1.1">
					<path d="M346.3 349.1c2.3-2.1 3.8-3.5 4.7-5.8l14-1.6.3 8-19-.6z" />
					<path
						strokeLinejoin="round"
						d="M449.1 339.6c-8.1 1.5-20.4-.7-24.4 4.5-4.9 5.5 15 14 12.2 18.6-6.2 6.6-12.5 3.9-19.4.3-1.6-3.5-2.9-9.8-3.8-11.7 2.6-5.8 9.3-8.6 7.6-17.3-11.4-4.3-33.3-4-35.6-2.3-1.9 3.7-.2 5.3-.6 8.2 2 3.6 6.8 9.8 6.8 13-12 4.3-15.1-.6-25.8-.3-12.6.2-20.3 3.5-23-1.5 1.9-4.3 13.4-.8 17.8-3.5 2.2-.8 3.6-2.5 5.5-4.5s7.2-2 8-6.8c-2.2-10.2-17-8.7-19.4-10.2l-38.4 2.6c-7-.2-10.9 12.3-1.5 16.1 9.4 3.8 37.2-5.6 49.2.8.7-2.6 9.3-6.5 10-6.7 3.6 1.1 10.8.7 10.8.7 1.8 3.3 3.8 5.7 5.6 9 8-3.6 15.5 2.7 24.2.8l13.5 1.5 8.7-.7 13.2 3.7-9.4-8.2 8.2-6z"
					/>
					<path d="M449.7 338a3.6 3.6 0 1 0 7.3 0 3.6 3.6 0 0 0-7.3 0zm1 18a3.6 3.6 0 1 0 7.2 0 3.6 3.6 0 0 0-7.2 0z" />
				</g>
				<path d="M317 329.3c-3.2-.6-4.4-.4-6.6-.6l-5.1 15.8c8 .7 15.3.7 15.3.7-4.8-1-3.7-15.8-3.6-15.9z" />
			</g>
			<g fontFamily="Trebuchet MS" fontSize="9" fontWeight="bold">
				<path d="M283.4 340.2v-10.7h1.8v9h5v1.7z" aria-label="L" />
				<path d="M291.7 340.7V330h1.9v10.7z" aria-label="I" />
				<path
					d="M300 341.5h-3.3V331l3.2-.2q1.7 0 2.5.7 1 .8 1 2.1 0 1.2-1.3 2 2 .7 2 2.9 0 1.5-1.2 2.3-1 .8-2.8.8zm-1.3-9.1v2.5h1q1.7 0 1.7-1.4 0-1.1-1.7-1.1h-1zm0 4v3.5h1q1.2 0 1.7-.4.7-.3.7-1.3t-.5-1.3q-.5-.5-1.9-.5h-1z"
					aria-label="B"
				/>
				<path
					d="M308.6 333v2.7h3.4v1.7h-3.4v3.1h5v1.7h-6.9v-10.7h6.7v1.7z"
					aria-label="E"
				/>
				<path
					d="m322.2 342.4-2.8-4.5H318v4.5h-1.8v-10.7h1.2l1.6-.2q4.2 0 4.2 3.2 0 1-.5 1.7-.7.8-1.5 1.1l3.3 4.9zm-4.2-9v2.8h.9l1.6-.2q.7-.3.7-1.3 0-.8-.5-1.2-.7-.3-2-.3h-.7z"
					aria-label="R"
				/>
				<path
					d="M329.9 333v9h-2v-9h-3.4v-1.6h8.9v1.6z"
					aria-label="T"
				/>
				<path
					d="m340.7 340.5-.8-2.1h-3.7l-.7 2.1h-2.1l4.3-10.8h.8l4.4 10.8zM338 333l-1.1 4h2.5z"
					aria-label="A"
				/>
				<path
					d="m344.4 339.7.6-1.7q1.2.7 2.2.7 1.7 0 1.7-1.2l-.4-1-1.6-1.1-1.7-1-.7-1-.1-1.2q0-1.3.8-2.2 1-.6 2.3-.6 1.9 0 2.9.6l-.7 1.7q-1-.8-2.2-.8-.6 0-1 .3-.3.3-.3 1 0 .8 2 1.8 1.2.5 1.7 1l.6 1 .2 1.4q0 1.3-1 2.1t-2.7.9q-1.6 0-2.6-.9z"
					aria-label="S"
				/>
			</g>
			<path
				fill="none"
				stroke="#00a400"
				strokeLinecap="round"
				strokeWidth="2.2"
				d="M231.3 318.6c10.1 1.2 24.1.3 30.2 0M216 284.2c8.6 6.7 27.1 10.7 26.8 10.7m10.7 1.8c-2.8-14-5.8-17.4-8.3-26.2m-43.5-15.8c14.3 6.4 16.5 10.6 25.6 17m5.2-14c1.2-17.3 3.6-21.9 7.9-25.9m-38.7-2c5.2 5.7 22.2 23.7 22.2 23.7m-7-39.6c6.4 4.5 6.4 21 6.4 21"
			/>
		</svg>
	)
}
