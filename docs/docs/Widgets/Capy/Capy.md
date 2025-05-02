# Capy
---
## Capy

Structure ```capy::Capy``` is a very unique widget. It is the only one that is not derived from the [Widget](./Widget).

```Capy``` is more of a workspace every root widget is located in. It handles inputs, draws widgets on screen, send signals and much more. Every widget in an instance of ```Capy``` can comunicate between each other.

Every instance of ```capy::Capy``` holds a separate connection to wayland and works independantly of each other.

---
---
## Definition of structure
```rust
pub struct Capy {
    roots: Vec<Root>,
}
```

---
---
## Methods of `capy::Capy`
### [`Capy::new()`](./new.md) 
```rust
fn new() -> Capy
```
Creates a new instance of Capy

### [`Capy::roots(...)`](./roots.md) 
```rust
 fn roots(&self) -> Vec<Root> 
```
Returns Vec of root widgets

### [`Capy::root(...)`](./root.md) 
```rust
fn root(&self, index: u32) -> Option<Root, Err>
```
Returns Root from Vec of roots with index value equal to passed `index: u32` 

### [`Capy::add_root(...)`](./add_root.md) 
```rust
fn add_root(&self, new_root: Root) -> Capy
```
Add new root widget

### [`Capy::remove_root(...)`](./remove_root.md)
```rust
fn remove_root(&self, index: u32) -> Capy
```
Removes root widget with with index value equal to passed `index: u32` 


//TODO: write more about errors in the module
