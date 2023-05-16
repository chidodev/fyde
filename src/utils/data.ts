import { IItem, INavbarLink } from "@/types";
import { AiOutlineHome } from 'react-icons/ai'
import { FcSmartphoneTablet } from 'react-icons/fc'
import { FiHelpCircle } from 'react-icons/fi'
import { BiChat, BiToggleLeft } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { BsBatteryFull, BsBatteryHalf } from 'react-icons/bs'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export const navbarLinks: INavbarLink[] = [
    {
        href: "#",
        name: "Home",
        icon: AiOutlineHome,
        label: "home"

    },
    {
        href: "/",
        name: "Task",
        icon: FcSmartphoneTablet,
        label: "tasks"

    },
    {
        href: "/",
        name: "User",
        icon: FaRegUser,
        label: "user"

    },
    {
        href: "#",
        name: "Messages",
        icon: BiChat,
        label: "chat"

    },
    {
        href: "/",
        name: "Help",
        icon: FiHelpCircle,
        label: "help"

    },
]

export const items: IItem[] = [
    {
        heading: "All Projects",
        subItems: [
            {
                name: ""
            }
        ]
    },
    {
        heading: "Not Started",
        icon: BiToggleLeft,
        subItems: [
            {
                name: ""
            }
        ]
    },
    {
        heading: "In Progress",
        icon: BsBatteryHalf,
        subItems: [
            {
                name: "World News"
            },
            {
                name: "Project CRM"
            },
            {
                name: "Trading Company"
            },
            {
                name: "GMB Vault"
            }
        ]
    },
    {
        heading: "Nearing Deadline",
        icon: BsBatteryFull,
        subItems: [
            {
                name: "World News"
            },
            {
                name: "Project CRM"
            },
            {
                name: "Trading Company"
            },
            {
                name: "GMB Vault"
            }
        ]
    },
    {
        heading: "Done",
        icon: IoMdCheckmarkCircleOutline,
        subItems: [
            {
                name: "World News"
            },
            {
                name: "Project CRM"
            },
            {
                name: "Trading Company"
            },
            {
                name: "GMB Vault"
            }
        ]
    },
]
