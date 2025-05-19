import { createRef, useState, type ChangeEvent, type Ref, type FC } from "react"
import { Flexbox } from "../../"
import { InputContainer } from "../InputComponents"
import { StyledInputPin } from "./styles"
import type { ILibInputPin } from "./types"

/**
 * InputPin component for rendering a multi-field PIN or code input with flexible container, size, font, and validation options.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - InputPin props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {{ [n: number]: number | "" | undefined }} props.values - Current values for each PIN input.
 *  * @param {Dispatch<React.SetStateAction<{ [n: number]: number | "" | undefined }>>} props.setValues - Setter for the PIN values.
 * @param {Array<string>} [props.placeholders] - Placeholders for each input field.
 * @param {{ justifyContent?: CssJustifyContent; columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" }} [props.container] - Flexbox container options.
 * @param {number} [props.inputSize=48] - Size of each input field.
 * @param {"display-h1" | "display-h2" | "display-h3" | "display-h4" | "display-h5" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small"} [props.inputFontSize="body"] - Font size for input fields.
 * @param {boolean} [props.hideValues] - Hide input values (show as password).
 * @param {boolean} [props.disabled] - Disable all input fields.
 * @param {string} [props.label] - Label for the input group.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 *  * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the Flexbox container.
 * @returns {JSX.Element} The rendered InputPin component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-pin
 * @example
 * <InputPin
 *   values={{ 0: "", 1: "", 2: "", 3: "" }}
 *   setValues={setPinValues}
 *   label="Enter PIN"
 *   inputSize={40}
 *   hideValues
 * />
 */
export const InputPin: FC<ILibInputPin> = ({
    "data-testid": testid,
    ref,
    className,
    values,
    setValues,
    placeholders,
    container,
    hideValues,
    label,
    labelComment,
    id,
    helper,
    helperBottom,
    validation,
    inputBackground,
    disabled,
    inputSize = 48,
    inputFontSize = "body",
    containerStyle,
    ...rest
}) => {
    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )

    const [inputsRefsArr] = useState<Array<Ref<HTMLInputElement>>>(() =>
        Array.from({ length: Object.keys(values).length }, () => createRef())
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
        setValues({ ...values, [e.target.id]: e.target.value })

        if (i !== Object.keys(values).length - 1) {
            // @ts-ignore
            inputsRefsArr[i + 1]!.current.focus()
        }
    }

    return (
        <InputContainer
            data-testid={testid}
            className={className}
            id={id}
            label={label}
            labelComment={labelComment}
            helper={helper}
            helperBottom={helperBottom}
            validation={validation}
            value={values}
            counter={false}
            maxLength={undefined}
            style={containerStyle}
            hasListOpen={undefined}
            iconBaseUrl={undefined}
        >
            <Flexbox
                data-testid={hasContainer ? `${testid}.FlexContainer` : testid}
                ref={ref}
                className={hasContainer ? "FlexContainer" : className}
                justifyContent={container?.justifyContent ?? "center"}
                columnGap={container?.columnGap ?? "xs"}
                {...rest}
            >
                {inputsRefsArr.map((inputRef, i) => (
                    <StyledInputPin
                        key={i}
                        data-testid={testid && `${testid}.Input`}
                        className={className && "InputPin"}
                        ref={inputRef}
                        id={Object.keys(values)[i]}
                        onChange={e => handleChange(e, i)}
                        value={Object.values(values)[i]}
                        placeholder={placeholders && placeholders[i]}
                        type={hideValues ? "password" : "text"}
                        maxLength={1}
                        disabled={disabled}
                        $validationStatus={validation?.status}
                        $disabled={disabled}
                        $inputBackground={inputBackground}
                        $inputVariant={undefined}
                        $inputSize={inputSize}
                        $fontSize={inputFontSize}
                    />
                ))}
            </Flexbox>
        </InputContainer>
    )
}
