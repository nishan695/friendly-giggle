🎨 2. CSS — Design and layout
CSS = Cascading Style Sheets.
HTML gives you the structure; CSS makes it look good.
Fundamentals
CSS syntax
Inline CSS
Internal CSS
External CSS
Selectors
Element selector
Class selector
ID selector
Universal selector
Attribute selector
Descendant selector
Child selector
Pseudo-classes
Pseudo-elements
Example:
.card {
    background: white;
    padding: 20px;
    border: 1px solid black;
}
📦 CSS Box Model
This is VERY important.
        Margin
   ┌───────────────┐
   │    Border     │
   │ ┌───────────┐ │
   │ │  Padding  │ │
   │ │ ┌───────┐ │ │
   │ │ │Content│ │ │
   │ │ └───────┘ │ │
   │ └───────────┘ │
   └───────────────┘
Learn:
width
height
padding
border
margin
box-sizing
Especially:
* {
    box-sizing: border-box;
}
🎯 CSS layout
Flexbox
You must become comfortable with:
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
Learn:
flex-direction
justify-content
align-items
align-content
flex-wrap
gap
flex-grow
flex-shrink
flex-basis
Grid
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
Learn:
columns
rows
fr
gap
grid-template-columns
grid-template-rows
grid-column
grid-row
🌈 CSS styling
Learn:
Colors
HEX
RGB
RGBA
HSL
Gradients
Backgrounds
Borders
Border radius
Shadows
Opacity
Fonts
Text styling
Icons
object-fit
Positioning
Very important:
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
Understand relative + absolute especially.
📱 Responsive CSS
Learn:
Responsive design
Media queries
Mobile-first design
%
rem
em
vw
vh
min()
max()
clamp()
Example:
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
✨ Advanced CSS
After fundamentals:
Transitions
Transform
Animations
Keyframes
CSS variables
calc()
clamp()
Advanced selectors
Specificity
Inheritance
Cascade
Overflow
Z-index
CSS architecture
Component-based styling
Example:
:root {
    --primary: #2563eb;
}

button {
    background: var(--primary);
}