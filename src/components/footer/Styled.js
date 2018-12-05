import styled from 'styled-components';

export const FooterWrapper = styled.div`
    align-items: center;
`;

export const FooterLine = styled.div`
    height: 1px;
    background-color: yellow;
    width: 100%;
    margin: 50px 0px;
`;

export const FooterBody = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 15px;
`;

export const FooterColumn = styled.div`
    display: flex
    flex: 1 1 0;
    flex-direction: column;
    flex-grow: 1;
    text-overflow: ellipsis;
    border-right: ${props => props.noBorder ? '' : '1px solid yellow'};
    margin-right: 30px;
`;

export const FooterH1 = styled.div`
    font-size: 20px;
    font-weight: 450;
    color: white;
    justify-content: center;
    margin: 10px 0px;
`;

export const FooterH2 = styled.div`
    font-size: 18px;
    flex-wrap: wrap;
    margin: 5px 0px;
    color: yellow;
`;

export const FooterCopyright = styled.div`
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding: 15px;
`;

export const CopyrightRow = styled.div`
    margin: 5px;
    font-weight: bold;
`
