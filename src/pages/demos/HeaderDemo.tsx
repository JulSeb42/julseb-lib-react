import { useState, type FormEvent } from "react"
import { Link, useSearchParams, NavLink } from "react-router-dom"
import { CoverLayout } from "../../components"
import { Header, Cover, Text, uuid } from "../../lib"

const links = [
	<NavLink to="/header/demo" key={uuid()}>
		Home
	</NavLink>,
	<NavLink to="/about" key={uuid()}>
		About
	</NavLink>,
	<NavLink to="/users" key={uuid()}>
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
				navMobileBackground="secondary"
				backgroundColor="transparent"
				headerOpenMobileBackground="primary"
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
