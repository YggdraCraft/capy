import { Root } from "./Root/sidebar"

export function Rootable(){
    return {
        type: 'category',
        label: 'Rootable',
        link: {
            type: 'doc',
            id: 'Widgets/Rootable/Rootable',
        },
        items: 
        [
            {
                type: 'doc',
                id: 'Widgets/Rootable/Trait',
                label: 'Trait'
            },
            {
                type: 'doc',
                id: 'Widgets/Rootable/Errors',
                label: 'Errors'
            },
            Root(),
        ]
    }
}
