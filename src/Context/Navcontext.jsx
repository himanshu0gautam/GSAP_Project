import React, { createContext, useState } from 'react'

export const navbarContext = createContext()

const Navcontext = ({children}) => {

    const [navbar, setNavbar] = useState(false)

  return (
    <div>
       <navbarContext.Provider value={{navbar, setNavbar}}>
        {children}
       </navbarContext.Provider>

    </div>
  )
}

export default Navcontext