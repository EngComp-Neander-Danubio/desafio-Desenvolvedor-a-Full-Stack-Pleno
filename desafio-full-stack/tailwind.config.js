import flowbiteReact from "flowbite-react/plugin/tailwindcss";

// tailwind.config.js
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}", ".flowbite-react\\class-list.json"],
    theme: {
        extend: {
            colors: {
                navbar: "#001E2E",
                customBackground: "#001622",
                customBorder: "#002D44"
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"]
            }
        }
    },
    plugins: [flowbiteReact]
};