/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                slide: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                slide: "slide 30s infinite linear",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"], // Set Montserrat as the default sans font
            },
            fontWeight: {
                extraLight: 200,
                light: 300,
                normal: 400,
                bold: 700,
            },
        },
    },
    plugins: [],
};
