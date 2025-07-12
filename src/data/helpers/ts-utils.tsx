import { useState, useEffect, type ReactNode } from "react"
import {
	addDay,
	addMonth,
	addYear,
	calculateAverage,
	calculateTotalSum,
	capitalize,
	convertDate,
	convertDateShort,
	convertPrice,
	convertToEmail,
	convertYoutube,
	deleteDuplicates,
	detectLanguage,
	disableScroll,
	enableScroll,
	filterObject,
	formatDate,
	formatHour,
	generateNumbers,
	getFirstName,
	getInitials,
	getLastName,
	getNextDay,
	getPercentage,
	getRandom,
	getRandomAvatar,
	getRandomDate,
	getRandomNumber,
	getRandomString,
	getRandomTime,
	getTimeNow,
	getToday,
	getTomorrow,
	getYesterday,
	hexToRgb,
	emailRegex,
	passwordRegex,
	rgbToHex,
	scrollToTop,
	slugify,
	sortByFrequency,
	stringifyPx,
	toCamelCase,
	toConstantCase,
	toDotCase,
	toKebabCase,
	toPascalCase,
	toPathCase,
	toSentenceCase,
	toSnakeCase,
	toTitleCase,
	unslugify,
	uuid,
} from "@julseb-lib/utils"
import { Button, Avatar } from "../../lib"

type Util = {
	name: string
	effect: ReactNode
	arguments: Array<string>
	example: string | null
	result: void | ReactNode | null | Partial<any>
}

const TimeWithSeconds = () => {
	const [time, setTime] = useState(getTimeNow({ withSeconds: true }))

	useEffect(() => {
		setInterval(() => setTime(getTimeNow({ withSeconds: true })), 1000)
	}, [getTimeNow])

	return <span className="px-2 py-1">{time.toString()}</span>
}

