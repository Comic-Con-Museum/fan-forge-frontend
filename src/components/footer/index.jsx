import React, { PureComponent } from 'react';
import {
    FooterWrapper,
    FooterLine,
    FooterBody,
    FooterColumn,
    FooterH1,
    FooterH2,
    FooterCopyright,
    CopyrightRow
} from './Styled';

class Footer extends PureComponent {
    
    render() {
        return (
        <FooterWrapper>
            <FooterLine/>
            <FooterBody>
                <FooterColumn>
                    <FooterH1> COMIC-CON </FooterH1>
                    <FooterH1> WONDER CON Anaheim </FooterH1>
                </FooterColumn> 
                <FooterColumn>
                    <FooterH1> COMIC-CON INTERNATIONAL </FooterH1>
                    <FooterH2> Attending the Show </FooterH2>
                    <FooterH2> Exhibit Hall </FooterH2>
                    <FooterH2> Programs and Guests </FooterH2>
                    <FooterH2> Getting here </FooterH2>
                    <FooterH2> Publications </FooterH2>
                    <FooterH2> Exclusives </FooterH2>
                    <FooterH1> WONDERCON </FooterH1>
                    <FooterH2> Attending the Show </FooterH2>
                    <FooterH2> Exhibit Hall </FooterH2>
                    <FooterH2> Programs and Guests </FooterH2>
                    <FooterH2> Getting Here </FooterH2>
                    <FooterH2> Exclusives </FooterH2>
                </FooterColumn>
                <FooterColumn>
                    <FooterH1> AWARDS </FooterH1>
                    <FooterH2> Awards </FooterH2>
                    <FooterH2> Eisner Awards </FooterH2>
                    <FooterH2> Eisner Spirit </FooterH2>
                    <FooterH2> Icon Awards </FooterH2>
                    <FooterH2> Inkpot Awards </FooterH2>
                    <FooterH2> Other Awards </FooterH2>
                    <FooterH1> MUSEUM </FooterH1>
                    <FooterH1> SAM </FooterH1>
                    <FooterH1> PAST EVENTS </FooterH1>
                    <FooterH2> Comic-Con </FooterH2>
                    <FooterH2> WonderCon </FooterH2>
                    <FooterH2> APE </FooterH2>
                </FooterColumn>
                <FooterColumn noBorder>
                    <FooterH1> Mission Statement </FooterH1>
                    <FooterH2> Comic-Con International: San Diego is a nonprofit
                        educational corporation dedicated to creating awareness
                        of, and appreciation for, comics and related popular
                        artforms, primarily through the presentation of
                        conventions and events that celebrate the historic
                        and ongoing contribution of comics to art and culture. </FooterH2>
                    <FooterH1> ABOUT </FooterH1>
                    <FooterH1> FORMS </FooterH1>
                    <FooterH1> CONTACT </FooterH1>
                    <FooterH1> JOB OPPORTUNITIES </FooterH1>
                    <FooterH1> REFUNDS </FooterH1>
                </FooterColumn>
            </FooterBody>
        <FooterCopyright>
            <CopyrightRow>© 2018 SAN DIEGO COMIC CONVENTION • All rights reserved.</CopyrightRow>
            <CopyrightRow>Comic-Con, the Comic-Con logo and the WonderCon logo are Registered Trademarks of San Diego Comic Convention.</CopyrightRow>
        </FooterCopyright>
        </FooterWrapper>
        )
    }
}

export default Footer;