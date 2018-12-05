import React, {Component} from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import {RadialChart} from 'react-vis'

import {
  DataModelWrapper,
  SubTitle,
  Flex,
  Title
} from './Styled';

class ExhibitDataModels extends Component {

  getRadialChartData(data) {
    console.warn(data)
    return Object.keys(data).map(item => ({angle: data[item], subLabel: item}))
  }

  render() {
    const {nps, populationsExpected, visitsExpected} = this.props;

    return (
      <div>
         <Title small>EXHIBIT SURVEY DATA</Title>
        <DataModelWrapper>
          <ReactSpeedometer
            value={nps}
            minValue={-100}
            maxValue={100}
            segments={3}
            needleColor="black"
            currentValueText={`NPS: ${nps}`}
          />
          <Flex>
            <RadialChart
              data={this.getRadialChartData(populationsExpected)}
              width={300}
              height={300}
            />
            <SubTitle>Populations this exhibit will draw</SubTitle>
          </Flex>
          <Flex>
            <RadialChart
              data={this.getRadialChartData(visitsExpected)}
              width={300}
              height={300}
            />
            <SubTitle>How many visits to expect</SubTitle>
          </Flex>
        </DataModelWrapper>
      </div>
    )
  }
}

export default ExhibitDataModels;