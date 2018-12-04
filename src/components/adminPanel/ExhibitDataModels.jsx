import React, {Component} from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import {RadialChart} from 'react-vis'

class ExhibitDataModels extends Component {

  getRadialChartData(data) {
    return Object.keys(data).map(item => ({angle: data[item], label: item}))
  }

  render() {
    console.warn(this.props)
    const {nps, populationsExpected, visitsExpected} = this.props;
    console.warn(this.getRadialChartData(populationsExpected))
    return (
      <div>
        <ReactSpeedometer
          value={nps}
          minValue={-100}
          maxValue={100}
          segments="3"
          needleColor="black"
          currentValueText={`NPS: ${nps}`}
        />
        <RadialChart
          data={this.getRadialChartData(populationsExpected)}
          width={300}
          height={300}
        />
        <RadialChart
          data={this.getRadialChartData(visitsExpected)}
          width={300}
          height={300}
        />

      </div>
    )
  }
}

export default ExhibitDataModels;