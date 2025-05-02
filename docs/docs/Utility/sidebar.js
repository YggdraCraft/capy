import { Event } from "./Event/sidebar"
import { Signal } from "./Signal/sidebar"
export function Utility() {
    return {
        type: 'category',
        label: 'Utility',
        link: {
            type: 'doc',
            id: 'Utility/Info',
        },
        items: [
            Event(),
            Signal(),
        ],
    }
}
