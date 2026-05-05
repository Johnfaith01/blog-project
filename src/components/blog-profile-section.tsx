
import { BlogCard } from "./blog-card"
import posts from "@/mocks/blog-posts.json"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function BlogProfileSection(){
    return(
        <section className="w-[90%] mx-auto flex flex-col gap-5 mt-10">

            <h1 className="font-bold text-xl text-center">Recent Posts</h1>
            <Carousel
            opts={{
                loop: true
            }}>
                <CarouselContent className="flex">
                    {
                        posts.slice(5, 9).map((post, i) => (
                            <CarouselItem key={i} className="basis-1/4">

                                <BlogCard

                                    image={post.image}
                                    title={post.title}
                                    tags={post.tags}
                                    author={post.author}
                                    content={post.content}
                                />
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default BlogProfileSection