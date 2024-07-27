/*=============================================== DemoHeader ===============================================*/

import { CoverLayout } from "../../components"
import { Header, Cover, Text } from "../../lib"
import type { LibHeaderLink } from "../../lib/types"

export function DemoHeader() {
    const links: Array<LibHeaderLink> = [
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
    ]

    return (
        <CoverLayout title="Demo header">
            <Header
                data-testid="testid"
                className="className"
                logo={{
                    text: "Logo",
                    // img: "/images/logo-fajny-css.svg",
                    // width: 100,
                    // height: 400,
                }}
                links={links}
                position="fixed"
                hideOnScroll
                // navMobileVariant="top"
                search={{
                    pathname: "",
                    icon: "search",
                    placeholder: "Search here",
                    keyboardShortcut: ["Command", "KeyK"],
                    maxWidth: 300,
                    inputBackground: "light",
                    showKeys: true,
                }}
                // burgerPosition="left"
                // navDesktopVariant="left"
                variant="transparent"
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
