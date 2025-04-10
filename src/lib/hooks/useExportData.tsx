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
 * @description Hook to export data to JSON or CSV
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useExportData
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
        headers: Array<string>
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
