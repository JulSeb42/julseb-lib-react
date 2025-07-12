interface IDownloadFile {
	blob: Blob
	fileName: string
}

const downloadFile = ({ blob, fileName }: IDownloadFile) => {
	const a = document.createElement("a")
	a.download = fileName
	a.href = window.URL.createObjectURL(blob)
	const clickEvt = new MouseEvent("click", {
		view: window,
		bubbles: true,
		cancelable: true,
	})
	a.dispatchEvent(clickEvt)
	a.remove()
}

/**
 * Hook to export data to JSON or CSV format with automatic file download functionality.
 *
 * @hook
 *
 * @example
 * const { exportToJson, exportToCsv } = useExportData()
 *
 * // Export to JSON
 * const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 * exportToJson(users, 'users-data')
 *
 * // Export to CSV
 * const headers = ['ID', 'Name']
 * exportToCsv(users, 'users-data', headers)
 *
 * @template T - Type of the data objects being exported
 *
 * @returns {object} Object containing export functions
 * @returns {function} returns.exportToJson - Function to export data as JSON file
 * @returns {Array<T>} returns.exportToJson.data - Array of data objects to export
 * @returns {string} returns.exportToJson.fileName - Name for the downloaded file (without extension)
 * @returns {function} returns.exportToCsv - Function to export data as CSV file
 * @returns {Array<T>} returns.exportToCsv.data - Array of data objects to export
 * @returns {string} returns.exportToCsv.fileName - Name for the downloaded file (without extension)
 * @returns {Array<string>} returns.exportToCsv.headers - Array of column headers for the CSV file
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useExportData
 */
export const useExportData = <T,>() => {
	const exportToJson = (data: Array<T>, fileName: string) =>
		downloadFile({
			blob: new Blob([JSON.stringify(data)], {
				type: "application/json",
			}),
			fileName: `${fileName}.json`,
		})

	const exportToCsv = (
		data: Array<T>,
		fileName: string,
		headers: Array<string>,
	) => {
		const rows = [headers.join(","), ...data].join("\n")

		const blob = new Blob([rows], {
			type: "text/csv",
		})

		return downloadFile({
			blob,
			fileName: `${fileName}.csv`,
		})
	}

	return {
		exportToCsv,
		exportToJson,
	}
}
