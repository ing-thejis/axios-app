import React from 'react'
import Works from './Content/Works'
import Events from './Content/Events'

const MainContent = (props) => {
    const {state} = props
    return (
        <div>
            {state==='works' ? <Works /> : <Events /> }
        </div>
    )
}

export default MainContent
