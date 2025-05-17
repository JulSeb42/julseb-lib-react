export const GridItem: FC<IGridItem> = ({ children = "Grid item" }) => {
	return (
		<div className="bg-blue-500 p-4 rounded-lg text-white">{children}</div>
	)
}

interface IGridItem {
	children?: Children
}
