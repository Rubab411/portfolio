import { Link, NavLink } from "react-router-dom";
import './components.css'
function Header(){
    
    return(
        <>
            <nav className=" d-flex gap-2 align-items-center  py-2 justify-content-center  ">
                <NavLink to='/' className={({isActive})=>`p-2 navlink   ${isActive ? 'navstyleactive':'navstyle'}`}
                >About</NavLink>
                <NavLink to='/resume' className={({isActive})=>`p-2  navlink  ${isActive ? 'navstyleactive':'navstyle'}`}
                >Resume</NavLink>
                <NavLink to='/portfolio' className={({isActive})=>`p-2  navlink  ${isActive ? 'navstyleactive':'navstyle'}`}
                >Work</NavLink>
                <NavLink to='/blog' className={({isActive})=>`p-2  navlink  ${isActive ? 'navstyleactive':'navstyle'}`}
                >Blog</NavLink>
                <NavLink to='/contact' className={({isActive})=>`p-2  navlink  ${isActive ? 'navstyleactive':'navstyle'}`}
                >Contact</NavLink>
             
                
            </nav>
        
        
        </>
    )
}
export default Header;