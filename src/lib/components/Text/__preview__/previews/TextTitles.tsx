import { Text } from "../.."
import { Flexbox } from "../../../Flexbox"

export const TextTitles = () => {
    return (
        <Flexbox flexDirection="column" alignItems="stretch">
            <Text tag="h1" data-testid="testid" className="className">
                Title h1
            </Text>

            <Text tag="h2" data-testid="testid" className="className">
                Title h2
            </Text>

            <Text tag="h3" data-testid="testid" className="className">
                Title h3
            </Text>

            <Text tag="h4" data-testid="testid" className="className">
                Title h4
            </Text>

            <Text tag="h5" data-testid="testid" className="className">
                Title h5
            </Text>

            <Text tag="h6" data-testid="testid" className="className">
                Title h6
            </Text>
        </Flexbox>
    )
}
