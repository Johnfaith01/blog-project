import { Link } from "react-router-dom";



export default function Nav(){

  return(
    <nav className="flex justify-around items-center p-5">
      <h1>Oranov</h1>
      <div className="flex justify-around gap-10">
        <a href="">Home</a>
        <a href=""><Link to="/about">About</Link></a>
        <a href=""><Link to="/contact">Contact</Link></a>
        <a href="">Blogs</a>
      </div>
    </nav>
  )
}
