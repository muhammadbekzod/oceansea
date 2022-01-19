import React from 'react'
import Details from './MenuH/details/Details'
import DetailsV from './MenuV/details/Details'

const MenuController = ({active}) => {
    return (
        <div>
            {active ? <Details/> : <DetailsV/>}
        </div>
    )
}

export default MenuController