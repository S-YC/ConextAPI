import { createContext } from 'react'

// createContext() -> Context 제작
const ColorContext = createContext({ color: 'black'});

export default ColorContext;