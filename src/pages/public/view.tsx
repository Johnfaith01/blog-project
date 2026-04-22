import { useParams } from "react-router-dom"
import posts from "@/mocks/blog-posts.json"
import { Badge } from "@/components/ui/badge"
import FormInput from "@/components/form-input"


function ViewPage(){

    const {title} = useParams()

    const post = posts.find((post)=> post.title === title)

    if(!post){
        return(
            <div className="flex justify-center items-center min-h-screen">
                <h1>Post not found</h1>
            </div>
        )
    }

    return(
        <section className="w-[80%] mx-auto">
            <div className="h-75 overflow-hidden">
                <img src={post.image} alt="" className="w-full" />
            </div>

            <div className="mt-5 flex justify-between flex-wrap gap-5">
                <div>
                    <h1 className="text-2xl font-bold text-slate-600">{post.title}</h1>
                    <p>{post.excerpt}</p>

                </div>

                <div>
                    <h1>Author: {post.author}</h1>
                    <p>Category: <Badge>{post.category}</Badge></p>
                </div>

            </div>
            {
                    post.tags.map((tag)=>(
                        <Badge key={tag} className="mx-2">{tag}</Badge>
                    ))
                }

                <p>{post.content}</p>


                <hr className="mt-10 mb-2"/>
                <div className="">

                    <form className="flex flex-col gap-4">
                        <h1 className="font-bold text-xl mb-5">Comment</h1>

                        <FormInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        className=""
                        />


                <div className="flex flex-col gap-2">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" className="w-full h-40 border border-slate-200 outline-none p-3" placeholder="comment..."></textarea>

                </div>

                <button className="w-full h-10 rounded-md border-none bg-black text-white cursor-pointer">Post comment</button>
                        
                    </form>
                </div>
        </section>
    )
}


export default ViewPage