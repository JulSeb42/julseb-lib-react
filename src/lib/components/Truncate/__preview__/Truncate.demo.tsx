import styled from "styled-components"
import { Text, Tag, Truncate, SPACERS, RADIUSES } from "../../../"

export const TruncateDemo = () => {
    const names = [
        "Julien",
        "Sile",
        "Max",
        "Maud",
        "Mel",
        "Michael",
        "Yan",
        "Amy",
        "Juliette",
        "Jeff",
    ]

    return (
        <>
            <Text>{names?.length} names</Text>

            <StyledTruncate data-testid="testid" className="className">
                {names.map((name, i) => (
                    <Tag
                        borderRadius="round"
                        padding={{ topBottom: "xxs", leftRight: "s" }}
                        key={i}
                    >
                        {name}
                    </Tag>
                ))}
            </StyledTruncate>
        </>
    )
}

const StyledTruncate = styled(Truncate)`
    max-width: 400px;
    overflow-x: scroll;
    background-color: ${({ theme }) => theme.GRAY_100};
    padding: ${SPACERS.XS};
    border-radius: ${RADIUSES.M};
`
