import React from 'react'
import './ProjectTabs.css'
import {useState} from 'react'


const ProjectTabs = ({ children }) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label)


    const handleClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className='project-tab'>
            <ul className='tabs'>

                {children.map((tab) => {
                    
                    const label = tab.props.label
                    return (

                    <li key ={label} className={label === activeTab ? 'active' : 'inactive'} onClick={() => handleClick(label)}>
                        {label}
                    </li>
                    )
                })}

            </ul>
          
            
            {children.map(pane => {

                if (pane.props.label == activeTab){
                    return (
                        <div key ={pane.props.label} className='tab-content'>
                            {pane.props.children}
                        </div>
                    )
                }

            })}

        </div>
    )
}

export default ProjectTabs
