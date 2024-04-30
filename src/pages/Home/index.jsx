import { Banner } from "../../components/Banner";
import Blogs from "../../components/Blogs";
import Newsletter from "../../components/Newsletter";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home = () => {
    return (
        <>
            <Banner />
            <ProductsPreview />
            <Blogs />
            <Newsletter />
        </>
    )
}

export default Home;