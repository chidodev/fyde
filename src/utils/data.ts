import { INavbarLink } from "@/types";
import { AiOutlineHome } from 'react-icons/ai'
import { FcSmartphoneTablet } from 'react-icons/fc'
import { FiHelpCircle } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'

export const navbarLinks: INavbarLink[] = [
    {
        href: "#",
        name: "Home",
        icon: AiOutlineHome,
        label:"home"
        
    },
    {
        href: "/",
        name: "Task",
        icon: FcSmartphoneTablet,
        label:"tasks"
        
    },
    {
        href: "/",
        name: "User",
        icon: FaRegUser,
        label:"user"
        
    },
    {
        href: "#",
        name: "Messages",
        icon: BiChat,
        label:"chat"
        
    },
    {
        href: "/",
        name: "Help",
        icon: FiHelpCircle,
        label:"help"
        
    },
]