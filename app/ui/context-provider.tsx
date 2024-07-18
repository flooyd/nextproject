'use client'

import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

//create type for elements
type Element = {
  id: number;
  name: string;
  className?: string;
}

//create context type
type ElementsContextType = {
  elements: Element[];
  setElements: Dispatch<SetStateAction<Element[]>>;
}

//create context
export const ElementsContext = createContext<ElementsContextType>({
  elements: [],
  setElements: () => null
})


export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [elements, setElements] = useState<Element[]>([])
  const value = { elements, setElements }
  return <ElementsContext.Provider value={value}>{children}</ElementsContext.Provider>
}