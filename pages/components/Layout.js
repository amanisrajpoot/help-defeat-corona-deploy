import Footer from "./Footer"
import  Navbar from "./Navbar"

export default function Layout({children}){
    return(
        <div className="font:roboto">
            <Navbar />
            {children}
            <Footer />
        </div>

    )

}