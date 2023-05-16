import { IItem, INavbarLink } from "@/types";
import { AiFillHome, AiOutlineFileText, AiOutlineHome } from 'react-icons/ai'
import { FcSmartphoneTablet } from 'react-icons/fc'
import { FiHelpCircle } from 'react-icons/fi'
import { BiChat, BiTask, BiToggleLeft } from 'react-icons/bi'
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

export const navigation = [
    {
        icon: AiFillHome,
        name: "Home"
    },
    {
        icon: BiTask,
        name: "Tasks",
    },
    {
        icon: AiOutlineFileText,
        name: "Invoices & Documents"
    },
]

export const statistics = [
    {
        name: "Yours & total time",
        label: "h",
        labelColor: "yellow-600",
        value: "03:09",
        subValue: "05:21"
    }, {
        name: "Yours & total earnings",
        label: "$",
        labelColor: "green-600",
        value: "1,695.00",
        subValue: "4,695.00"
    }, {
        name: "Project Progress",
        label: "%",
        labelColor: "blue-600",
        value: "34%",
        subValue: "34/100"
    },
]

export const users = [
    {
        id:1,
        names:"Kolin Farads",
        profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:2,
        names:"Nikolas Pickles",
        profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:3,
        names:"Kolin Farads",
        profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:4,
        names:"Kolin Farads",
        profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:5,
        names:"Kolin Farads",
        profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
]

export const tasks  =[
    {
        name:"Request Server username and password",
        status:"progressing",
        time:"02:54",
        assignees:[

        ]
    }
]

