import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { BlogProps } from "@/types/blog-type"
import { Badge } from "@/components/ui/badge"
import {Link} from "react-router-dom"


export function BlogCard({image, title, author, content, tags} : BlogProps){
    return(
        <Link to={`/view/${title}`}>
            <Card size="sm" className="w-75">
                        <CardHeader>
                            <div className="">
                                <img src={image} alt="" className="rounded-md"/>
                            </div>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{content}</p>
                        </CardContent>
                        <CardFooter className="flex items-center gap-2">
                            {
                                tags.map((tag)=>(
                                    <Badge key={tag}>{tag}</Badge>
                                ))
                            }
                        </CardFooter>
                    </Card>
        </Link>
        
    )
}