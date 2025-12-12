import { lazy } from "react"

export const Toast = lazy(() => import("./Toast"))
export const ToastContainer = lazy(() => import("./ToastContainer"))
export * from "./ToastFn"
