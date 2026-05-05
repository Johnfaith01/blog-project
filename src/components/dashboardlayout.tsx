import { Balloon, Book, Filter, LayoutDashboard, Shield, User, Users } from "lucide-react"
import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"

interface LinkProps {
    id: number,
    name: string,
    pathname: string
    icon: ReactNode
}

interface DashboardProps{
    children: ReactNode
}

export default function DashboardLayout({children} : DashboardProps) {

    const links: LinkProps[] = [
        {
            id: 1,
            name: "Dashboard",
            pathname: "/overview",
            icon: <LayoutDashboard />
        },
        {
            id: 2,
            name: "Users",
            pathname: "/users",
            icon: <Users />
        },
        {
            id: 3,
            name: "Blogs",
            pathname: "/blogs",
            icon: <Book />
        },
        {
            id: 4,
            name: "Category",
            pathname: "/category",
            icon: <Filter />
        },
        {
            id: 5,
            name: "Admin",
            pathname: "/admin",
            icon: <Shield />
        },
        {
            id: 6,
            name: "Settings",
            pathname: "/settings",
            icon: <User />
        }
    ]
    const path = useLocation()

    return (
        <section className="grid grid-cols-5">
            <aside className="col-span-1 bg-black h-screen text-white p-4 ">

                <div className="flex items-centergap-4 bg-white rounded-md py-2 px-5 text-black gap-4 mb-10">
                    <Balloon />
                    <h1 className="font-bold">Inspo Blog</h1>
                </div>

                <div className="flex flex-col gap-3">
                    {
                        links.map((link) => (
                            <Link
                                to={link.pathname}
                                key={link.id}
                                className={`hover:bg-white hover:text-black transition-all duration-300 py-2 px-4 rounded-md flex items-center gap-2 ${path.pathname === link.pathname ? 'bg-white text-black' : ''}`}
                                >
                                {link.icon}
                                <span>{link.name}</span> 
                            </Link>
                        ))
                    }

                </div>


            </aside>

            <main className="col-span-4">
                {children}
            </main>
        </section>
    )
}