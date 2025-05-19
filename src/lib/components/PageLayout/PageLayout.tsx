import type { FC } from "react"
import { Helmet, Header, Wrapper, Main, Footer, PageLoading } from "../../"
import type { ILibPageLayout } from "./types"

/**
 * PageLayout component for rendering a full page layout with optional header, footer, wrapper, main content, and loading state.
 *
 * @component
 * @extends React.FC
 * @param {Object} props - PageLayout props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {boolean} [props.isLoading] - Whether the page is in a loading state.
 * @param {string} [props.titleLoading] - Title to display in the Helmet while loading.
 * @param {ILibPageLoading} [props.pageLoading] - Props for the PageLoading component.
 * @param {ILibHelmet} [props.helmet] - Props for the Helmet component.
 * @param {ILibHeader & { nav?: JSX.Element }} [props.header] - Props for the Header component, with optional navigation.
 * @param {ILibFooter} [props.footer] - Props for the Footer component.
 * @param {ILibWrapper} [props.wrapper] - Props for the Wrapper component (only if noWrapper is not set to true).
 * @param {boolean} [props.noWrapper] - If true, disables the Wrapper component.
 * @param {"single" | "multi"} [props.template="single"] - Layout template type.
 * @param {ILibMain} [props.main] - Props for the Main component (only if template is "single").
 * @param {string|number} [props.mainMinHeight="85vh"] - Minimum height for the Main component (only if template is "single").
 * @param {ReactNode} [props.children] - Page content.
 * @returns {JSX.Element} The rendered PageLayout component.
 *
 * @see https://documentation-components-react.vercel.app/components/page-layout
 * @example
 * <PageLayout
 *   isLoading={loading}
 *   helmet={{ title: "My Page" }}
 *   header={{ title: "Header" }}
 *   footer={{ copyright: "© 2025" }}
 * >
 *   <h1>Welcome</h1>
 *   <p>This is the main content.</p>
 * </PageLayout>
 */
export const PageLayout: FC<ILibPageLayout> = ({
    children,
    isLoading,
    pageLoading,
    titleLoading,
    helmet,
    header,
    footer,
    noWrapper,
    wrapper,
    template = "single",
    main,
    mainMinHeight = "85vh",
}) => {
    return (
        <>
            {helmet && (
                <Helmet
                    {...helmet}
                    title={
                        isLoading && titleLoading ? titleLoading : helmet.title
                    }
                />
            )}

            {isLoading ? (
                <PageLoading {...pageLoading} />
            ) : (
                <>
                    {header && (
                        <Header {...(header as any)}>
                            {header?.nav && header?.nav}
                        </Header>
                    )}

                    {!noWrapper ? (
                        <Wrapper className="wrapper" {...wrapper}>
                            {template === "single" ? (
                                <Main
                                    className="main"
                                    minHeight={mainMinHeight}
                                    {...(main as any)}
                                >
                                    {children}
                                </Main>
                            ) : (
                                children
                            )}
                        </Wrapper>
                    ) : (
                        children
                    )}

                    {footer && <Footer {...(footer as any)} />}
                </>
            )}
        </>
    )
}
