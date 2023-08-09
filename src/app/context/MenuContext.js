"use client"
const { createContext, useState, useEffect} = require("react");

export const MenuContext = createContext()

const MenuProvider = ({children}) => {
    // localStorage.setItem("state", "dashboard")
    // const [active, setActive] = useState(localStorage.getItem("state"))
    const [active, setActive] = useState("dashboard")
    const [user, setUser] = useState()
    const [theme,setTheme] = useState("light")
    const [on,setOn] = useState(false)

    const toggle = () => {
        // setActive((prev) => !prev)
        // localStorage.setItem("state", `${active}`)
    }
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))  
        setUser(userInfo)
    },[on])




    return (
        <MenuContext.Provider value={{user, active, setActive, toggle, setOn, setUser}}>
            {children}
        </MenuContext.Provider>
    )
}

// export const MenuState = () => {
//     return useContext(MenuContext)
// }

export default MenuProvider
