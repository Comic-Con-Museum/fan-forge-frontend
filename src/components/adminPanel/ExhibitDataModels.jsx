import React, {Component} from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import {RadialChart, Hint} from 'react-vis'

import {
  DataModelWrapper,
  SubTitle,
  Flex,
  Title
} from './Styled';

class ExhibitDataModels extends Component {
  constructor(props) {
    super(props);
    this.state = {value: null}
  }

  getRadialChartData(data) {
    return Object.keys(data).map(item => ({angle: data[item], subLabel: item}))
  }

  render() {
    const {nps, populationsExpected, visitsExpected} = this.props;
    const {value, value2} = this.state;
    console.warn(this.state)

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
              innerRadius={100}
              onValueMouseOver={v => this.setState({value2: v})}
            />
            <SubTitle>Populations this exhibit will draw</SubTitle>
            <SubTitle>{value2 ? `${value2.subLabel}: ${populationsExpected[value2.subLabel]}` : ''}</SubTitle>
          </Flex>
          <Flex>
            <RadialChart
              onValueMouseOver={v => this.setState({value: v})}
              data={this.getRadialChartData(visitsExpected)}
              width={300}
              height={300}
            />
            <SubTitle>How many visits to expect</SubTitle>
            <SubTitle>{value ? `${value.subLabel}: ${visitsExpected[value.subLabel]}` : ''}</SubTitle>
          </Flex>
        </DataModelWrapper>
      </div>
    )
  }
}

export default ExhibitDataModels;