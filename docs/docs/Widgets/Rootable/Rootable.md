# Rootable
---

## Rootable

**Rootable object** is an object that can be used as a root widget in [Capy](/docs/Widgets/Capy)

Capy provides:
1. [`capy::Rootable`](./Trait.md) trait that defines everything that a widget must be able to do in order to be used as a root 
2. [`capy::ErrRootable`](./Errors.md) enum that lists all the errors that are expected to be dealt with on a root level.

There already are a basic implementation of rootable widget under [`capy::Root`](./Root/Root.md), although some widgets also implement `capy::Rootable`, so it may no be neccecery for you to directly interact with [`capy::Root`](./Root/Root.md) or `capy::Rootable` directly.

---
---
## Rootable Widgets
List of already rootable widgets:
1. [`capy::Root`](./Root/Root.md)
2. //WidgetBox? if it exists
3. //TODO: write soe widgets to list here
