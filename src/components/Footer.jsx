import logo from '../images/logo.png';

export const Footer = () => {

    return (
        <footer class="footer" id="contact">
        <div class="box-container">
            <div class="mainBox">
                <div class="content">
                    <a href="#"><img src={logo} alt=""/></a>
                    <h1 class="logoName"> A Fresh Tart </h1>
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus maxime quod.</p>

            </div>
            <div class="box">
                <h3>Quick links</h3>
                <a href="#"> <i class="fas fa-arrow-right"></i>Home</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>Menu</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>Blogs</a>

            </div>
            <div class="box">
                <h3>Extra links</h3>
                <a href="#"> <i class="fas fa-arrow-right"></i>Contact Us</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>Login</a>
                <a href="#"> <i class="fas fa-arrow-right"></i>Signup</a>

            </div>
            <div class="box">
                <h3>Contact Info</h3>
                <a href="#"> <i class="fas fa-phone"></i>+92 3214105551</a>
                <a href="#"> <i class="fas fa-envelope"></i>romesaqadeer@gmail.com</a>
                <a href="#"> <i class="fas fa-phone"></i>+92 3208433967</a>
                <a href="#"> <i class="fas fa-envelope"></i>jawad.shahid70@outlook.com</a>

            </div>

        </div>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="credit">
             © 2022 Romesa & Jawad. All Rights Reserved.
        </div>
    </footer>
    )
}
