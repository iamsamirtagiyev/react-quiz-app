/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 20px 5px rgba(79, 70, 229, .5)",
      },
      keyframes: {
        overlay: {
          "0%": { scale: "0  0.004" },
          "33%": { scale: "1 0.004" },
          "66%, 100%": { scale: "1 1" },
        },
        modal: {
          "0%, 66%": {
            opacity: "0",
            visibility: "hidden",
            transform: "translate(-50%, -40%)",
          },
          "100%": {
            opacity: "1",
            visibility: "visible"
          }
        },
      },
      animation: {
        "overlay": "overlay 1s both",
        "modal": "modal 1s"
      }
    },
  },
  plugins: [],
};
