import { useState, type FormEvent } from "react"
import { Link, useSearchParams, NavLink } from "react-router-dom"
import { CoverLayout } from "../../components"
import { Header, Cover, Text, uuid, clsx } from "../../lib"

const links = [
	<NavLink
		to="/header/demo"
		className={clsx("[&&]:font-normal [&.active]:font-black")}
		key={uuid()}
	>
		Home
	</NavLink>,
	<NavLink
		to="/about"
		className={clsx("[&&]:font-normal [&.active]:font-black")}
		key={uuid()}
	>
		About
	</NavLink>,
	<NavLink
		to="/users"
		className={clsx("[&&]:font-normal [&.active]:font-black")}
		key={uuid()}
	>
		Users
	</NavLink>,
]

export const HeaderDemo = () => {
	const [search, setSearch] = useState("")
	const [_, setSearchParams] = useSearchParams()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSearchParams({ search })
		setSearch("")
	}

	return (
		<CoverLayout title="Header">
			<Header
				logo={<Link to="/">Logo</Link>}
				links={links}
				search={{
					value: search,
					setValue: setSearch,
					handleSubmit,
					focusKeys: ["Command", "KeyK"],
					showKeys: true,
					placeholder: "Search here...",
					clearSearch: () => setSearch(""),
				}}
				position="fixed"
				hideOnScroll
			/>

			<Cover
				img="/images/cover-img.avif"
				alt="Cover"
				alignItems="end"
				justifyContent="start"
				overlay="gradient-black"
				className="text-white"
			>
				<Text tag="h1" display>
					Title
				</Text>

				<Text tag="h2" display>
					Subtitle
				</Text>
			</Cover>
		</CoverLayout>
	)
}
