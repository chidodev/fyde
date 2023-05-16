import { IconType } from "react-icons"

export interface INavbarLink {
    name: string
    href: string
    icon: IconType
    label: "home" | "tasks" | "user" | "chat" | "help"
}