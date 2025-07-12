import type { FC, ForwardRefExoticComponent, RefAttributes } from "react"
import clsx from "clsx"

interface IComponentPreviewContent {
	component: FC | ForwardRefExoticComponent<any & RefAttributes<any>> | null
	props?: any
	demo?: ReactElement
}

const ComponentPreviewContent = ({
	component,
	props,
	demo,
}: IComponentPreviewContent) => {
	const Component = component as any

	if (demo) return demo
	if (props) return <Component {...props} />

	return null
}

interface IComponentPreview extends IComponentPreviewContent {
	previewTitle?: string
	noStretch?: boolean
}

export const ComponentPreview = ({
	previewTitle,
	noStretch,
	...rest
}: IComponentPreview) => {
	return previewTitle ? (
		<div
			className={clsx(
				"flex flex-col gap-3",
				noStretch ? "items-start" : "items-stretch",
			)}
		>
			<h4>{previewTitle}</h4>
			<ComponentPreviewContent {...rest} />
		</div>
	) : (
		<ComponentPreviewContent {...rest} />
	)
}
