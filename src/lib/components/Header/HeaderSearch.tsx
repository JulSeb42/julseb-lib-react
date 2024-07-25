/*=============================================== HeaderSearch ===============================================*/

import { useState, type FormEvent, type ChangeEvent } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import { Input } from "../../"
import type {
    DispatchState,
    LibIcon,
    LibInputBackground,
    LibInputVariant,
} from "../../types"
import { SearchForm } from "./styles"

export interface ILibHeaderSearch {
    "data-testid": string | undefined
    className: string | undefined
    pathname?: string
    queries?: Array<Array<string>>
    withSearch: boolean | undefined
    maxWidth: string | number
    icon: LibIcon | undefined
    iconClear: LibIcon | undefined
    iconSize: number | undefined
    iconClearSize: number | undefined
    placeholder: string | undefined
    inputBackground: LibInputBackground | undefined
    inputVariant: LibInputVariant | undefined
    keyboardShortcut: Array<string> | undefined
    showKeys: boolean | undefined
    setIsOpen: DispatchState<boolean>
}

export function HeaderSearch({
    "data-testid": testid,
    className,
    withSearch,
    maxWidth,
    placeholder,
    icon,
    iconClear,
    iconSize,
    iconClearSize,
    inputBackground,
    inputVariant,
    keyboardShortcut,
    showKeys,
    pathname,
    queries,
    setIsOpen,
}: ILibHeaderSearch) {
    if (withSearch === false) return null

    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
    const clearSearch = () => setSearch("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigate({
            pathname: pathname,
            search: createSearchParams({
                query: search,
                ...Object.fromEntries(queries || []),
            }).toString(),
        })

        setSearch("")
        setIsOpen(false)
    }

    return (
        <SearchForm
            data-testid={testid}
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
                value={search}
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
