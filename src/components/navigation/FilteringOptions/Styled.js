import styled from 'styled-components';
import { colors, deviceSizes, media } from '../../../style/theme';

export const collapsibleContainerStyles = `
    position: absolute; 
    z-index: 100;
    right: 100px;

    height: 144px;
    width: 400px;
    
    opacity: .9;
    background-color: #000;
    color: ${colors.yellow_1};
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    @media (max-width: ${deviceSizes.mobile}) {
        width: auto;
    }
`;

export const FilterOptionContainer = styled.div`
    display: flex;
    padding: 10px 25px;
    align-items: center;
    justify-content: space-between; 
`;

export const Label = styled.span`
    margin-right: 10px;
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
        primary: colors.yellow_1,
        primary25: colors.yellow_2,
        primary50: colors.yellow_1,
        neutral0: colors.black,
        neutral80: colors.yellow_1,
    }
});