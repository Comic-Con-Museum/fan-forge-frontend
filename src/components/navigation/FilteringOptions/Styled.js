import styled from 'styled-components';
import { colors, deviceSizes, media } from '../../../style/theme';

export const collapsibleContainerStyles = `
    position: absolute; 
    z-index: 100;
    right: 113px;

    height: 186px;
    width: 400px;
    
    opacity: .9;
    color: black;
    background-color: white;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    border-bottom: 1px solid black;
    border-left: 1px solid;

    @media (max-width: ${deviceSizes.mobile}) {
        width: auto;
    }
`;

export const FilterOptionContainer = styled.div`
    display: flex;
    padding: 10px 25px;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: bold;
`;

export const Label = styled.span`
    margin-right: 10px;
    max-width: 45%;
`;

export const selectStyle = {
    container: () => ({
        'position': "relative",
        'flex': 1    
    }),
};

export const selectTheme = (theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: 'black',
        primary25: colors.yellow_1,
        primary50: 'black',
        neutral0: 'white',
        neutral80: 'black',
    }
});