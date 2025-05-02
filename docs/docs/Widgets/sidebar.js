import { Capy } from "./Capy/sidebar"
import { Rootable } from "./Rootable/sidebar"

export function Widgets() {
    return {
        type: 'category',
        label: 'Widgets',
        link: {
            type: 'doc',
            id: 'Widgets/WhatIs',
        },
        items: [
            Capy(),
            Rootable(),
            "Widgets/Widget",
        ],
    }
}
