// Append styles to HTML head

export const appendStyles = (styles: string) => {
    const $style = document.createElement("style")
    document.head.appendChild($style)
    $style.textContent = styles
}
