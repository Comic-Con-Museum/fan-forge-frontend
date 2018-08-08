import React from 'react'
import { SpringGrid } from 'react-stonecutter';
import Presets from './Presets'
import ExhibitCard from './ExhibitCard'
import cardData from '../mockdata/cards.json'

// springConfig={Presets.wobbly}

class Feed extends React.Component {
    render() {
        return <div className='feed'>
                <SpringGrid
                    component="ul"
                    columns={1}
                    columnWidth={700}
                    gutterWidth={10}
                    gutterHeight={10}
                    itemHeight={400}
                >
                    {cardData.map(card =>
                        <li key={card.title}>
                            <ExhibitCard title={card.title} picture={card.picture} summary={card.summary}/>
                        </li>)}
                </SpringGrid>
            </div>
    }
}

export default Feed