export const allTsUtils: Array<Util> = [
	{
		name: "addDay",
		effect: "Add a number of days to a set date",
		arguments: ["numberOfDays: number", "dateFrom?: string"],
		example: `addDay(1, "${getToday()}")`,
		result: addDay(1, getToday()).toString(),
	},
	{
		name: "addMonth",
		effect: "Add a number of months to a set date",
		arguments: ["numberOfMonths: number", "dateFrom?: string"],
		example: `addMonth(1, "${getToday()}")`,
		result: addMonth(1, getToday()).toString(),
	},
	{
		name: "addYear",
		effect: "Add a number of years to a set date",
		arguments: ["numberOfYears: number", "dateFrom?: string"],
		example: `addYear(1, "${getToday()}")`,
		result: addYear(1, getToday()).toString(),
	},
	{
		name: "calculateAverage",
		effect: "Calculate an average number for an array of numbers",
		arguments: ["array: Array<number>"],
		example: "calculateAverage([1, 2, 3, 4])",
		result: calculateAverage([1, 2, 3, 4]),
	},
	{
		name: "calculateTotalSum",
		effect: "Calculate the total sum of an array",
		arguments: ["array: Array<number>"],
		example: "calculateTotalSum([1, 2, 3, 4])",
		result: calculateTotalSum([1, 2, 3, 4]),
	},
	{
		name: "capitalize",
		effect: "Capitalize a string",
		arguments: ["string: string"],
		example: 'capitalize("hello world")',
		result: capitalize("hello world"),
	},
	{
		name: "convertDate",
		effect: "Convert a date string to full date",
		arguments: ["date: Date | string"],
		example: "convertDate(new Date())",
		result: convertDate(new Date()),
	},
	{
		name: "convertDateShort",
		effect: "Convert a date string to short date",
		arguments: ["date: Date | string"],
		example: "convertDateShort(new Date())",
		result: convertDateShort(new Date()),
	},
	{
		name: "convertPrice",
		effect: "Convert a price with currency",
		arguments: ["price: number", "currency?: string"],
		example: "convertPrice(100)",
		result: convertPrice(100),
	},
	{
		name: "convertToEmail",
		effect: "Converts a string to an email address",
		arguments: ["name: string", "domain?: string"],
		example: 'convertToEmail("Foo Baz")',
		result: convertToEmail("Foo Baz"),
	},
	{
		name: "convertYoutube",
		effect: "Converts a YouTube url to an embed url",
		arguments: ["url: string"],
		example:
			'convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E")',
		result: convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E"),
	},
	{
		name: "deleteDuplicates",
		effect: "Delete duplicated values from array",
		arguments: ["array: Array<T>"],
		example: "deleteDuplicates([1, 1, 1, 2, 3])",
		result: deleteDuplicates([1, 1, 1, 2, 3]),
	},
	{
		name: "detectLanguage",
		effect: "Detects `lang` value in local storage or from navigator",
		arguments: ["-"],
		example: "detectLanguage()",
		result: detectLanguage(),
	},
	{
		name: "disableScroll",
		effect: "Disable page scroll",
		arguments: ["-"],
		example: "disableScroll()",
		result: (
			<span>
				<Button variant="ghost" onClick={() => disableScroll()}>
					Disable scroll
				</Button>
			</span>
		),
	},
	{
		name: "enableScroll",
		effect: "Enable page scroll",
		arguments: ["-"],
		example: "enableScroll()",
		result: (
			<span>
				<Button variant="ghost" onClick={() => enableScroll()}>
					Enable scroll
				</Button>
			</span>
		),
	},
	{
		name: "filterObject",
		effect: "Filter any object by value",
		arguments: [
			"object: T",
			"callback: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean",
		],
		example: "filterObject({ id: 0, name: null }, ([_, v]) => v !== null)",
		result: JSON.stringify(
			filterObject({ id: 0, name: null }, ([_, v]) => v !== null),
		),
	},
	{
		name: "formatDate",
		effect: "Format a Date to `yyyy-mm-dd`",
		arguments: ["date: Date | string"],
		example: "formatDate(new Date())",
		result: formatDate(new Date()),
	},
	{
		name: "formatHour",
		effect: "Format hour with half times",
		arguments: ["hour: number"],
		example: "formatHour(3.5)",
		result: formatHour(3.5),
	},
	{
		name: "generateNumbers",
		effect: "Generates an array of numbers",
		arguments: ["min?: number", "max?: number", "step?: number"],
		example: "generateNumbers(0, 4)",
		result: generateNumbers(0, 4).join(", "),
	},
	{
		name: "getFirstName",
		effect: "Get first name of a full name",
		arguments: ["fullName"],
		example: 'getFirstName("John Doe")',
		result: getFirstName("John Doe"),
	},
	{
		name: "getInitials",
		effect: "Get initials of a full name",
		arguments: ["fullName"],
		example: 'getInitials("John Doe")',
		result: getInitials("John Doe"),
	},
	{
		name: "getLastName",
		effect: "Get last name of a full name",
		arguments: ["fullName"],
		example: 'getLastName("John Doe")',
		result: getLastName("John Doe"),
	},
	{
		name: "getNextDay",
		effect: "Get the next day of a given date",
		arguments: ["currentDay"],
		example: 'getNextDay("2023-09-17")',
		result: getNextDay("2023-09-17"),
	},
	{
		name: "getPercentage",
		effect: "Get percentage of given value",
		arguments: ["partial: number", "total: number"],
		example: "getPercentage(200, 500)",
		result: getPercentage(200, 500),
	},
	{
		name: "getRandom",
		effect: "Get a random value from an array",
		arguments: ["array: Array<T>"],
		example: "getRandom([1, 2, 3, 4])",
		result: getRandom([1, 2, 3, 4]),
	},
	{
		name: "getRandomAvatar",
		effect: "Get random avatar from cartoon-avatar library: https://github.com/Ashwinvalento/cartoon-avatar",
		arguments: ['gender: "male" | "female" | "other"'],
		example: "getRandomAvatar()",
		result: (
			<Avatar>
				<img src={getRandomAvatar()} alt="Avatar" />
			</Avatar>
		),
	},
	{
		name: "getRandomDate",
		effect: "Get a random date with format `yyyy-mm-dd`",
		arguments: ["minYear?: number", "maxYear?: number"],
		example: "getRandomDate()",
		result: getRandomDate(),
	},
	{
		name: "getRandomNumber",
		effect: "Get random number between set values",
		arguments: ["min?: number", "max?: number"],
		example: "getRandomNumber()",
		result: getRandomNumber(),
	},
	{
		name: "getRandomString",
		effect: "Get a random string",
		arguments: ["length?: number"],
		example: "getRandomString()",
		result: getRandomString(),
	},
	{
		name: "getRandomTime",
		effect: "Get a random time",
		arguments: ["min?: number", "max?: number", "withSeconds?: boolean"],
		example: "getRandomTime()",
		result: getRandomTime(),
	},
	{
		name: "getTimeNow",
		effect: "Get the time now",
		arguments: [
			"options?: { withSeconds?: boolean; withMiliSeconds?: boolean }",
		],
		example: "getTimeNow({ withSeconds: true })",
		result: <TimeWithSeconds />,
	},
	{
		name: "getToday",
		effect: "Get today's date in format `yyyy-mm-dd`",
		arguments: ["-"],
		example: "getToday()",
		result: getToday(),
	},
	{
		name: "getTomorrow",
		effect: "Get tomorrow's date in format `yyyy-mm-dd`",
		arguments: ["-"],
		example: "getTomorrow()",
		result: getTomorrow(),
	},
	{
		name: "getYesterday",
		effect: "Get yesterday's date in format `yyyy-mm-dd`",
		arguments: ["-"],
		example: "getYesterday()",
		result: getYesterday(),
	},
	{
		name: "hexToRgb",
		effect: "Convert a Hex value to RGB",
		arguments: ["hex: string"],
		example: 'hexToRgb("#1B4568")',
		result: hexToRgb("#1B4568"),
	},
	{
		name: "passwordRegex",
		effect: "Regular expression for password",
		arguments: ["-"],
		example: 'passwordRegex.test("hello")',
		result: passwordRegex.test("hello").toString(),
	},
	{
		name: "emailRegex",
		effect: "Regular expression for email",
		arguments: ["-"],
		example: 'emailRegex.test("hello")',
		result: emailRegex.test("hello").toString(),
	},
	{
		name: "rgbToHex",
		effect: "Convert a RGB value to Hex",
		arguments: ["r: number", "g: number", "b: number"],
		example: "rgbToHex(27, 69, 104)",
		result: rgbToHex(27, 69, 104),
	},
	{
		name: "scrollToTop",
		effect: "Scroll to top of the page",
		arguments: ["-"],
		example: "scrollToTop()",
		result: (
			<span>
				<Button variant="ghost" onClick={() => scrollToTop()}>
					Scroll to top
				</Button>
			</span>
		),
	},
	{
		name: "slugify",
		effect: "Slugify string",
		arguments: ["string: string"],
		example: 'slugify("Hello World")',
		result: slugify("Hello World"),
	},
	{
		name: "sortByFrequency",
		effect: "Sort array of strings by frequency of values",
		arguments: ["array: Array<T>"],
		example:
			'sortByFrequency(["Hello", "Foo", "baz", "hello", "heLlo", "foo"])',
		result: sortByFrequency([
			"Hello",
			"Foo",
			"baz",
			"hello",
			"heLlo",
			"foo",
		]).join(", "),
	},
	{
		name: "stringifyPx",
		effect: "Transform a value to `{value}px`",
		arguments: ["value: number | string"],
		example: "stringifyPx(123)",
		result: stringifyPx(123),
	},
	{
		name: "toCamelCase",
		effect: `Transforms a string ${toCamelCase("to-camel-case")}`,
		arguments: ["string: string"],
		example: 'toCamelCase("hello world")',
		result: toCamelCase("hello world"),
	},
	{
		name: "toConstantCase",
		effect: `Transforms a string ${toConstantCase("to-constant-case")}`,
		arguments: ["string: string"],
		example: 'toConstantCase("hello world")',
		result: toConstantCase("hello world"),
	},
	{
		name: "toDotCase",
		effect: `Transforms a string ${toDotCase("to-dot-case")}`,
		arguments: ["string: string"],
		example: 'toDotCase("hello world")',
		result: toDotCase("hello world"),
	},
	{
		name: "toKebabCase",
		effect: `Transforms a string ${toKebabCase("to-kebab-case")}`,
		arguments: ["string: string"],
		example: 'toKebabCase("hello world")',
		result: toKebabCase("hello world"),
	},
	{
		name: "toPascalCase",
		effect: `Transforms a string ${toPascalCase("to-pascal-case")}`,
		arguments: ["string: string"],
		example: 'toPascalCase("hello world")',
		result: toPascalCase("hello world"),
	},
	{
		name: "toPathCase",
		effect: `Transforms a string ${toPathCase("to-path-case")}`,
		arguments: ["string: string"],
		example: 'toPathCase("hello world")',
		result: toPathCase("hello world"),
	},
	{
		name: "toSentenceCase",
		effect: `Transforms a string ${toSentenceCase("to-sentence-case")}`,
		arguments: ["string: string"],
		example: 'toSentenceCase("hello world")',
		result: toSentenceCase("hello world"),
	},
	{
		name: "toSnakeCase",
		effect: `Transforms a string ${toSnakeCase("to-snake-case")}`,
		arguments: ["string: string"],
		example: 'toSnakeCase("hello world")',
		result: toSnakeCase("hello world"),
	},
	{
		name: "toTitleCase",
		effect: `Transforms a string ${toTitleCase("to-title-case")}`,
		arguments: ["string: string"],
		example: 'toTitleCase("hello world")',
		result: toTitleCase("hello world"),
	},
	{
		name: "unslugify",
		effect: "Unslugify a string",
		arguments: ["string: string"],
		example: 'unslugify("hello_world-foo")',
		result: unslugify("hello_world-foo"),
	},
	{
		name: "uuid",
		effect: "Generate a random UUID",
		arguments: ["-"],
		example: "uuid()",
		result: uuid(),
	},
]
