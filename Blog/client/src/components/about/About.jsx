
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import profileImage from '../images/about.jpeg'

const Banner = styled(Box)`
    background-image: url(${profileImage});
    height: 60vh;
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 10px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Adya Ranjan Sahoo</Typography>
                <Text variant="h5">I'm a student at NIT Rourkela. 
                    I've built websites, desktop applications.<br />
                    If you are interested, you can view some of my favourite projects here.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/adya2198" color="inherit" target="_blank">
                            <GitHub />
                        </Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have a chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/sahooadyaranjan/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:ranjanadya2198@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;