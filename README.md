# EntityJS - Utilities

## Attributes

A small utility which converts an object into HTML attributes.

### Usage

```javascript
var attributes = require('ejs-attributes');
attributes({
  id: 'my-element',
  class: ['class-1', 'class-2']
}); // = id="my-element" class="class-1 class-2"
```
