/*=============================================== Append styles ===============================================*/

// Append styles to HTML head

export function appendStyles(styles: string) {
    const $style = document.createElement("style")
    document.head.appendChild($style)
    $style.textContent = styles
}
