import type { LibToast } from "../../types"

type ToastAction = "ADD_TOAST" | "DELETE_TOAST"

export const toastReducer = (
    state: { toasts: Array<LibToast> },
    action: {
        type: ToastAction
        payload: any
    }
) => {
    switch (action.type) {
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            }
        case "DELETE_TOAST":
            const updatedToasts = state.toasts.filter(
                t =>
                    t.id !==
                    (typeof action.payload === "string" ||
                    typeof action.payload === "number"
                        ? action.payload
                        : action.payload.id)
            )
            return {
                ...state,
                toasts: updatedToasts,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
