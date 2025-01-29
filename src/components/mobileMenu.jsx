import { useState } from "react";
import { ChevronDown, Menu, X } from 'lucide-react';
import menu from "../utils";
import { motion } from "framer-motion";

const MobileMenu = ({Menus}) => {
    const [IsOpen, setIsOpen] = useState(false);

    //* toggle for desktop menu *//
    const toggleDesktopMenu = () => {
        setIsOpen(!IsOpen)
    };

    const [clicked, setIsClicked] = useState(null);

    const subMenuDrawer = {
        enter:{
            height: 0,
            overflow: "hidden",
        },
        exit:{

        }
    }

    return ( 
        <div>
            <button className="z-[999] relative" onClick={toggleDesktopMenu}>
                {
                    IsOpen ? <X /> : <Menu />
                }
            </button>

            <motion.div 
            initial= {{ x: "-100%" }}
            animate ={{ x: IsOpen? "0%" : "-100%"}}
            className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6">
                <ul>
                    {
                        Menus?.map(({name, subMenu}, i) => {
                            //* checking if sub menu exists *//
                            const hasSubMenu = subMenu?.length > 0;
                            //* checking if menu is clicked *//
                            const isClicked = clicked === i
                            return (
                                <li key={name}>
                                    <span 
                                    //* toggle sub menu items *// 
                                    onClick={() => setIsClicked(isClicked ? null : i)} className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative">
                                        {name}
                                        {hasSubMenu && <ChevronDown className=
                                        {`ml-auto  ${isClicked && 'rotate-180'} duration-300`}
                                        />}
                                    </span>
                                    {
                                        hasSubMenu && (
                                            <motion.ul 
                                            initial="exit"
                                            animate={isClicked? "exit": "enter"}
                                            variants={subMenuDrawer}
                                            className="ml-5">
                                                {
                                                    subMenu?.map(({name, icon: Icon}) => (
                                                        <li key={name} className="p-2 flex-center hover:bg-white/5 cursor-pointer rounded-md gap-x-2">
                                                            <Icon size={17}/>
                                                            <span>{name}</span>
                                                        </li>
                                                    ))
                                                }
                                            </motion.ul>
                                        )
                                    }
                                </li>
                            );
                        })}
                </ul>
            </motion.div>
        </div>
    );
}

MobileMenu.propTypes = {
    Menus: menu
}

export default MobileMenu;