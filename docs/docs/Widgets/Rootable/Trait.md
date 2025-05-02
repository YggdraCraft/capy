# Trait `capy::Rootable`
---

Trait `capy::Rootable` defines everything that a root widgets needs to implement to be used as a root in [Capy](/docs/Widgets/Capy)

**Root widget** is a widget that handles:
1. Display of its children widgets
2. Passing the events recieved by Capy to all its children
3. Recieving events from children

---
---
## Methods
### `Rootable::new()`
```rust
fn new() -> Self
```
Function created new Rootable object

### `Rootable::show_tree(...)`
```rust
fn show(&self) -> Option<Self, Err>
```
Method makes objects of currents tree visible

### `Rootable::hide_tree(...)`
```rust
fn hide(&self) -> Option<Self, Err>
```
Method makes objects of currents tree invisible

### `Rootable::push_event(...)`
```rust
fn push_event(&self, /*//TODO events*/) -> Option<Self, Err>
```
Pushes events to all it's children

//TODO boilerblate. Maybe fix with using `: Widgetable`
### `Rootable::children(...)`
### `Rootable::child(...)`
### `Rootable::add_child(...)`
### `Rootable::remove_child(...)`
