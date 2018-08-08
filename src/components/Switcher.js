import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'
import isLoading from '../selectors/isLoading'
import '../css/Switcher.css'

const Switcher = ({ page, direction, isLoading }) => (
  <TransitionGroup
    className={`switcher ${direction}`}
    duration={500}
    prefix='slide'
  >
    <Transition key={page}>
      <UniversalComponent page={page} isLoading={isLoading} />
    </Transition>
  </TransitionGroup>
)

const UniversalComponent = universal(props => import(`./${props.page}`), {
  minDelay: 500,
  chunkName: props => props.page,
  loading: () => (
    <div className='spinner'>
      <div />
    </div>
  ) // ,
  // error: () => <div className='notFound'>PAGE NOT FOUND - 404</div>
})

const mapState = ({ page, direction, ...state }) => ({
  page,
  direction,
  isLoading: isLoading(state)
})

export default connect(mapState)(Switcher)
