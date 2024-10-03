/*=============================================== DemoHeader ===============================================*/

import { CoverLayout } from "../../components"
import { Header, Cover, Text } from "../../lib"
import type { LibHeaderLink } from "../../lib/types"

export const DemoHeader = () => {
    const links: Array<LibHeaderLink | JSX.Element> = [
        {
            text: "Link",
            to: "#",
        },
        {
            text: "Link",
            to: "/",
        },
        {
            text: "Link",
            to: "/",
        },
        {
            text: "Button",
            onClick: () => alert("Clicked"),
        },
        <button key={42} onClick={() => alert("Clicked element")}>
            Click me
        </button>,
    ]

    return (
        <CoverLayout title="Demo header">
            <Header
                data-testid="testid"
                className="className"
                logo={{
                    // text: "Logo",
                    img: "/images/logo-fajny-css.svg",
                    imgOpen: "/images/logo-fajny-css-white.svg",
                    width: 100,
                    // height: 400,
                }}
                links={links}
                position="fixed"
                hideOnScroll
                search={{
                    pathname: "",
                    iconLeft: "search",
                    placeholder: "Search here",
                    keyboardShortcut: ["Command", "KeyK"],
                    maxWidth: 300,
                    inputBackground: "light",
                    showKeys: true,
                }}
                variant="transparent"
                // burgerPosition="left"
                // navDesktopVariant="left"
                navMobileVariant="top"
            />

            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                justifyContent="flex-end"
                alignItems="flex-start"
                overlay="gradient-black"
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
