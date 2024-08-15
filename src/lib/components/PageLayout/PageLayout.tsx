/*=============================================== PageLayout component ===============================================*/

import { Fragment } from "react"
import { Helmet, Header, Wrapper, Main, Footer, PageLoading } from "../../"
import type { ILibPageLayout } from "./types"

/**
 * @description Returns a PageLayout component
 * @link https://documentation-components-react.vercel.app/components/page-layout
 * @prop data-testid?: string
 * @prop children?: ReactChildren
 * @prop isLoading?: boolean
 * @prop pageLoading?: ILibPageLoading => imported from PageLoading component
 * @prop titleLoading?: string
 * @prop helmet?: Omit<ILibHelmet, "children"> => imported from Helmet component
 * @prop header?: Omit<ILibHeader, "children"> => imported from Header component
 * @prop footer?: Omit<ILibFooter, "children"> => imported from Footer component
 * @prop noWrapper?: boolean
 * @prop wrapper?: Omit<ILibWrapper, "children"> => imported from Wrapper component, only if noWrapper is not set to true
 * @prop template?: "single" | "multi"
 * @prop main?: Omit<ILibMain, "children"> => imported from Main component, only if template is set to "single" or undefined
 * @prop mainMinHeight?: string | number => only if template is set to "single" or undefined
 */
export function PageLayout({
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
}: ILibPageLayout) {
    return (
        <Fragment>
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
                <Fragment>
                    {header && <Header {...(header as any)} />}

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
                </Fragment>
            )}
        </Fragment>
    )
}
