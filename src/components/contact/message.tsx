import FormInput from "../form-input";


export default function Message(){
    return(
        <section className="grid grid-cols-2 my-10">
            <div className="w-[95%] mx-auto border px-4 py-7 rounded-md">
                <form className="flex flex-col gap-3">
                    <h1 className="font-bold textmxl">Send a Message</h1>

                                            <FormInput
                                            label=""
                                            type="text"
                                            placeholder="Your name"
                                            className=""
                                            />

                                            <FormInput
                                            label=""
                                            type="email"
                                            placeholder="Your email"
                                            className=""
                                            />
                    
                    
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor=""></label>
                                        <textarea name="" id="" className="w-full h-40 border border-slate-200 outline-none p-3" placeholder="Tell us what is on your mind..."></textarea>
                    
                                    </div>
                    
                                    <button className="w-full h-10 rounded-md border-none bg-black text-white cursor-pointer">send message</button>
                </form>
            </div>

            <div className="w-[95%] mx-auto border px-4 py-7 rounded-md bg-black text-white flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <div className="flex flex-col gap-1">
                    <h2 className="text-slate-400">EMAIL</h2>
                    <a href="mailto:hello@oranov.com" className="underline font-bold">hello@oranov.com</a>
                    <p className="text-slate-400">For pitches, partnerships and general enquiries.</p>
                </div>
                <hr />
                <div>
                    <h2 className="text-slate-400">LOCATION</h2>
                    <h2 className="font-bold">Lagos, Nigeria</h2>
                    <p className="text-slate-400">We're a distributed team but Lagos is home.</p>
                </div>
                <hr />
                <div>
                    <h2 className="text-slate-400">PHONE</h2>
                    <a href="tel: +2348012345678" className="font-bold">+2348012345678</a>
                    <p className="text-slate-400">Feel free to reach us anytime from 8am to 6pm</p>
                </div>
            </div>
        </section>
    )
}