export const transformSearchKeys = (keys: Array<string>): Array<string> => {
    return keys.map(key =>
        key.includes("Key")
            ? key.replace("Key", "")
            : key === "Command"
            ? "⌘"
            : key === "Enter"
            ? "↵"
            : key === "Control"
            ? "Ctrl"
            : key
    )
}
