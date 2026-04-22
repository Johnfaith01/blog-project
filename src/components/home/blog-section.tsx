import posts from "../../mocks/blog-posts.json"
import { BlogCard } from "../blog-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function BlogSection() {
    return (
        <section className="w-[90%] mx-auto">

            <Carousel>
                <CarouselContent>
                    {
                        posts.slice(0, 5).map((post, i) => (
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


export default BlogSection