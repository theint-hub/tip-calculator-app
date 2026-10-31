# Tip calculator app

My solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io).

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Notes](#notes)
- [Author](#author)

## Overview

Users can:

- Enter a bill amount and the number of people
- Choose a tip from the preset buttons or type a custom percentage
- See the tip amount and total per person update as they type
- See a "Can't be zero" error when the number of people is 0
- Reset everything with the RESET button, which stays disabled while the form is empty
- See the layout change to suit their screen size (mobile and desktop designs)
- See hover, focus and selected states on interactive elements

## Links

- Live site: https://theint-hub.github.io/tip-calculator-app/
- Repository: https://github.com/theint-hub/tip-calculator-app.git

## Built with

- Semantic HTML5
- CSS custom properties (variables)
- CSS Grid and Flexbox
- Mobile-first workflow with a `min-width` media query and `rem` units
- Vanilla JavaScript
- Google Fonts (Space Mono)

## What I learned

- **One calculation function:** a single `calculate()` function reads the bill, tip and number of people, and every input and button handler calls it, so the results never go out of sync.
- **Working with input values:** input values are strings, so I converted them with `Number()` before the math, formatted the results with `toFixed(2)`, and used `Math.max(0, ...)` to block negative tips.
- **Grid and form controls:** an `<input>` has a built-in minimum width that stretched my grid columns. Using `minmax(0, 1fr)` and `min-width: 0` fixed it.
- **Grouping and accessibility:** I used a `fieldset` and `legend` for the tip buttons, `aria-describedby` and `aria-invalid` for the error message, and `aria-live` so screen readers hear the totals change.
- **Toggling states with classes:** an `active` class marks the selected tip button, and the `disabled` attribute controls the RESET button.
- **Input icons:** the `$` and person icons are `background-image` on the inputs, and I used `background-color` so the shorthand did not wipe them.

## Notes

- The free style guide does not list the hover and error colors or the font sizes, so I measured them from the design images. They are close but may not be exact.

## Author

- GitHub: [@theint-hub](https://github.com/theint-hub)
- Frontend Mentor: [@theint-hub](https://www.frontendmentor.io/profile/theint-hub)
