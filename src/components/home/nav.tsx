

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
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="Blogs"></a>
      </div>

    </nav>
  )
}
