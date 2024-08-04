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
                            $validation={validation?.status}
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
