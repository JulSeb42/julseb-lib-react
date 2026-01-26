import { useState, createContext, useContext } from "react"
import type { ReactChildren, DispatchState, FC } from "../types"

type ILibModalOpenContext = {
	hasModalOpen: boolean
	setHasModalOpen: DispatchState<boolean>
}

const ModalOpenContext = createContext<ILibModalOpenContext | null>(null)

export const ModalOpenProviderWrapper: FC<{ children: ReactChildren }> = ({
	children,
}) => {
	const [hasModalOpen, setHasModalOpen] = useState(false)

	return (
		<ModalOpenContext.Provider value={{ hasModalOpen, setHasModalOpen }}>
			{children}
		</ModalOpenContext.Provider>
	)
}

/**
 * Custom hook to know if there is a modal open inside our app, and set `z-index` accordingly when needed
 *
 * @returns {ILibModalOpenContext} If there is a modal open, and a switch to set a modal as open or not
 * @example
 * const { hasModalOpen, setHasModalOpen } = useModalOpen()
 */
export const useModalOpen = () =>
	useContext(ModalOpenContext) as ILibModalOpenContext
