import React, { createContext } from 'react'
import ChildOne from './ChildOne';

const value = "Krishna Pachchigar"
export const Name = createContext(value);

function Parent() {
  return (
    <Name.Provider>
        <ChildOne />
    </Name.Provider>
  )
}

export default Parent