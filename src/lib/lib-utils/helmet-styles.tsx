/*=============================================== HelmetStyles ===============================================*/

import { Helmet, HelmetData } from "react-helmet-async"

interface ILibHelmetStyles {
    children?: string
}

const helmetData = new HelmetData({})

export function HelmetStyles({ children }: ILibHelmetStyles) {
    return (
        <Helmet helmetData={helmetData}>
            <style>{children}</style>
        </Helmet>
    )
}
