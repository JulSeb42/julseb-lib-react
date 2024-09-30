/*=============================================== DemoMainFull ===============================================*/

import { Text, Section, Image, FullBleed } from "../../lib"
import { BasePage, StyledMain } from "../../components"

export const DemoMainFull = () => {
    return (
        <BasePage title="Demo Main Full">
            <StyledMain size="full" data-testid="testid" className="className">
                <Text tag="h2">Main</Text>

                <Section gap="xs">
                    <Text tag="h4">Title</Text>
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat ut possimus doloremque doloribus tempore
                        ducimus ad fuga. Tempore doloribus sunt perferendis
                        porro corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat ut possimus
                        doloremque doloribus tempore ducimus ad fuga. Tempore
                        doloribus sunt perferendis porro corporis, ex deserunt
                        incidunt architecto libero temporibus! Rerum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat ut possimus doloremque doloribus tempore ducimus
                        ad fuga. Tempore doloribus sunt perferendis porro
                        corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum.
                    </Text>
                </Section>

                <Section gap="xs">
                    <Text tag="h4">Title</Text>
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat ut possimus doloremque doloribus tempore
                        ducimus ad fuga. Tempore doloribus sunt perferendis
                        porro corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat ut possimus
                        doloremque doloribus tempore ducimus ad fuga. Tempore
                        doloribus sunt perferendis porro corporis, ex deserunt
                        incidunt architecto libero temporibus! Rerum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat ut possimus doloremque doloribus tempore ducimus
                        ad fuga. Tempore doloribus sunt perferendis porro
                        corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum.
                    </Text>
                </Section>

                <FullBleed
                    padding={{ leftRight: "xxl" }}
                    height={400}
                    as="section"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="Full bleed"
                        fit="cover"
                    />
                </FullBleed>

                <Section gap="xs">
                    <Text tag="h4">Title</Text>
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat ut possimus doloremque doloribus tempore
                        ducimus ad fuga. Tempore doloribus sunt perferendis
                        porro corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat ut possimus
                        doloremque doloribus tempore ducimus ad fuga. Tempore
                        doloribus sunt perferendis porro corporis, ex deserunt
                        incidunt architecto libero temporibus! Rerum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat ut possimus doloremque doloribus tempore ducimus
                        ad fuga. Tempore doloribus sunt perferendis porro
                        corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum.
                    </Text>
                </Section>

                <Section gap="xs">
                    <Text tag="h4">Title</Text>
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat ut possimus doloremque doloribus tempore
                        ducimus ad fuga. Tempore doloribus sunt perferendis
                        porro corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat ut possimus
                        doloremque doloribus tempore ducimus ad fuga. Tempore
                        doloribus sunt perferendis porro corporis, ex deserunt
                        incidunt architecto libero temporibus! Rerum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat ut possimus doloremque doloribus tempore ducimus
                        ad fuga. Tempore doloribus sunt perferendis porro
                        corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum.
                    </Text>
                </Section>

                <Section gap="xs">
                    <Text tag="h4">Title</Text>
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat ut possimus doloremque doloribus tempore
                        ducimus ad fuga. Tempore doloribus sunt perferendis
                        porro corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat ut possimus
                        doloremque doloribus tempore ducimus ad fuga. Tempore
                        doloribus sunt perferendis porro corporis, ex deserunt
                        incidunt architecto libero temporibus! Rerum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat ut possimus doloremque doloribus tempore ducimus
                        ad fuga. Tempore doloribus sunt perferendis porro
                        corporis, ex deserunt incidunt architecto libero
                        temporibus! Rerum.
                    </Text>
                </Section>
            </StyledMain>
        </BasePage>
    )
}
