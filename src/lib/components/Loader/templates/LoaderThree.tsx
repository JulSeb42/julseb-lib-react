import { type FC } from "react"
import { clsx, genBgAllColors } from "../../../utils"
import type { ILibLoader } from "../types"

export const LoaderThree: FC<Omit<ILibLoader, "variant">> = ({
	className,
	element = "div",
	ref,
	color = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx("inline-flex gap-2 w-fit h-4", className)}
			{...rest}
		>
			<span
				className={clsx(
					"block rounded-full size-4 dot [--dot-delay:100ms]",
					genBgAllColors[color],
				)}
			/>
			<span
				className={clsx(
					"block rounded-full size-4 dot [--dot-delay:300ms]",
					genBgAllColors[color],
				)}
			/>
			<span
				className={clsx(
					"block rounded-full size-4 dot [--dot-delay:500ms]",
					genBgAllColors[color],
				)}
			/>
		</Element>
	)
}

{
	/* <div class="container"><div class="dot" /></div>

<style>
  .loader-dot-container {
    --uib-size: 43px;
    --uib-color: black;
    --uib-speed: 1.3s;
    --uib-dot-size: calc(var(--uib-size) * 0.24);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--uib-dot-size);
    width: var(--uib-size);
  }

  .dot,
  .container::before,
  .container::after {
    content: '';
    display: block;
    height: var(--uib-dot-size);
    width: var(--uib-dot-size);
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    transition: background-color 0.3s ease;
  }

  .container::before {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.375)
      infinite;
  }

  .dot {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.25)
      infinite both;
  }

  .container::after {
    animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.125)
      infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }
  }
</style>
 */
}
