module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#001622',
                secondary: '#002D44',
                accent: '#00B4D8',
                blue_button: '#0095E4',
                background_color: 'blue-15',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                72: '18rem',
                84: '21rem',
            },
            borderRadius: {
                xl: '1.5rem',
            },
        },
    },
    plugins: [],
};
