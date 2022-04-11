const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {},
        colors: {
            popupsbg: colors.white,
            neutral: colors.slate,
            primary: colors.blue,
            primarytxt: colors.white,
            warning: colors.amber,
            warningtxt: colors.black,
            error: colors.red,
            errortxt: colors.white,
        }
    },
    variants: {},
    plugins: [],
}