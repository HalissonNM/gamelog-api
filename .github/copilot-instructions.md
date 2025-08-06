# Copilot Instructions for JavaScript Calculator Project

## Project Overview
This is a simple browser-based calculator implemented in vanilla JavaScript. The project consists of three main files:
- `Index.html`: The main HTML file containing the UI and output element.
- `script.js`: Contains all calculator logic and user interaction code.
- `style.css`: Styles the calculator UI.

## Architecture & Data Flow
- The calculator operates on a single variable `n1`, which is initialized from user input via a prompt.
- All operations (add, subtract, multiply, divide) are performed by prompting the user for a second number, updating `n1`, and displaying the result in the `#output` element.
- Functions for each operation (`Somar`, `Subtrair`, `Multiplicar`, `Dividir`) follow a consistent pattern: prompt for input, parse to float, update `n1`, and call `escrever()` to update the UI.

## Key Patterns & Conventions
- All DOM updates are performed via `document.querySelector('#output').innerHTML`.
- User input is always collected using `prompt()` and parsed with `parseFloat()`.
- Function names use Portuguese verbs (e.g., `Somar`, `Subtrair`). Maintain this naming convention for new operations.
- No external libraries or frameworks are used; keep all logic in vanilla JS.
- All logic is in a single script file (`script.js`). Avoid splitting logic into multiple files unless refactoring for scale.

## Developer Workflows
- No build or test system is present. To run or debug, simply open `Index.html` in a browser.
- Changes to `script.js` or `style.css` are reflected immediately upon browser refresh.
- There are no automated tests; manual testing is done via browser interaction.

## Integration Points
- The only integration is with the browser DOM. No backend, API, or external dependencies.
- All user interaction is via browser prompts and DOM updates.

## Examples
- To add a new operation (e.g., exponentiation), follow the pattern:
  ```javascript
  function Exponenciar() {
    var s = prompt('Digite o expoente: ');
    s = parseFloat(s);
    n1 = Math.pow(n1, s);
    escrever();
  }
  ```
- To update the output, always use:
  ```javascript
  var output = document.querySelector('#output');
  output.innerHTML = n1;
  ```

## File References
- Main logic: `JavaScript/script.js`
- UI: `JavaScript/Index.html` (ensure `#output` exists)
- Styles: `JavaScript/style.css`

---
If any section is unclear or missing important project-specific details, please provide feedback for further refinement.
