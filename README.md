# Nanotypes.js

A lightweight JavaScript library designed to simplify web development without Node.js or Python dependencies. You can personnalize your experience using the differents files how you want. 

## Installation

Include these script tags in your HTML file:

### Import Main File
```html
<script src="https://raw.githubusercontent.com/Main-April/Nanotypes.js/refs/heads/main/Main/main.js"></script>
```
Main File contain the differents method to interact easily with DOM and setup your own website.
This file includes two parts : one for the DOM interactions and the second for JS writing.

### Complete Setup Example
```html
<!DOCTYPE html>
<html>
<head>
    <title>Unnamed Project</title>
</head>
<body>
    <!-- Your content -->
   <script src="https://raw.githubusercontent.com/Main-April/Nanotypes.js/refs/heads/main/Main/main.js"></script>
</body>
</html>
```

## Usage

### Basic Syntax

You can use the select function to.
Select elements using the `_()` function, like $ Jquey syntax :

```javascript
// Select by ID
_('myButton')
// Or ...
_('#myButton')

// Select by class name
_('my-class')
// Or ...
_('.my-class') 

// Select by HTML tag
_('div')
```

### Method Chaining

Chain multiple methods for cleaner code:

```javascript
_('#myElement')
    .css('background', 'blue')
    .html('innerHTML', 'Hello World!')
    .addEvent('click', handleClick);
```

## Core Methods

### CSS Manipulation
```javascript
// Set individual styles
_('.button').css('background-color', '#007bff');

// Set multiple styles at once
_('#header').css({
    color: 'white',
    fontSize: '24px',
    padding: '20px'
});

// Get computed style value
var color = _('#element').css('color');
```

### Event Handling
```javascript
// Add event listener
_('#submit-btn').addEvent('click', function() {
    alert('Button clicked!');
});

// Remove event listener
_('#submit-btn').remEvent('click', myHandler);

// Shorthand for click events
_('.clickable').click(function() {
    console.log('Element clicked');
});
```

### DOM Manipulation
```javascript
// Change HTML content
_('#content').html('innerHTML', '<p>New content</p>');

// Get HTML content
var content = _('#content').html('innerHTML');

// Set attributes
_('img').attr('src', 'new-image.jpg');

// Get attribute values
var src = _('img').attr('src');
```

### Visibility Control
```javascript
// Toggle display (block/none)
_('#modal').toggle();

// Toggle with custom display value
_('#sidebar').toggle('flex');
```

## Features

- **Lightweight**: Minimal file size for fast loading
- **No Dependencies**: Works directly in any modern browser
- **jQuery-like Syntax**: Familiar API for easy adoption
- **Method Chaining**: Write cleaner, more readable code
- **Plugin System**: Extend functionality with additional modules
