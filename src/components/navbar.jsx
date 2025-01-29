import Logo from "../assets/Binance-BNB-Icon-Logo.wine.png";
import menu from "../utils";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
    return ( 
        <div>
            <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#0b4196]">
                <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">

                    {/* div for the site logo and name */}
                    <div className="flex-center gap-x-3 z-[999]">
                        <img src={Logo} alt="logo" className="size-9" />
                        <h1 className="text-2xl font-semibold">Supreme</h1>
                    </div>


                    {/* Desktop Menu */}
                    <ul className="lg:flex-center hidden gap-x-1">
                            {menu.map((menuItem) => (
                                <DesktopMenu menu={menuItem} key={menuItem.name} />
                            ))}
                    </ul>
                    <div className="flex-center gap-x-5">
                            <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
                                Sign In
                            </button>
                    </div>
                    <div className="lg:hidden">
                        <MobileMenu Menus={menu} />
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;