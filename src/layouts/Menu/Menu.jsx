import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Menu.css'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Menu = ( { changePage, pages } ) => {

    useEffect(() => {
        
        let active =  pages.filter(page => page.active)[0]
        let elements = []
        elements.push(document.getElementById('search'))
        elements.push(document.getElementById('home'))
        elements.push(document.getElementById('book'))

        elements.map(element => {
            element.className = element.id === active.id ? "menu-item active" : "menu-item"
        })

    }, [pages])

    return (
        <div className="menu">
            <ul className="menu-list">
                <li id="search" onClick={changePage} className="menu-item"><FontAwesomeIcon icon={faSearch}/></li>
                <li id="home"   onClick={changePage} className="menu-item"><FontAwesomeIcon icon={faHome}/></li>
                <li id="book"   onClick={changePage} className="menu-item"><FontAwesomeIcon icon={faBook}/></li>   
            </ul>
        </div>
    )
}   

export default Menu;