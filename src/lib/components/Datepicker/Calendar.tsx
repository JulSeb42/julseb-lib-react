/*=============================================== Calendar component ===============================================*/

import { useState, type MouseEvent } from "react"
import { uuid, formatDate as formatDateUtil } from "ts-utils-julseb"
import classNames from "classnames"
import { Text } from "../../"
import { LibIcon } from "../LibIcon"
import { ChevronLeft, ChevronRight } from "../../icons"
import type { DispatchState } from "../../types"
import { monthsEn, weekDaysEn } from "./data"
import {
    CalendarDay,
    DaysContainer,
    CalendarEmptyDate,
    CalendarHeader,
    CalendarNavButton,
    StyledCalendar,
} from "./styles"
import type { ILibDatepicker } from "./types"

export function Calendar({
    "data-testid": testid,
    className,
    minDate,
    maxDate,
    texts,
    value,
    setValue,
    icons,
    iconsSizes,
    iconBaseUrl,
    calendarDirection = "down",
    validation,
    isOpen,
    setIsOpen,
    inputBackground,
}: Pick<
    ILibDatepicker,
    | "data-testid"
    | "className"
    | "minDate"
    | "maxDate"
    | "texts"
    | "value"
    | "setValue"
    | "icons"
    | "iconsSizes"
    | "iconBaseUrl"
    | "calendarDirection"
    | "validation"
    | "inputBackground"
> & {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
}) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const weekDaysArr = (
        texts?.weekDays
            ? Object.values(texts?.weekDays)
            : Object.values(weekDaysEn)
    ) as Array<string>
    const monthArr = (
        texts?.months ? Object.values(texts.months) : Object.values(monthsEn)
    ) as Array<string>

    const getNumbersOfDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const range = (start: number, end: number) => {
        const length = Math.abs((end - start) / 1)

        const { result } = Array.from({ length }).reduce(
            ({ result, current }) => ({
                result: [...result, current],
                current: current + 1,
            }),
            { result: [], current: start }
        )

        return result
    }

    const handlePrevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(month => month - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear(year => year - 1)
        }
    }

    const handleNextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(month => month + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear(year => year + 1)
        }
    }

    const mapRange = range(
        1,
        getNumbersOfDaysInMonth(currentYear, currentMonth) + 1
    )

    const getFirstDayOfTheMonth = () => {
        const allDays = mapRange.map(day =>
            new Date(
                `${currentYear}/${currentMonth + 1}/${day}`
            ).toLocaleDateString("en-EN", { weekday: "long" })
        )

        return allDays[0]
    }

    const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement

        if (target.id.includes("day-")) {
            setValue(
                formatDateUtil(
                    new Date(
                        currentYear,
                        currentMonth,
                        parseFloat(target.id.replace("day-", ""))
                    )
                )
            )
        }

        setIsOpen(false)
    }

    const formatDate = (year: number, month: number, day: number) =>
        `${year}/${month}/${day}`

    const today = formatDate(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate()
    )

    const getTimeFromState = (_day: number, plus?: number) => {
        return new Date(
            currentYear,
            plus ? plus + currentMonth : currentMonth,
            _day
        ).getTime()
    }

    return (
        <StyledCalendar
            data-testid={testid && `${testid}.Calendar`}
            className={classNames({ Open: isOpen }, { Calendar: className })}
            $direction={calendarDirection}
            $validationStatus={validation?.status}
            $inputBackground={inputBackground}
        >
            <CalendarHeader
                data-testid={testid && `${testid}.Calendar.Header`}
                className={className && "CalendarHeader"}
                $validationStatus={validation?.status}
                $inputBackground={inputBackground}
            >
                <CalendarNavButton
                    data-testid={
                        testid && `${testid}.Calendar.Header.NavButton.Prev`
                    }
                    className={className && "CalendarNavButton"}
                    onClick={handlePrevMonth}
                    disabled={
                        minDate &&
                        new Date(minDate).getTime() > getTimeFromState(1, 0)
                            ? true
                            : false
                    }
                    type="button"
                    $validationStatus={validation?.status}
                    $inputBackground={inputBackground}
                >
                    <LibIcon
                        data-testid={
                            testid &&
                            `${testid}.Calendar.Header.NavButton.Prev.Icon`
                        }
                        className={className && "CalendarNavButtonIcon"}
                        icon={
                            icons?.prev ?? (
                                <ChevronLeft
                                    data-testid={
                                        testid &&
                                        `${testid}.Calendar.Header.NavButton.Prev.Icon`
                                    }
                                    className={
                                        className && "CalendarNavButtonIcon"
                                    }
                                    size={iconsSizes?.prev ?? 24}
                                />
                            )
                        }
                        size={iconsSizes?.prev ?? 24}
                        baseUrl={iconBaseUrl}
                    />
                </CalendarNavButton>

                <Text
                    tag="h6"
                    data-testid={
                        testid && `${testid}.Calendar.Header.MonthYear`
                    }
                    className={className && "MonthAndYear"}
                >
                    {`${monthArr[currentMonth]} ${currentYear}`}
                </Text>

                <CalendarNavButton
                    data-testid={
                        testid && `${testid}.Calendar.Header.NavButton.Next`
                    }
                    className={className && "CalendarNavButton"}
                    onClick={handleNextMonth}
                    disabled={
                        maxDate &&
                        new Date(maxDate).getTime() < getTimeFromState(0, 1)
                            ? true
                            : false
                    }
                    type="button"
                    $validationStatus={validation?.status}
                    $inputBackground={inputBackground}
                >
                    <LibIcon
                        data-testid={
                            testid &&
                            `${testid}.Calendar.Header.NavButton.Next.Icon`
                        }
                        className={className && "CalendarNavButtonIcon"}
                        icon={
                            icons?.next ?? (
                                <ChevronRight
                                    data-testid={
                                        testid &&
                                        `${testid}.Calendar.Header.NavButton.Next.Icon`
                                    }
                                    className={
                                        className && "CalendarNavButtonIcon"
                                    }
                                    size={iconsSizes?.next ?? 24}
                                />
                            )
                        }
                        size={iconsSizes?.next ?? 24}
                        baseUrl={iconBaseUrl}
                    />
                </CalendarNavButton>
            </CalendarHeader>

            <DaysContainer
                data-testid={testid && `${testid}.Calendar.DaysContainer`}
                className={className && "DaysContainer"}
                $inputBackground={inputBackground}
            >
                {weekDaysArr.map(day => (
                    <Text
                        data-testid={
                            testid && `${testid}.Calendar.DaysContainer.Day`
                        }
                        className={className && "WeekDay"}
                        tag="strong"
                        key={uuid()}
                    >
                        {day.slice(0, 3)}
                    </Text>
                ))}

                {getFirstDayOfTheMonth() === "Tuesday" ? (
                    <CalendarEmptyDate
                        data-testid={
                            testid &&
                            `${testid}.Calendar.DaysContainer.EmptyDay`
                        }
                        className={className && "EmptyDay"}
                    />
                ) : getFirstDayOfTheMonth() === "Wednesday" ? (
                    [...Array(2)].map(() => (
                        <CalendarEmptyDate
                            data-testid={
                                testid &&
                                `${testid}.Calendar.DaysContainer.EmptyDay`
                            }
                            className={className && "EmptyDay"}
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Thursday" ? (
                    [...Array(3)].map(() => (
                        <CalendarEmptyDate
                            data-testid={
                                testid &&
                                `${testid}.Calendar.DaysContainer.EmptyDay`
                            }
                            className={className && "EmptyDay"}
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Friday" ? (
                    [...Array(4)].map(() => (
                        <CalendarEmptyDate
                            data-testid={
                                testid &&
                                `${testid}.Calendar.DaysContainer.EmptyDay`
                            }
                            className={className && "EmptyDay"}
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Saturday" ? (
                    [...Array(5)].map(() => (
                        <CalendarEmptyDate
                            data-testid={
                                testid &&
                                `${testid}.Calendar.DaysContainer.EmptyDay`
                            }
                            className={className && "EmptyDay"}
                            key={uuid()}
                        />
                    ))
                ) : getFirstDayOfTheMonth() === "Sunday" ? (
                    [...Array(6)].map(() => (
                        <CalendarEmptyDate
                            data-testid={
                                testid &&
                                `${testid}.Calendar.DaysContainer.EmptyDay`
                            }
                            className={className && "EmptyDay"}
                            key={uuid()}
                        />
                    ))
                ) : null}

                {mapRange.map(day => {
                    const formatedDate = formatDate(
                        currentYear,
                        currentMonth + 1,
                        day
                    )
                    const formatedSelected = value
                        ? formatDate(
                              new Date(value).getFullYear(),
                              new Date(value).getMonth() + 1,
                              new Date(value).getDate()
                          )
                        : null

                    return (
                        <CalendarDay
                            data-testid={
                                testid &&
                                `${testid}.Calendar.DaysContainer.CalendarDay`
                            }
                            className={classNames(
                                { Today: formatedDate === today },
                                { Active: formatedDate === formatedSelected },
                                { CalendarDay: className }
                            )}
                            id={`day-${day}`}
                            onClick={handleSelect}
                            disabled={
                                minDate &&
                                new Date(minDate).getTime() >
                                    getTimeFromState(day + 1, 0)
                                    ? true
                                    : false ||
                                      (maxDate &&
                                          new Date(maxDate).getTime() <
                                              getTimeFromState(day, 0))
                                    ? true
                                    : false
                            }
                            type="button"
                            $inputBackground={inputBackground}
                            $validationStatus={validation?.status}
                            key={uuid()}
                        >
                            {day}
                        </CalendarDay>
                    )
                })}
            </DaysContainer>
        </StyledCalendar>
    )
}
