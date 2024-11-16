/*=============================================== Helpers ===============================================*/

type Helper = {
    name: string
    effect: string
}

export const allHelpers: Array<Helper> = [
    {
        name: ".text-left",
        effect: "Align the text to the left",
    },
    {
        name: ".text-center",
        effect: "Align the text to the center",
    },
    {
        name: ".text-right",
        effect: "Align the text to the right",
    },
    {
        name: ".clear-float",
        effect: "Clear all floats",
    },
    {
        name: ".hidden",
        effect: "Hide the element",
    },
    {
        name: ".no-marg",
        effect: "Sets all margins to 0",
    },
    {
        name: ".no-marg-top",
        effect: "Sets the margin top to 0",
    },
    {
        name: ".no-marg-bottom",
        effect: "Sets the margin bottom to 0",
    },
    {
        name: ".no-marg-left",
        effect: "Sets the margin left to 0",
    },
    {
        name: ".no-marg-right",
        effect: "Sets the margin right to 0",
    },
    {
        name: ".no-padd",
        effect: "Sets all paddings to 0",
    },
    {
        name: ".no-padd-top",
        effect: "Sets the padding top to 0",
    },
    {
        name: ".no-padd-bottom",
        effect: "Sets the padding bottom to 0",
    },
    {
        name: ".no-padd-left",
        effect: "Sets the padding left to 0",
    },
    {
        name: ".no-padd-right",
        effect: "Sets the padding right to 0",
    },
    {
        name: ".no-select",
        effect: "Disable user-select",
    },
    {
        name: ".center",
        effect: "Add a flexbox and center all elements",
    },
    {
        name: ".bg-black",
        effect: "Sets the background color to black",
    },
    {
        name: ".bg-white",
        effect: "Sets the background color to white",
    },
    {
        name: ".bg-gray-50",
        effect: "Sets the background color to gray 50",
    },
    {
        name: ".bg-gray-100",
        effect: "Sets the background color to gray 100",
    },
    {
        name: ".bg-gray-200",
        effect: "Sets the background color to gray 200",
    },
    {
        name: ".bg-gray-300",
        effect: "Sets the background color to gray 300",
    },
    {
        name: ".bg-gray-400",
        effect: "Sets the background color to gray 400",
    },
    {
        name: ".bg-gray-500",
        effect: "Sets the background color to gray 500",
    },
    {
        name: ".bg-gray-600",
        effect: "Sets the background color to gray 600",
    },
    {
        name: ".bg-gray-700",
        effect: "Sets the background color to gray 700",
    },
    {
        name: ".bg-gray-800",
        effect: "Sets the background color to gray 800",
    },
    {
        name: ".bg-gray-900",
        effect: "Sets the background color to gray 900",
    },
    {
        name: ".bg-primary-50",
        effect: "Sets the background color to primary 50",
    },
    {
        name: ".bg-primary-100",
        effect: "Sets the background color to primary 100",
    },
    {
        name: ".bg-primary-200",
        effect: "Sets the background color to primary 200",
    },
    {
        name: ".bg-primary-300",
        effect: "Sets the background color to primary 300",
    },
    {
        name: ".bg-primary-400",
        effect: "Sets the background color to primary 400",
    },
    {
        name: ".bg-primary-500",
        effect: "Sets the background color to primary 500",
    },
    {
        name: ".bg-primary-600",
        effect: "Sets the background color to primary 600",
    },
    {
        name: ".bg-primary-700",
        effect: "Sets the background color to primary 700",
    },
    {
        name: ".bg-primary-800",
        effect: "Sets the background color to primary 800",
    },
    {
        name: ".bg-primary-900",
        effect: "Sets the background color to primary 900",
    },
    {
        name: ".bg-secondary-50",
        effect: "Sets the background color to secondary 50",
    },
    {
        name: ".bg-secondary-100",
        effect: "Sets the background color to secondary 100",
    },
    {
        name: ".bg-secondary-200",
        effect: "Sets the background color to secondary 200",
    },
    {
        name: ".bg-secondary-300",
        effect: "Sets the background color to secondary 300",
    },
    {
        name: ".bg-secondary-400",
        effect: "Sets the background color to secondary 400",
    },
    {
        name: ".bg-secondary-500",
        effect: "Sets the background color to secondary 500",
    },
    {
        name: ".bg-secondary-600",
        effect: "Sets the background color to secondary 600",
    },
    {
        name: ".bg-secondary-700",
        effect: "Sets the background color to secondary 700",
    },
    {
        name: ".bg-secondary-800",
        effect: "Sets the background color to secondary 800",
    },
    {
        name: ".bg-secondary-900",
        effect: "Sets the background color to secondary 900",
    },
    {
        name: ".bg-success-50",
        effect: "Sets the background color to success 50",
    },
    {
        name: ".bg-success-100",
        effect: "Sets the background color to success 100",
    },
    {
        name: ".bg-success-200",
        effect: "Sets the background color to success 200",
    },
    {
        name: ".bg-success-300",
        effect: "Sets the background color to success 300",
    },
    {
        name: ".bg-success-400",
        effect: "Sets the background color to success 400",
    },
    {
        name: ".bg-success-500",
        effect: "Sets the background color to success 500",
    },
    {
        name: ".bg-success-600",
        effect: "Sets the background color to success 600",
    },
    {
        name: ".bg-success-700",
        effect: "Sets the background color to success 700",
    },
    {
        name: ".bg-success-800",
        effect: "Sets the background color to success 800",
    },
    {
        name: ".bg-success-900",
        effect: "Sets the background color to success 900",
    },
    {
        name: ".bg-danger-50",
        effect: "Sets the background color to danger 50",
    },
    {
        name: ".bg-danger-100",
        effect: "Sets the background color to danger 100",
    },
    {
        name: ".bg-danger-200",
        effect: "Sets the background color to danger 200",
    },
    {
        name: ".bg-danger-300",
        effect: "Sets the background color to danger 300",
    },
    {
        name: ".bg-danger-400",
        effect: "Sets the background color to danger 400",
    },
    {
        name: ".bg-danger-500",
        effect: "Sets the background color to danger 500",
    },
    {
        name: ".bg-danger-600",
        effect: "Sets the background color to danger 600",
    },
    {
        name: ".bg-danger-700",
        effect: "Sets the background color to danger 700",
    },
    {
        name: ".bg-danger-800",
        effect: "Sets the background color to danger 800",
    },
    {
        name: ".bg-danger-900",
        effect: "Sets the background color to danger 900",
    },
    {
        name: ".bg-warning-50",
        effect: "Sets the background color to warning 50",
    },
    {
        name: ".bg-warning-100",
        effect: "Sets the background color to warning 100",
    },
    {
        name: ".bg-warning-200",
        effect: "Sets the background color to warning 200",
    },
    {
        name: ".bg-warning-300",
        effect: "Sets the background color to warning 300",
    },
    {
        name: ".bg-warning-400",
        effect: "Sets the background color to warning 400",
    },
    {
        name: ".bg-warning-500",
        effect: "Sets the background color to warning 500",
    },
    {
        name: ".bg-warning-600",
        effect: "Sets the background color to warning 600",
    },
    {
        name: ".bg-warning-700",
        effect: "Sets the background color to warning 700",
    },
    {
        name: ".bg-warning-800",
        effect: "Sets the background color to warning 800",
    },
    {
        name: ".bg-warning-900",
        effect: "Sets the background color to warning 900",
    },
    {
        name: ".font-black",
        effect: "Sets the font color to black",
    },
    {
        name: ".font-white",
        effect: "Sets the font color to white",
    },
    {
        name: ".font-gray-50",
        effect: "Sets the font color to gray 50",
    },
    {
        name: ".font-gray-100",
        effect: "Sets the font color to gray 100",
    },
    {
        name: ".font-gray-200",
        effect: "Sets the font color to gray 200",
    },
    {
        name: ".font-gray-300",
        effect: "Sets the font color to gray 300",
    },
    {
        name: ".font-gray-400",
        effect: "Sets the font color to gray 400",
    },
    {
        name: ".font-gray-500",
        effect: "Sets the font color to gray 500",
    },
    {
        name: ".font-gray-600",
        effect: "Sets the font color to gray 600",
    },
    {
        name: ".font-gray-700",
        effect: "Sets the font color to gray 700",
    },
    {
        name: ".font-gray-800",
        effect: "Sets the font color to gray 800",
    },
    {
        name: ".font-gray-900",
        effect: "Sets the font color to gray 900",
    },
    {
        name: ".font-primary-50",
        effect: "Sets the font color to primary 50",
    },
    {
        name: ".font-primary-100",
        effect: "Sets the font color to primary 100",
    },
    {
        name: ".font-primary-200",
        effect: "Sets the font color to primary 200",
    },
    {
        name: ".font-primary-300",
        effect: "Sets the font color to primary 300",
    },
    {
        name: ".font-primary-400",
        effect: "Sets the font color to primary 400",
    },
    {
        name: ".font-primary-500",
        effect: "Sets the font color to primary 500",
    },
    {
        name: ".font-primary-600",
        effect: "Sets the font color to primary 600",
    },
    {
        name: ".font-primary-700",
        effect: "Sets the font color to primary 700",
    },
    {
        name: ".font-primary-800",
        effect: "Sets the font color to primary 800",
    },
    {
        name: ".font-primary-900",
        effect: "Sets the font color to primary 900",
    },
    {
        name: ".font-secondary-50",
        effect: "Sets the font color to secondary 50",
    },
    {
        name: ".font-secondary-100",
        effect: "Sets the font color to secondary 100",
    },
    {
        name: ".font-secondary-200",
        effect: "Sets the font color to secondary 200",
    },
    {
        name: ".font-secondary-300",
        effect: "Sets the font color to secondary 300",
    },
    {
        name: ".font-secondary-400",
        effect: "Sets the font color to secondary 400",
    },
    {
        name: ".font-secondary-500",
        effect: "Sets the font color to secondary 500",
    },
    {
        name: ".font-secondary-600",
        effect: "Sets the font color to secondary 600",
    },
    {
        name: ".font-secondary-700",
        effect: "Sets the font color to secondary 700",
    },
    {
        name: ".font-secondary-800",
        effect: "Sets the font color to secondary 800",
    },
    {
        name: ".font-secondary-900",
        effect: "Sets the font color to secondary 900",
    },
    {
        name: ".font-success-50",
        effect: "Sets the font color to success 50",
    },
    {
        name: ".font-success-100",
        effect: "Sets the font color to success 100",
    },
    {
        name: ".font-success-200",
        effect: "Sets the font color to success 200",
    },
    {
        name: ".font-success-300",
        effect: "Sets the font color to success 300",
    },
    {
        name: ".font-success-400",
        effect: "Sets the font color to success 400",
    },
    {
        name: ".font-success-500",
        effect: "Sets the font color to success 500",
    },
    {
        name: ".font-success-600",
        effect: "Sets the font color to success 600",
    },
    {
        name: ".font-success-700",
        effect: "Sets the font color to success 700",
    },
    {
        name: ".font-success-800",
        effect: "Sets the font color to success 800",
    },
    {
        name: ".font-success-900",
        effect: "Sets the font color to success 900",
    },
    {
        name: ".font-danger-50",
        effect: "Sets the font color to danger 50",
    },
    {
        name: ".font-danger-100",
        effect: "Sets the font color to danger 100",
    },
    {
        name: ".font-danger-200",
        effect: "Sets the font color to danger 200",
    },
    {
        name: ".font-danger-300",
        effect: "Sets the font color to danger 300",
    },
    {
        name: ".font-danger-400",
        effect: "Sets the font color to danger 400",
    },
    {
        name: ".font-danger-500",
        effect: "Sets the font color to danger 500",
    },
    {
        name: ".font-danger-600",
        effect: "Sets the font color to danger 600",
    },
    {
        name: ".font-danger-700",
        effect: "Sets the font color to danger 700",
    },
    {
        name: ".font-danger-800",
        effect: "Sets the font color to danger 800",
    },
    {
        name: ".font-danger-900",
        effect: "Sets the font color to danger 900",
    },
    {
        name: ".font-warning-50",
        effect: "Sets the font color to warning 50",
    },
    {
        name: ".font-warning-100",
        effect: "Sets the font color to warning 100",
    },
    {
        name: ".font-warning-200",
        effect: "Sets the font color to warning 200",
    },
    {
        name: ".font-warning-300",
        effect: "Sets the font color to warning 300",
    },
    {
        name: ".font-warning-400",
        effect: "Sets the font color to warning 400",
    },
    {
        name: ".font-warning-500",
        effect: "Sets the font color to warning 500",
    },
    {
        name: ".font-warning-600",
        effect: "Sets the font color to warning 600",
    },
    {
        name: ".font-warning-700",
        effect: "Sets the font color to warning 700",
    },
    {
        name: ".font-warning-800",
        effect: "Sets the font color to warning 800",
    },
    {
        name: ".font-warning-900",
        effect: "Sets the font color to warning 900",
    },
    {
        name: ".border-black",
        effect: "Sets the border color to black",
    },
    {
        name: ".border-white",
        effect: "Sets the border color to white",
    },
    {
        name: ".border-gray-50",
        effect: "Sets the border color to gray 50",
    },
    {
        name: ".border-gray-100",
        effect: "Sets the border color to gray 100",
    },
    {
        name: ".border-gray-200",
        effect: "Sets the border color to gray 200",
    },
    {
        name: ".border-gray-300",
        effect: "Sets the border color to gray 300",
    },
    {
        name: ".border-gray-400",
        effect: "Sets the border color to gray 400",
    },
    {
        name: ".border-gray-500",
        effect: "Sets the border color to gray 500",
    },
    {
        name: ".border-gray-600",
        effect: "Sets the border color to gray 600",
    },
    {
        name: ".border-gray-700",
        effect: "Sets the border color to gray 700",
    },
    {
        name: ".border-gray-800",
        effect: "Sets the border color to gray 800",
    },
    {
        name: ".border-gray-900",
        effect: "Sets the border color to gray 900",
    },
    {
        name: ".border-primary-50",
        effect: "Sets the border color to primary 50",
    },
    {
        name: ".border-primary-100",
        effect: "Sets the border color to primary 100",
    },
    {
        name: ".border-primary-200",
        effect: "Sets the border color to primary 200",
    },
    {
        name: ".border-primary-300",
        effect: "Sets the border color to primary 300",
    },
    {
        name: ".border-primary-400",
        effect: "Sets the border color to primary 400",
    },
    {
        name: ".border-primary-500",
        effect: "Sets the border color to primary 500",
    },
    {
        name: ".border-primary-600",
        effect: "Sets the border color to primary 600",
    },
    {
        name: ".border-primary-700",
        effect: "Sets the border color to primary 700",
    },
    {
        name: ".border-primary-800",
        effect: "Sets the border color to primary 800",
    },
    {
        name: ".border-primary-900",
        effect: "Sets the border color to primary 900",
    },
    {
        name: ".border-secondary-50",
        effect: "Sets the border color to secondary 50",
    },
    {
        name: ".border-secondary-100",
        effect: "Sets the border color to secondary 100",
    },
    {
        name: ".border-secondary-200",
        effect: "Sets the border color to secondary 200",
    },
    {
        name: ".border-secondary-300",
        effect: "Sets the border color to secondary 300",
    },
    {
        name: ".border-secondary-400",
        effect: "Sets the border color to secondary 400",
    },
    {
        name: ".border-secondary-500",
        effect: "Sets the border color to secondary 500",
    },
    {
        name: ".border-secondary-600",
        effect: "Sets the border color to secondary 600",
    },
    {
        name: ".border-secondary-700",
        effect: "Sets the border color to secondary 700",
    },
    {
        name: ".border-secondary-800",
        effect: "Sets the border color to secondary 800",
    },
    {
        name: ".border-secondary-900",
        effect: "Sets the border color to secondary 900",
    },
    {
        name: ".border-success-50",
        effect: "Sets the border color to success 50",
    },
    {
        name: ".border-success-100",
        effect: "Sets the border color to success 100",
    },
    {
        name: ".border-success-200",
        effect: "Sets the border color to success 200",
    },
    {
        name: ".border-success-300",
        effect: "Sets the border color to success 300",
    },
    {
        name: ".border-success-400",
        effect: "Sets the border color to success 400",
    },
    {
        name: ".border-success-500",
        effect: "Sets the border color to success 500",
    },
    {
        name: ".border-success-600",
        effect: "Sets the border color to success 600",
    },
    {
        name: ".border-success-700",
        effect: "Sets the border color to success 700",
    },
    {
        name: ".border-success-800",
        effect: "Sets the border color to success 800",
    },
    {
        name: ".border-success-900",
        effect: "Sets the border color to success 900",
    },
    {
        name: ".border-danger-50",
        effect: "Sets the border color to danger 50",
    },
    {
        name: ".border-danger-100",
        effect: "Sets the border color to danger 100",
    },
    {
        name: ".border-danger-200",
        effect: "Sets the border color to danger 200",
    },
    {
        name: ".border-danger-300",
        effect: "Sets the border color to danger 300",
    },
    {
        name: ".border-danger-400",
        effect: "Sets the border color to danger 400",
    },
    {
        name: ".border-danger-500",
        effect: "Sets the border color to danger 500",
    },
    {
        name: ".border-danger-600",
        effect: "Sets the border color to danger 600",
    },
    {
        name: ".border-danger-700",
        effect: "Sets the border color to danger 700",
    },
    {
        name: ".border-danger-800",
        effect: "Sets the border color to danger 800",
    },
    {
        name: ".border-danger-900",
        effect: "Sets the border color to danger 900",
    },
    {
        name: ".border-warning-50",
        effect: "Sets the border color to warning 50",
    },
    {
        name: ".border-warning-100",
        effect: "Sets the border color to warning 100",
    },
    {
        name: ".border-warning-200",
        effect: "Sets the border color to warning 200",
    },
    {
        name: ".border-warning-300",
        effect: "Sets the border color to warning 300",
    },
    {
        name: ".border-warning-400",
        effect: "Sets the border color to warning 400",
    },
    {
        name: ".border-warning-500",
        effect: "Sets the border color to warning 500",
    },
    {
        name: ".border-warning-600",
        effect: "Sets the border color to warning 600",
    },
    {
        name: ".border-warning-700",
        effect: "Sets the border color to warning 700",
    },
    {
        name: ".border-warning-800",
        effect: "Sets the border color to warning 800",
    },
    {
        name: ".border-warning-900",
        effect: "Sets the border color to warning 900",
    },
    {
        name: ".radius-xxl",
        effect: "Add a border radius of 24px",
    },
    {
        name: ".radius-xl",
        effect: "Add a border radius of 16px",
    },
    {
        name: ".radius-l",
        effect: "Add a border radius of 12px",
    },
    {
        name: ".radius-m",
        effect: "Add a border radius of 8px",
    },
    {
        name: ".radius-s",
        effect: "Add a border radius of 4px",
    },
    {
        name: ".radius-xs",
        effect: "Add a border radius of 2px",
    },
    {
        name: ".radius-round",
        effect: "Add a border radius of 99em",
    },
    {
        name: ".radius-circle",
        effect: "Add a border radius of 50%",
    },
    {
        name: ".shadow-xxl",
        effect: "Add a shadow XXL",
    },
    {
        name: ".shadow-xl",
        effect: "Add a shadow XL",
    },
    {
        name: ".shadow-l",
        effect: "Add a shadow L",
    },
    {
        name: ".shadow-m",
        effect: "Add a shadow M",
    },
    {
        name: ".shadow-s",
        effect: "Add a shadow S",
    },
    {
        name: ".shadow-xs",
        effect: "Add a shadow XS",
    },
]
