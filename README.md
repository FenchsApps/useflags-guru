# USE-Flags Guru

An interactive web-based reference for Gentoo Linux USE flags — search and browse USE flags, packages, and their dependencies.

## Features

- **Search** — instant search by flag name, description, or package name
- **All Flags** — full alphabetical list of USE flags with descriptions
- **Dependencies** — displays relationships between flags (requires/conflicts)
- **Packages** — list of popular Gentoo packages with their USE flags

## Text-mode Browser Support

The application is fully accessible in text-mode browsers such as **links**, **lynx**, **w3m**, **elinks**, and others that do not support JavaScript. When JS is unavailable, a static `<noscript>` block is displayed containing the full list of USE flags and packages using semantic HTML markup (`<dl>`/`<dt>`/`<dd>`), which renders correctly in any text-based browser.

```
# Examples:
links index.html
lynx index.html
w3m index.html
```

In graphical browsers with JavaScript enabled, the full interactive interface with real-time search is available.

## Usage

Simply open `index.html` in any browser. No external dependencies required.

## Structure

```
index.html   — main page (includes noscript fallback for text-mode browsers)
main.js      — application logic, flag/package/dependency data
style.css    — styles (terminal theme)
```

## License

See [LICENSE](LICENSE).
