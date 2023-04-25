module.exports = {
    content: ["./src/js/**/*.js", "../**/*.html"],
    darkMode: false,
    theme: {
        container: {
          center: true,
          padding: {
              DEFAULT: '16px',
              'xl': '32px',
          },
        },
        fontFamily: {
            'actay': '"Actay", sans-serif',
            'presicav': '"Presicav", sans-serif',
            'poppins': '"Poppins", sans-serif',
        },
        extend: {
            fontWeight: {
                '900': '900',
            },
            fontSize: {
                '40px': '40px',
                '36px': '36px',
                '24px': '24px',
                '20px': '20px',
                '16px': '16px',
                '14px': '14px',
            },
            colors: {
                'main': {
                    'blue': '#0055B8',
                    'blue-43': '#2E5279',
                    'yellow': '#FED118',
                    'black': '#242424',
                    'black-80': 'rgba(36, 36, 36, 0.8)',
                    'black-58': 'rgba(36, 36, 36, 0.58)',
                    'black-19': 'rgba(36, 36, 36, 0.19)',
                    'black-70': 'rgba(36, 36, 36, 0.69)',
                }
            },
            screens: {
                'xl': '1240px',
                '2xl': '1304px',
            },
            lineHeight: {
                '130': '130%',
                '115': '115%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}