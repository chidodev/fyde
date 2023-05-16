import { IconType } from "react-icons"

export interface INavbarLink {
    name: string
    href: string
    icon: IconType
    label: "home" | "tasks" | "user" | "chat" | "help"
}

export interface IItem {
    icon?: IconType
    heading: string,
    subItems: {
        name: string
        nref?: string
    }[]
}
