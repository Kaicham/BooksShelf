import React, {Fragment, useState} from 'react'

import Menu from '../../layouts/Menu/Menu'

//Pages
import SearchBooks from '../SearchBooks/SearchBooks'
import Home from '../Home/Home'

const MainApp = () => {

    const [pages, setPages] = useState([
        {
            component: <SearchBooks/>,
            active: true,
            id: 'search'
        },
        {
            component: <Home/>,
            active: false,
            id: 'home'
        },
        {
            component: Book(),
            active: false,
            id: 'book'
        }
    ]);

    function changePage(event) {
        let activeElement = event.currentTarget.id;
        
        setPages(pages.map(page => {
            page.active = false
            if (page.id === activeElement) 
                page.active = true
            return page
        }))

    }

    function AppComponent() {
        let page = pages.filter(page => page.active)
        return page[0].component
    }

    return (
        <Fragment>
            <Menu changePage={changePage} pages={pages}/>
            <AppComponent />
        </Fragment>
    )
} 

export default MainApp;

function Book() {
    return <h1>Book</h1>
}