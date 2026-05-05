import BlogProfileSection from "@/components/blog-profile-section"
import FormInput from "@/components/form-input"
import Modal from "@/components/modal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, type ChangeEvent } from "react"
import categories from "@/mocks/blog-posts.json"



function ProfilePage() {

    const [profile, setProfile] = useState<File | Blob>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfile(e.target.files[0])
    }

    return (
        <section className="w-[70%] mx-auto bg-slate-50">

            <div className="flex justify-end p-4 ">
                <Modal btnText="post" title="Blog Post Form" desc="Enter blog post details">

                    <form action="" className="flex flex-col gap-3">

                        <FormInput
                            type="text"
                            label="Post Title"
                            placeholder="Enter Post title"
                            className=""
                        />

                        <FormInput
                            type="text"
                            label="Author"
                            placeholder="Enter Author title"
                            className=""
                        />

                        <FormInput
                            type="text"
                            label="Author"
                            placeholder="Enter Author name"
                            className=""
                        />

                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Category</label>
                            <select name="" id="" className="w-full h-10 outline-none border-[0.5px] border-slate-200">

                                {categories.map((category) => (
                                    <option value={category.category} key={category.category}>
                                        {category.category}

                                    </option>
                                ))}

                            </select>
                        </div>


                        <FormInput
                            type="text"
                            label="Excerpt"
                            placeholder="Enter Excerpt"
                            className=""
                        />

                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Content</label>
                            <textarea name="" id="" placeholder="Type Blog" className="w-full h-40"></textarea>
                        </div>

                        <input type="submit" value={'post blog'} className="w-full h-10 cursor-pointer bg-black text-white rounded-md" />

                    </form>

                </Modal>

            </div>

            <div className="p-5 rounded-md bg-white w-[90%] mx-auto shadow">
                <div className="flex items-center gap-5">

                    <Avatar className="w-20 h-20">
                        <AvatarImage src={profile && URL.createObjectURL(profile)} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <form action="">
                        <label htmlFor="file"
                            className="border border-slate-200 px-4 py-2 rounded-md cursor-pointer"
                        >
                            Upload new photo
                        </label>
                        <input type="file"
                            className="hidden" id="file"
                            onChange={handleChange}
                        />

                    </form>

                </div>



                <div className=" mt-5">

                    <div className="mt-10">
                        <div className="flex justify-between items-center">
                            <h1>Profile Info</h1>
                            <Modal btnText="Edit" title="Edit account" desc="Edit account details" >
                                <form action="" className="flex flex-col gap-3">
                                    <FormInput type="text" label="Change Username" placeholder="" className=""/>

                                    <FormInput type="email" label="Change email" placeholder="" className=""/>

                                    <FormInput type="tel" label="Change phone no" placeholder="" className=""/>

                                </form>

                            </Modal>
                           

                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div>
                            <h1 className="font-semibold text-slate-400">Username</h1>
                            <p>Orano</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-slate-400">Email</h1>
                            <p>orano@gmail.com</p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-slate-400">Phone</h1>
                            <p>+2348023767890</p>
                        </div>
                    </div>
                </div>
            </div>


            <BlogProfileSection />

        </section>
    )
}

export default ProfilePage