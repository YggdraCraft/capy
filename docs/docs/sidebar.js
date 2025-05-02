import { Widgets } from "./Widgets/sidebar"
import { Utility } from "./Utility/sidebar"

export function docs(){
    return {
        Documentation: [
            'Intro',
            'QuickStart',
            {
                type: 'category',
                label: 'Guides',
                items: [
                    "Guides/Basic",
                    "Guides/Widget",
                    "Guides/RootWidget",
                ],
            },
            {
                type: 'category',
                label: 'Examples',
                items: [
                    'Examples/Initialisation',
                ],
            },
            Widgets(),
            Utility(),
        ],
    }
}
