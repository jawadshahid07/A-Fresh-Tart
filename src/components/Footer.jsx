import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    const scrollToAbout = async () => {
        if (window.location.pathname !== "/") {
            navigate("/");
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li class="mb-4">
                            <a href="/menu" className="hover:underline">Menu</a>
                        </li>
                        <li class="mb-4">
                            <button onClick={scrollToAbout} className="about-link hover:underline">About</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2022 Food Delivery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}
