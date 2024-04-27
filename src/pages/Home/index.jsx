import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import { ContactUs } from "../../components/Contact";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home = () => {
    return (
        <>
            <Banner />
            <ProductsPreview />
            <About />
            <ContactUs />
        </>
    )
}

export default Home;