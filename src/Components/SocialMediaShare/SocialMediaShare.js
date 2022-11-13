
import React from 'react';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon} from 'react-share';
import { Container, Segment } from 'semantic-ui-react';


function SocialMediaShare() {
    return (
        <Container>
            <Segment>
                <FacebookShareButton
                url="https://www.youtube.com/watch?v=PkZNo7MFNFg"
                quote={"Check out this Youtube video"}
                hashtag="#sharethisshit"
                >
                <FacebookIcon logoFillColour="white" round={true}></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton 
                title="DMT Beauty Treatments"
                url="https://www.youtube.com/watch?v=PkZNo7MFNFg">
                <WhatsappIcon logoFillColour="white" round={true}></WhatsappIcon>
                </WhatsappShareButton>
            </Segment>
        </Container>
    );
}

export default SocialMediaShare;