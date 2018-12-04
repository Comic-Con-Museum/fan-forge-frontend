import React, {Component} from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import {RadialChart} from 'react-vis'

import {DataModelWrapper} from './Styled';

class ExhibitDataModels extends Component {

  getRadialChartData(data) {
    return Object.keys(data).map(item => ({angle: data[item], label: item}))
  }

  render() {
    const {nps, populationsExpected, visitsExpected} = this.props;

    return (
      <DataModelWrapper>
        <ReactSpeedometer
          value={nps}
          minValue={-100}
          maxValue={100}
          segments={3}
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
      </DataModelWrapper>
    )
  }
}

export default ExhibitDataModels;