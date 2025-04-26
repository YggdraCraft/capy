---
sidebar_position: 2
---

# Capy

## Capy

Structure ```capy::Capy``` is a very unique widget. It is the only one that is not derived from the [Widget](./Widget).

```Capy``` is more of a workspace every root widget is located in. It handles inputs, draws widgets on screen, send signals and much more. Every widget in an instance of ```Capy``` can comunicate between each other.

### Definition of structure
```rust
pub struct Capy {
    roots: Vec<Widget>,
}
```

### Methods
```rust
fn new() -> Capy
```
[`Capy::new()`](./new.md) creates a new instance of Capy
