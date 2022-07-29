import React ,{useState}from "react";
import "./styles/navbar.scss";
import { MdMenu } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function Navbar() {
 
// burgerMenuhandle
const [menu, setMenu] = useState(false);

const burgerMenuhandle = () => {
  setMenu(!menu)
}
const handleBurgerScroll = (e) =>{
  e.preventDefault();
  const target = e.target.getAttribute('href');
  const location = document.querySelector(target).offsetTop;
  window.scrollTo({
    left:0,
    top: location-70
  })
  setMenu(!menu)
}

 // scroll
  const clickHandle = (e) =>{
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left:0,
      top: location - 60
    })
  }

// nav color
  const [scrollNav, setScrollNav] = useState(false)

  const changeNavBg =()=>{
  if(window.scrollY>= 65){
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
  }
window.addEventListener('scroll',changeNavBg)

  return (
    <>
      <div className={scrollNav ? "Navbar scrollNav":"Navbar"}>
      <div className="nameLogo">
        <span>&#60;Tanveer khan&#47;&#62;</span>
      </div>
      <nav className="navbar-main">
        <li><a href="#home" onClick={clickHandle}>Home</a></li>
        <li><a href="#about" onClick={clickHandle}>About</a></li>
        <li><a href="#projects" onClick={clickHandle}>Projects</a></li>
        <li><a href="#contact" onClick={clickHandle}>Contact</a></li>
      </nav>
      <button className="nav-btn" onClick={(e) => {
            e.preventDefault();
            window.location.href ="https://github.com/tanverified";
          }}><BsGithub/>&nbsp;GitHub</button>
      
    </div>

    <div className="hamburger" onClick={()=>burgerMenuhandle()}>{menu ? "X":<MdMenu/>}</div>
    {menu && <nav className={"nav-menu"}>
        <li><a href="#home" onClick={handleBurgerScroll}>Home</a></li>
        <li><a href="#about" onClick={handleBurgerScroll}>About</a></li>
        <li><a href="#projects" onClick={handleBurgerScroll}>Projects</a></li>
        <li><a href="#contact" onClick={handleBurgerScroll}>Contact</a></li>
      </nav>}
    
    </>

  );
}

export default Navbar;
