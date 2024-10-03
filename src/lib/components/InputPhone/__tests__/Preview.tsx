/*=============================================== InputPhonePreview ===============================================*/

import { useState } from "react"
import { InputPhone } from "../InputPhone"
import type { LibCountry } from "../../../types"

export const Preview = () => {
    const [selectedCountry, setSelectedCountry] = useState<
        LibCountry | undefined
    >(undefined)
    const [phone, setPhone] = useState("")

    return (
        <InputPhone
            data-testid="testid"
            className="className"
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            value={phone}
            onChange={e => setPhone(e.target.value)}
        />
    )
}
