import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import {motion} from 'framer-motion'

const DesktopMenu = ({menu}) => {
    const [isHover, setIsHover] = useState(false);

    //* toggle hover menu *//
    const toggleHoverMenu = () => {
        setIsHover(!isHover)
    };

    //* animation variants *//
    const subMenuAnimation = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5,
            },
            display: "block",
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.5,
            },
            display: "none",
        }
    };

    // * checking if menu has sub menu * //
    const hasSubMenu = menu?.subMenu?.length > 0; //it does so yayyy

    return (   
        <motion.li className="group/link" onHoverStart={toggleHoverMenu} onHoverEnd={toggleHoverMenu}>
            <span className="flex-center hover:bg-white/5 rounded-md py-1 px-3 gap-1 cursor-pointer">
                {menu.name}
                {hasSubMenu && (<ChevronDown className="mt-[0.6px] group-hover/link:rotate-[180deg] duration-200"/>)}
            </span>
            {
                hasSubMenu && (
                    <motion.div className="sub-menu"
                        initial= "exit"
                        animate= {isHover ? "enter" : "exit"} 
                        variants={subMenuAnimation}
                    >
                        <div className={`
                                grid gap-7
                                ${
                                    menu.gridCols === 3 
                                    ? 'grid-cols-3'
                                    : menu.gridCols === 2 
                                    ? 'grid-cols-2' 
                                    : 'grid-cols-1'
                                }
                            `}>
                            {
                                menu?.subMenu?.map((subMenu, i) => (
                                    <div key={i} className= "relative cursor-pointer">
                                        <div className="flex-center gap-x-4 group/menubox">
                                            <div className="bg-[#0b4196] w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-[#0b4196]">
                                                {subMenu?.icon && <subMenu.icon/>}
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-[#192f46]">
                                                    {subMenu?.name}
                                                </h6>
                                                <p className="text-sm text-[#192f46]">{subMenu?.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                )
            }
        </motion.li>
    );
};

DesktopMenu.propTypes = {
    menu: PropTypes.shape({
        name: PropTypes.string.isRequired,
        subMenu: PropTypes.array,
        gridCols: PropTypes.number,
    }).isRequired
};

export default DesktopMenu;