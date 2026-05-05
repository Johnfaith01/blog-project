import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

export default function Nav() {

  const [user, setUser] = useState('')

  const userData = localStorage.getItem("authUser")

  const getUser = () => {
    if (userData) {
      return setUser(JSON.parse(userData))
    }
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <nav className="flex justify-around items-center p-5">
      <h1>Oranov</h1>
      <div className="flex justify-around gap-10">
        <Link to="/">Home</Link>
        <Link to="/About-us">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/">Blogs</Link>
      </div>


      <div className="flex items-center gap-3">
        {user ? <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          :
          <Button>Login</Button>}
      </div>

    </nav>
  )
}
