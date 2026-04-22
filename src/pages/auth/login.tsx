import { Link } from "react-router-dom"
import FormInput from "../../components/form-input"


function Login() {
    return (
        <section className="grid grid-cols-2 h-screen">
            <div className="bg-blue-700"></div>
            <form action="" className="flex flex-col justify-center items-center p-10 gap-7">

                <div className="w-full">
                    <h1 className="text-xl font-bold text-blue-500">Welcome Back!</h1>
                    <p>Enter your account details to sign in</p>
                </div>

                <FormInput 
                    type="email"
                    placeholder="Enter email..."
                    label="Email"
                    className="" 
                />
                
                <FormInput 
                    type="password"
                    placeholder="Enter password..."
                    label="Password"
                    className="" 
                />

                <button className="bg-linear-to-r to to-blue-500 from-blue-600 border-none text-white w-full h-10 rounded-md cursor-pointer">Sign In</button>

                <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>
            </form>
        </section>
    )
}

export default Login