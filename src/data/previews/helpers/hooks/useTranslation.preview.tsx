import { useTranslation, Flexbox, Text, Button } from "../../../../lib"

const translations = {
	fr: {
		greetings: "Bonjour",
	},
	en: {
		greetings: "Hello",
	},
	es: {
		greetings: "Hola",
	},
}

export const PreviewUseTranslation = () => {
	const { translate, setLanguage, language } = useTranslation(translations)

	return (
		<Flexbox flexDirection="col" alignItems="start">
			<Text>{translate("greetings")}</Text>

			<Flexbox gap="xs">
				<Button
					onClick={() => setLanguage("en")}
					disabled={language === "en" && true}
				>
					Switch to English
				</Button>
				<Button
					onClick={() => setLanguage("fr")}
					disabled={language === "fr" && true}
				>
					Switch to French
				</Button>
				<Button
					onClick={() => setLanguage("es")}
					disabled={language === "es" && true}
				>
					Switch to Spanish
				</Button>
			</Flexbox>
		</Flexbox>
	)
}
