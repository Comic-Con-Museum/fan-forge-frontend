import React from 'react'
import { SpringGrid } from 'react-stonecutter';

const Feed = () => (
    <div className='feed'>
        <SpringGrid
            component="ul"
            columns={1}
            // columnWidth={150}
            // gutterWidth={5}
            gutterHeight={5}
            itemHeight={200}
            springConfig={{ stiffness: 170, damping: 26 }}>
            <li key="A">A</li>
            <li key="B">B</li>
            <li key="C">C</li>
        </SpringGrid>
    </div>
)

export default Feed