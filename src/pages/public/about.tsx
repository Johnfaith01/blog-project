import AboutHerosection from "@/components/about/herosection-about"
import Mission from "@/components/about/mission"
import Team from "@/components/about/team"
import Nav from "@/components/home/nav"


function AboutUs(){
    return(
        <>
        <Nav />
        <AboutHerosection />
        <Mission />
        <Team />
        </>
    )
}

export default AboutUs