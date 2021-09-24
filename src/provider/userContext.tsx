import { createContext } from "react"

// eslint-disable-next-line import/prefer-default-export
export const userContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(null as any)
