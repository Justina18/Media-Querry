import React,{useState} from 'react'
import './Header.css'
import {FaTimes} from 'react-icons/fa'
import {FiAlignJustify} from 'react-icons/fi'

    
const Header = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => setToggle(!toggle)
    

let JustifyIcon =  (<FiAlignJustify onClick={handleToggle} fontSize='30px'/>)
let TimesIcon = (<div>
                    <div>
                    <FaTimes onClick={handleToggle} fontSize='30px'/>
                    </div>
                </div>)


  return (
    <div className='Header_Container'>
        <div className='Header_Wrapper'>
            <div>LOGO</div>

            <div className='Nav_Contain'>
                <a>HOME</a>
                <a>ABOUT</a>
                <a>CONTACT</a>
            </div>

            <div className='Burger'>
                {toggle ? JustifyIcon : TimesIcon }     
            </div>
        </div>
    </div>
  )
}

export default Header