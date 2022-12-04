import React from "react";
import { useRouter } from "next/router";
import Link from "next/link"
// import "./menu.scss";
import FolderIcon from "../../icons/folder-icon.inline.svg";
import HomeIcon from "../../icons/home-icon.inline.svg";
import PaperIcon from "../../icons/paper-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

// import { useGlobalState } from '../../state';

const Menu = () => {
    // const location = useLocation();
    const location = useRouter();
    const [menuActive, update] = React.useState(false);

    function closeMenu() {
        if (window.innerWidth < 905) {
            update(false);
        }
    }

    return (
        <div className={`menu ${menuActive ? "open" : ""}`}>
            <div className="menu-header">
                <Link href="/" >
                    <button className="icon home" onClick={closeMenu}>
                        <HomeIcon />
                        <Tooltip text='Back to home' class='home-tip left-point' />
                    </button>
                </Link>
            </div>
            <div className="folder-group">
                <div className="folder-title">
                    <FolderIcon />
                    <h4 className="bold">Product</h4>
                </div>
                <ul className="folder-list">
                    <li className={location.pathname === "/washingtonpost/" && ('active')} onClick={closeMenu}>
                        <span className="paper-icon wapo"><PaperIcon /></span>
                        <h5>WaPo<span className="italic space-left">(coming soon)</span></h5>
                    </li>
                    <Link href="/adhoc/">
                        <li className={location.pathname === "/adhoc/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Ad Hoc</h5>
                        </li>
                    </Link>
                    <Link href="/vumble/">
                        <li className={location.pathname === "/vumble/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Vumble</h5>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="folder-group">
                <div className="folder-title">
                    <FolderIcon />
                    <h4 className="bold">Development</h4>
                </div>
                <ul className="folder-list">
                    <Link href="/openrecord/">
                        <li className={location.pathname === "/openrecord/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>OpenRecord</h5>
                        </li>
                    </Link>
                    <Link href="/neat/">
                        <li className={location.pathname === "/neat/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Neat</h5>
                        </li>
                    </Link>
                    <Link href="/ourluubeginning/">
                        <li className={location.pathname === "/ourluubeginning/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>OurLuuBeginning</h5>
                        </li>
                    </Link>
                    <Link href="/fastropelabs/">
                        <li className={location.pathname === "/fastropelabs/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Fastrope Labs</h5>
                        </li>
                    </Link>
                    <Link href="/humblevc/">
                        <li className={location.pathname === "/humblevc/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Humble VC</h5>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="folder-group">
                <div className="folder-title">
                    <FolderIcon />
                    <h4 className="bold">Writing</h4>
                </div>
                <ul className="folder-list">
                    <Link href="/journaldaily/">
                        <li className={location.pathname === "/journaldaily/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Journal Daily</h5>
                        </li>
                    </Link>
                    <Link href="/remotework/">
                        <li className={location.pathname === "/remotework/" && ('active')} onClick={closeMenu}>
                            <span className="paper-icon"><PaperIcon /></span>
                            <h5>Remote Work</h5>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}





export default Menu