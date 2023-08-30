const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                dm: ['DM Sans', 'sans-serif'],
                mulish: ['Mulish', 'sans-serif'],
            },
            colors: {
                'backdrop': '#F5F6FA', // for page background color
                'primary': { // primary theme color
                    DEFAULT: '#092443',
                    '50': '#EEF1E9',
                    '100': '#586640',
                    '200': '#0C192D',
                    '300': '#062D10',
                    '400': '#475467',
                    '500': '#0A1242',
                    '600': '#101828',
                    '700': '#00D084B2',
                    '800': '#F8F9F6',
                    '900': '#000000'
                },
                'accent': colors.blue, // secondary theme color
                'warning': colors.amber, // for warning messages, statuses etc
                'success': colors.green, // for success messages, statuses etc
                'alert': colors.red, // for error messages, statuses etc
                'info': colors.blue, // for info messages, links etc
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/line-clamp'),
    ],
};