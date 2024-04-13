export const Header = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo-wrapper">
                    <img src={"/"} alt="logo" />
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <div>Home</div>
                    <div>About</div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <div>Cart</div>
                    <div>Login</div>
                    <div>Signup</div>
                </div>
            </div>
        </nav>
    )
}