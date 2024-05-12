import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { projectColors } from "../../assets/colors/index";
import * as images from "../../assets/index";
import ButtonComp from '../../components/button/ButtonComp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { data } from "./index"
import { Facebook } from '@mui/icons-material';
// import Linkedin from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const filteredData = data.filter(item => {
        // Adjust the condition based on your requirement
        // For example: return item.linksContent !== undefined;
        return true; // Default condition, change as needed
    });

    return (
        <Box component={"footer"}
            sx={{
                backgroundColor: projectColors.footerBgColor,
            }}
        >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={6} md={3}>
                        {/* logo section */}
                        <Box component={"img"}
                            src={images.projectImages.logo}
                            alt="Logo"
                            sx={{
                                width: "120px",
                                pt: 4,
                                pb: 2,
                                m: 0
                            }}
                        />
                        <Box component="small"
                            sx={{
                                color: projectColors.textColor,
                                display: "block",
                                m: 0,
                                mt: 1
                            }}
                        >
                            A new way to make the payments <Box component={"br"}

                                sx={{
                                    display: { xs: "none", md: "block" },

                                }}
                            /> easy, reliable and secure.
                        </Box>
                    </Grid>
                    {/* useful links section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box component={"h5"}
                            sx={{
                                color: projectColors.white,
                                fontWeight: "medium",
                                transition: "0.3s",
                                cursor: "pointer",
                                pt: 3,
                                // pl: 1.8,
                                "&:hover": {
                                    color: projectColors.secondaryTextColor
                                }
                            }}
                        >
                            Useful Links
                        </Box>
                        {data.filter(item => item.linksContent).map((item, i) => (
                            <ButtonComp
                                textAlign="left"
                                key={i}
                                btnColor={projectColors.textColor}
                                btnText={item.linksContent}
                                sx={{
                                    mt: 1,
                                    display: "block"
                                }}
                            />
                        ))}
                    </Grid>
                    {/* community section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box component={"h5"}
                            sx={{
                                color: projectColors.white,
                                fontWeight: "medium",
                                transition: "0.3s",
                                cursor: "pointer",
                                pt: 3,
                                // pl: 1.8,
                                "&:hover": {
                                    color: projectColors.secondaryTextColor
                                }
                            }}
                        >
                            Community
                        </Box>
                        {data.filter(commu => commu.community).map((item, i) => (
                            <ButtonComp
                                textAlign="left"
                                key={i}
                                btnColor={projectColors.textColor}
                                btnText={item.community}
                                sx={{
                                    mt: 1,
                                    display: "block"
                                }}
                            />
                        ))}
                    </Grid>
                    {/* partner section */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box component={"h5"}
                            sx={{
                                color: projectColors.white,
                                fontWeight: "medium",
                                transition: "0.3s",
                                cursor: "pointer",
                                pt: 3,
                                // pl: 1.8,
                                "&:hover": {
                                    color: projectColors.secondaryTextColor
                                }
                            }}
                        >
                            Partners
                        </Box>
                        {data.filter(part => part.partner).map((part, i) => (
                            <ButtonComp
                                textAlign="left"
                                key={i}
                                btnColor={projectColors.textColor}
                                btnText={part.partner}
                                sx={{
                                    mt: 1,
                                    display: 'block'
                                }}
                            />
                        ))}
                    </Grid>
                </Grid>
                <Box component={"hr"} mt={4} />
                <Grid container justifyContent={{ xs: "center", md: "space-between" }}>
                    <Grid item xs={12} md={9}>
                        <Box component="small"
                            sx={{
                                color: projectColors.white,
                                display: "block",
                                pb: 1.5,
                                width: "100%",
                                textAlign: { xs: "center", md: "left" }
                            }}
                        >
                            Copyright ©️ 2024 HooBank. All Rights Reserved
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} flexBasis={"auto"}>
                        <Box>
                            <ButtonComp sx={{ color: projectColors.instagramLogoColor }} btnText={<InstagramIcon />} />
                            <ButtonComp sx={{ color: projectColors.facebookLogoColor }} btnText={<FacebookRoundedIcon />} />
                            <ButtonComp sx={{ color: projectColors.linkedinLogoColor }} btnText={<LinkedInIcon />} />
                            <ButtonComp sx={{ color: projectColors.white }} btnText={<XIcon />} />
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Footer;



