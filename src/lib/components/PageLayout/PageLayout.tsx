/*=============================================== PageLayout component ===============================================*/

import {
    Helmet,
    Header,
    Wrapper,
    Main,
    Footer,
    PageLoading,
    ResetScroll,
} from "../../"
import type { ILibPageLayout } from "./types"

/**
 * @description Returns a PageLayout component
 * @link https://documentation-components-react.vercel.app/components/page-layout
 * @prop data-testid?: string
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
                </>
            )}

            <ResetScroll />
        </>
    )
}
