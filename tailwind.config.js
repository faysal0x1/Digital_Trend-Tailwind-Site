const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                //add your own color
                //https://tailwindcss.com/docs/customizing-colors
                primary: "#0C8195",
                hero: "#057A8D",
                featured: "#F0F8FF"
            },
            container: {
                center: true,

            },
            backgroundImage: {
                'hero-pattern': "url('/assets/img/working-girl.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
}