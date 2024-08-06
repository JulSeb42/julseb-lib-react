/*=============================================== HeaderSearch ===============================================*/

import { useState, type FormEvent, type ChangeEvent } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import { Input } from "../../"
import { SearchForm } from "./styles"
import type { ILibHeaderSearch } from "./subtypes"

export function HeaderSearch({
    "data-testid": testid,
    className,
    search,
    handleClose,
}: ILibHeaderSearch) {
    if (!search) return null

    const {
        maxWidth,
        placeholder,
        icon,
        iconClear,
        iconSize,
        iconClearSize,
        iconBaseUrl,
        inputBackground,
        inputVariant,
        keyboardShortcut,
        showKeys,
        pathname,
        queries,
    } = search

    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState("")
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
        setSearchValue(e.target.value)
    const clearSearch = () => setSearchValue("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigate({
            pathname: pathname,
            search: createSearchParams({
                query: searchValue,
                ...Object.fromEntries(queries || []),
            }).toString(),
        })

        setSearchValue("")
        handleClose()
    }

    return (
        <SearchForm
            data-testid={testid && `${testid}.HeaderSearch`}
            className={className && "HeaderSearch"}
            onSubmit={handleSubmit}
            role="search"
            $maxWidth={maxWidth}
        >
            <Input
                data-testid={testid && `${testid}.SearchInput`}
                className={className && "SearchInput"}
                type="search"
                clearSearch={clearSearch}
                onChange={handleSearch}
                value={searchValue}
                placeholder={placeholder}
                icon={icon}
                iconSize={iconSize}
                iconClear={iconClear}
                iconClearSize={iconClearSize}
                inputBackground={inputBackground}
                inputVariant={inputVariant}
                focusKeys={keyboardShortcut}
                showKeys={showKeys}
            />
        </SearchForm>
    )
}
