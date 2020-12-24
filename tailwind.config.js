// tailwind.config.js
module.exports = {
    purge: ['./public/**/*.html', './public/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#4E3EC8",
                secondary: "#FFBF3A",
                ternary: "#F68059",
                dark: "#161616",
                light: "#F0F1FA"
            }
        },
    },
    variants: {
        padding: ['responsive', 'hover'],
        borderWidth: ['responsive', 'hover'],
    },
    plugins: [],
}