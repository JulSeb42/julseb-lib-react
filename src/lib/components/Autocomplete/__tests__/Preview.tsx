/*=============================================== Autocomplete preview ===============================================*/

import { useState } from "react"
import { Autocomplete } from "../"
import { frenchCities } from "../../../../data"

export const Preview = () => {
    const [location, setLocation] = useState("")

    return (
        <Autocomplete
            data-testid="testid"
            className="className"
            value={location}
            setValue={setLocation}
            listResults={frenchCities}
        />
    )
}
