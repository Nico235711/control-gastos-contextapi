import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}

const Error = ({ children }: ErrorProps) => {

  return (
    <p className="bg-red-900 text-white py-3 rounded-lg text-center text-xl uppercase">{children}</p>
  )
}

export default Error