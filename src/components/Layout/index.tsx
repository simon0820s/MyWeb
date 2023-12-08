import { ReactNode } from "react"
import "./styles.css"

type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout