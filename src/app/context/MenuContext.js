"use client"
const { createContext, useState} = require("react");

export const MenuContext = createContext()

const MenuProvider = ({children}) => {
    // localStorage.setItem("state", "dashboard")
    // const [active, setActive] = useState(localStorage.getItem("state"))
    const [active, setActive] = useState("dashboard")

    const toggle = () => {
        // setActive((prev) => !prev)
        // localStorage.setItem("state", `${active}`)
    }

    return (
        <MenuContext.Provider value={{active, setActive, toggle}}>
            {children}
        </MenuContext.Provider>
    )
}

// export const MenuState = () => {
//     return useContext(MenuContext)
// }

export default MenuProvider
