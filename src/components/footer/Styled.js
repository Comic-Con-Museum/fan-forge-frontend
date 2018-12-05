import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width: 95%;
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
`;

export const FooterColumn = styled.div`
    display: flex
    flex: 1 1 0;
    flex-direction: column;
    flex-grow: 1;
    text-overflow: ellipsis;
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
`;