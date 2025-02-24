###  Could not find a declaration file for module 'react-scroll'. 'c:/Users/SANDA/Desktop/Portfolio/node_modules/react-scroll/modules/index.js' implicitly has an 'any' type. Try npm i --save-dev @types/react-scroll if it exists or add a new declaration (.d.ts) file containing declare module 'react-scroll'; To fix the error, you need to install the type definitions for react-scroll.

How Does It Work? (md -> medium)
    When screen width ≥ 768px (md breakpoint):
    hidden is overridden by md:flex, making the navigation visible.
    The items are displayed using flexbox (display: flex).

When screen width < 768px:
    The hidden class remains in effect (display: none).
    The navigation items are not rendered in the layout.
