import { AiOutlineUser as User, AiOutlineShop as Shop, AiFillCreditCard as card} from "react-icons/ai"
import { TbTruckDelivery as delivery} from "react-icons/tb"
import { BiSolidDashboard as dashboard} from "react-icons/bi"

export const sideBarData = [
    {
        title: "Home",
        options: [
        {
            title: "Dashboard",
            icon: dashboard,
            link: "/dashboard/"
        }
    ]
    },
    {
        title: "Menu",
        options: [

            {
                title:"User", 
                icon: User,
                link: "/dashboard/user"
            },

            {
                title: "Subjects", 
                icon: Shop,
                link: "/dashboard/subjects"
    
            },
            {
                title: "Teacher", 
                icon: card,
                link: "/dashboard/teachers"
            },
            {
                title: "Total",
                icon: delivery,
                link: "/dashboard/total"

            }
        ],

    },
    {
        title: "Update",
        options: [
            {
                title: "Create New Subject", 
                icon: User,
                link: "/dashboard/update"
            },
            {
                title: "Update attandance",
                icon: card
            }
            
        ],
    },
    {
        title: "User",
        options: [
            {
                title: "profile", 
                icon: User,
                link: "/dashboard/user"
            },
            {
                title:"Logout",
                icon: Shop,
                link: "/dashboard/logout"
            }   
        ],
    }
]