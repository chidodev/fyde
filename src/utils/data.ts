import { IItem, INavbarLink, ITask } from "@/types";
import { AiFillHome, AiOutlineFileText, AiOutlineHome } from 'react-icons/ai'
import { FcSmartphoneTablet } from 'react-icons/fc'
import { FiHelpCircle } from 'react-icons/fi'
import { BiChat, BiTask, BiToggleLeft } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { BsBatteryFull, BsBatteryHalf } from 'react-icons/bs'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { TbDevices } from "react-icons/tb";

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
        icon: TbDevices,
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
        labelColor: "#FFA41B",
        value: "03:09",
        subValue: "05:21"
    }, {
        name: "Yours & total earnings",
        label: "$",
        labelColor: "#03BC8C",
        value: "1,695.00",
        subValue: "4,695.00"
    }, {
        name: "Project Progress",
        label: "%",
        labelColor: "#0F5EF7",
        value: "34%",
        subValue: "34/100"
    },
]

export const users = [
    {
        id: 1,
        names: "Kolin Farads",
        profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 2,
        names: "Nikolas Pickles",
        profile: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 3,
        names: "Eric Richards",
        profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 4,
        names: "Brian Maverick",
        profile: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 5,
        names: "Mary Roadhill",
        profile: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
]

export const tasks: ITask[] = [
    {
        id: 1,
        name: "Request Server username and password",
        status: "progressing",
        time: "02:54",
        assignees: [
            1, 3
        ]
    },
    {
        id: 2,
        name: "Change color pallette to more bright",
        status: "onhold",
        time: "00:00",
        assignees: [
            2
        ]
    },
    {
        id: 3,
        name: "Create project page with all tabs",
        status: "progressing",
        time: "01:34",
        assignees: [
            4
        ]
    },
    {
        id: 4,
        name: "Make unique page for customer",
        status: "progressing",
        time: "00:16",
        assignees: [
            5
        ]
    },
    {
        id: 5,
        name: "Design system",
        status: "todo",
        time: "00:00",
        assignees: [
            1
        ]
    },
    {
        id: 6,
        name: "Make fixes in homepage",
        status: "todo",
        time: "00:00",
        assignees: [
            3
        ]
    },
]

