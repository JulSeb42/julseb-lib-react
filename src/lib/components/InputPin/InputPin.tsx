/*=============================================== InputPin component ===============================================*/

import {
    forwardRef,
    createRef,
    useState,
    type ChangeEvent,
    type RefObject,
} from "react"
import { Flexbox } from "../../"
import { InputContainer } from "../InputComponents"
import { StyledInputPin } from "./styles"
import type { ILibInputPin } from "./types"

/**
 * @description Returns a InputPin component
 * @link https://documentation-components-react.vercel.app/components/input-pin
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop values: { [n: number]: number | "" | undefined }
 * @prop setValues: Dispatch<SetStateAction<{ [n: number]: number | "" | undefined }>>
 * @prop placeholders?: Array<string>
 * @prop container?: { justifyContent?: CssJustifyContent; columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" }
 * @prop inputSize?: number
 * @prop inputFontSize?: "display-h1" | "display-h2" | "display-h3" | "display-h4" | "display-h5" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small"
 * @prop hideValues?: boolean
 * @prop disabled?: boolean
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: LibAllColors; fontStyle?: FontStyle; icon?: string | JSX.Element; iconColor?: LibAllColors; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 * @prop inputBackground?: LibInputBackground
 * @prop containerStyle?: CSSProperties
 */
export const InputPin = forwardRef<HTMLDivElement, ILibInputPin>(
    (
        {
            "data-testid": testid,
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
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
            labelComment ||
            helper ||
            helperBottom ||
            validation
        )

        const [inputsRefsArr] = useState<Array<RefObject<HTMLInputElement>>>(
            () =>
                Array.from({ length: Object.keys(values).length }, () =>
                    createRef()
                )
        )

        const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
            setValues({ ...values, [e.target.id]: e.target.value })

            if (i !== Object.keys(values).length - 1) {
                inputsRefsArr[i + 1].current?.focus()
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
            >
                <Flexbox
                    data-testid={
                        hasContainer ? `${testid}.FlexContainer` : testid
                    }
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
)
