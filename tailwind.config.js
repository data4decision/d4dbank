export default {
  theme: {
    extend: {
      animation: {
        slideInFromTop: 'slideInFromTop 1s ease-out',
        slideInFromBottom: 'slideInFromBottom 1s ease-out',
      },
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
