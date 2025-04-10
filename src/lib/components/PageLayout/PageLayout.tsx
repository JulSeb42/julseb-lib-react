import { Helmet, Header, Wrapper, Main, Footer, PageLoading } from "../../"
import type { ILibPageLayout } from "./types"

/**
 * @description Returns a PageLayout component
 * @link https://documentation-components-react.vercel.app/components/page-layout
 * @prop data-testid?: string
 * @prop isLoading?: boolean
 * @prop titleLoading?: string
 * @prop pageLoading?: ILibPageLoading => imported from PageLoading component
 * @prop helmet?: ILibHelmet => imported from Helmet component
 * @prop header?: ILibHeader & { nav?: JSX.Element } => imported from Header component
 * @prop footer?: ILibFooter => imported from Footer component
 * @prop wrapper?: ILibWrapper => imported from Wrapper component, only if noWrapper is not set to true
 * @prop noWrapper?: false
 * @prop template?: "single" | "multi"
 * @prop main?: ILibMain => imported from Main component, only if template is set to single
 * @prop mainMinHeight?: string | number => only if template is set to single
 */
export const PageLayout = ({
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
}: ILibPageLayout) => {
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
