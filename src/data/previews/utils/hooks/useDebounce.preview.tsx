import { useState, useEffect, type ChangeEvent } from "react"
import axios from "axios"
import { Flexbox, Input, useDebounce, uuid, Text, Image } from "../../../../lib"

export const PreviewUseDebounce = () => {
    const [search, setSearch] = useState<string>("")
    const [result, setResult] = useState<Array<any> | string | undefined>(
        undefined
    )

    const debouncedSearch = useDebounce<string>(search, 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)

    useEffect(() => {
        if (search?.length) {
            axios
                .get(
                    `https://rickandmortyapi.com/api/character/?name=${search}`
                )
                .then(res => {
                    if (res) {
                        setResult(res.data.results)
                    } else {
                        setResult("No result")
                    }
                })
                .catch(err => {
                    if (err.code === "ERR_BAD_REQUEST") {
                        setResult("No result")
                    } else {
                        console.log(err)
                    }
                })
        } else {
            setResult("No result")
        }
    }, [debouncedSearch])

    return (
        <Flexbox flexDirection="column" gap="xs" alignItems="stretch">
            <Input
                id="name"
                label="Name"
                value={search}
                onChange={handleChange}
            />

            <Text>Value: {search}</Text>
            <Text>Debounced: {debouncedSearch}</Text>

            {typeof result === "string" ? (
                <Text>{result}</Text>
            ) : (
                result?.map(item => (
                    <Image src={item.image} alt={item.name} key={uuid()} />
                ))
            )}
        </Flexbox>
    )
}
