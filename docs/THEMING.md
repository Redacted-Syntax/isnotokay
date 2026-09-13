# Theming

Two themes. Both pulled from your own projects, nothing invented.

| | Dark | Light |
| --- | --- | --- |
| Background | `#0a0a0c` near-black | `#f5efe6` cream (Madlib) |
| Accent | `#dc3232` red (Toggle.jsx) | `#e94b8a` pink (Toggle.jsx) |
| Second | `#ff5555` | `#d668b5` orchid (Toggle.jsx) |
| Feel | glitchy, techy, 3am | warm paper, soft, daytime |

The reds and pinks are the exact values from `Toggle.jsx` in
the-final-project. The cream is the `background-color` from the Madlib pen.
You already made these choices; this just moves them over.

## How the switch works

1. `src/context/ThemeContext.jsx` keeps track of which theme is on.
2. It writes `data-theme="dark"` or `data-theme="light"` onto the `<html>`
   element.
3. `src/styles/theme.css` has one block per theme. The browser swaps every
   token at once.
4. The choice is saved in localStorage, so it sticks between visits.

First visit, in order: their saved choice, then their operating system
setting, then dark.

## Changing a color

`src/styles/theme.css`. Find the theme you want and change the value.

```css
[data-theme="dark"] {
  --accent: #dc3232;   /* every button, label, link, active nav item */
}
```

One edit, whole theme follows. **Never type a hex code in a component** -
that is the one rule that keeps this working.

## Adding a third theme

1. Copy a whole `[data-theme="..."]` block in `theme.css` and rename it.
2. Make sure it defines **every** token the others do, or things go
   invisible.
3. Update `toggleTheme` in `ThemeContext.jsx` to cycle through three instead
   of flipping between two.

## The glitch effect

Dark mode only, in `src/styles/glitch.css`.

Two copies of the text sit over the real one, one red and one cyan, nudged a
pixel or two on a loop. That is the trick behind every glitch effect you
have ever seen.

To use it, the element needs `data-text` matching its own words:

```jsx
<h1 className="glitch" data-text="Not okay">Not okay</h1>
```

It is subtle on purpose - still for 92% of the loop, then a quick stutter.
A constant twitch is exhausting, and heavy glitch makes text harder to read
for exactly the people least able to deal with that right now.

There are also faint scanlines over the whole page in dark mode. Low enough
that you feel it rather than see it. To kill them, delete the
`.shell::after` rule.

Both effects turn themselves off for anyone whose OS says
`prefers-reduced-motion`.

## Light mode and the crisis banner

Worth checking by eye: the crisis banner uses `--accent-soft` for its
background, which in light mode is a pale pink. Make sure the text on it
stays clearly readable. That banner is the one element on the site where
contrast matters more than looks.
