/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./Build/*.html" ],
  theme: {

    extend: {
      screens: {
        "x-sm": "576px",
      },

      fontSize: {
        fluid: "var(--FONT-SIZE)",
        "x-lg": "1.2rem",
        "ultra-lg": "2rem",
      },

      fontFamily: {
        serif: "var(--FONT-FAMILY)",
        merriweather: "var(--FONT-FAMILY-HEADINGS)",
      },

      colors: {
        "bgcolor-fade": "var(--BGCOLOR-FADE)",
        bgcolor: "var(--BGCOLOR)",
        "border-color": "var(--BORDER-COLOR)",

        orange: {
          "ultra-light": "hsl(39, 94%, 81%)",
          light: "hsla(46, 100%, 50%, 0.909)",
          dark: "darkorange",
        },
        green: {
          limegreen: "hsl( 120, 55%, 45%)",
          chartreuse: "hsl(87, 60%, 48%)",
          mantis: "hsl(120, 55%, 62%)"
        },
        slaty: "hsl(0,0%,73%)",
        gray: {
          DEFAULT: "hsl(0, 0%, 20%)",
          davy: "hsl(0, 1%, 28%)",
        }
      },

      maxWidth: {
        800: "800px",
      },

      letterSpacing: {
        "ultra-wide": "0.12em",
      },

      lineHeight: {
        1.15: "1.15",
        1.35: "1.35",
      },

      spacing: {
        "1em": "1em",
      },

      padding: {
        "padding-block": "0.25em",
        "padding-inline": "2.5%",
        "0.5em": "0.5em",
      },

      inset: {
        10000: "10000px",
      },

      margin: {
        "fluid-block": "clamp( 1em, 2.5vh, 1.5em ) 0",
        "0.6em": "0.6em",
      },

      scale: {
        1.3: "1.3",
      },

      keyframes: {
        greet: {
          "0%": {
            top: "-20px",
            transform: "skew(0deg, -5deg) scaleY(0)"
          },

          "80%": {
            top: "40px",
            transform: "skew(10deg, -5deg) scaleY(1.2)"
          },

          "100%": {
            top: "20px",
            transform: "skew(-10deg, -5deg) scaleY(1.2)"
          }
        }
      },

      animation: {
        greet: "greet 0.5s ease-in-out 1s forwards",
      },

      borderWidth: {
        2.4: "2.4px",
      },

      borderRadius: {
        xlg: "15px",
      },
    },
  },
  plugins: [],
}
