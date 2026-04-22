import FormInputs from "../../components/form-input"



function ForgotPassword(){
    return(
        // <section>

        //     <h1>Forgot Password? Create A New one</h1>
        // <FormInputs
        //     type="password"
        //     placeholder="Create New Password"
        //     label="Password"
        //     className=""
        // />

        // <FormInputs
        //     type="password"
        //     placeholder="Confirm Password"
        //     label="Password"
        //     className=""
        // />
        // </section>
        <section className="grid grid-cols-2 h-screen">
            <div className="bg-blue-700"></div>
            <form action="" className="flex flex-col justify-center items-center p-10 gap-7">
                <div className="w-full">
                    <h1 className="text-xl font-bold text-blue-500">Forgot Password?</h1>
                    <p>Create A New One</p>
                </div>
            
                <FormInputs
                    type="password"
                    placeholder="Enter Password"
                    label="Password"
                    className=""
                />
                <FormInputs
                    type="password"
                    placeholder="Confirm Password"
                    label=""
                    className=""
                />

                <button className=" rounded-md cursor-pointer w-full h-10  bg-linear-to-r to-blue-500 from-blue-500 text-white">Create Password</button>
                
            </form>
        </section>
    )
}

export default ForgotPassword