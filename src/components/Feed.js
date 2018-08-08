import React from 'react'
import { SpringGrid } from 'react-stonecutter';
import Presets from './Presets'
import Card from './Card'

class Feed extends React.Component {
    render() {
        return
        <div className='feed'>
            <SpringGrid
                component="ul"
                columns={1}
                columnWidth={150}
                gutterWidth={5}
                gutterHeight={5}
                itemHeight={200}
                springConfig={Presets.wobbly}
            >
                <li key={'A'}><Card/></li>
            </SpringGrid>
        </div>
    }
}

export default Feed