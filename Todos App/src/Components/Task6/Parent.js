import React, { createContext } from 'react'
import ChildOne from './ChildOne';

const value = "User"
export const Name = createContext(value);

function Parent() {
  return (
    <Name.Provider>
        <ChildOne />
    </Name.Provider>
  )
}

export default Parent