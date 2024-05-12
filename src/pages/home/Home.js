import React from 'react';
import { Box, Grid, Container, Button } from '@mui/material';
import { projectColors } from "../../assets/colors/index";
import * as images from "../../assets/index";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import data from "./index"

const Home = () => {
    return (
        //=====> what people, cards, company logos
        <Box component={"section"}
            sx={{
                background: `linear-gradient(90deg, rgba(1,4,16,1) 53%, rgba(18,45,69,1) 100%)`,
                height: "auto"
            }}
        >
            <Container>


                {/* What people section */}

                <Grid container
                    sx={{
                        color: projectColors.white,
                        textAlign: { xs: "center", md: "inherit" }

                    }}
                    alignItems={"center"}
                    justifyContent={{ xs: "center", md: "space-between" }}
                >
                    <Grid item xs={12} md={6}>
                        <Box component={"h2"}
                            sx={{
                                fontSize: { xs: "32px", sm: "48px" }
                            }}
                        >
                            What people are <Box component={"br"} sx={{ display: { xs: "none", md: "block" } }} /> saying about us
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>Everything you need to accept card payments <Box component={"br"} sx={{ display: { xs: "none", md: "block" } }} /> and grow your business anywhere on the planet. </Box>
                    </Grid>

                </Grid>

                {/* Cards section */}

                <Grid container
                    justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
                    alignItems={"center"}
                    columnGap={2}
                >
                    {
                        data.map((item, index) => (

                            <Grid key={index} item xs={12} sm={5} md={3.5} lg={2.5} mt={{ xs: "4" }}
                                sx={{
                                    maxWidth: { xs: "80%", sm: "50%", md: "100%", lg: "250px" },
                                    minHeight: "230px",
                                    maxHeight: "auto",
                                    background: `linear-gradient(to bottom right,rgba(63,62,69,1) 53%, rgba(17,15,29,1))`,
                                    borderRadius: "10px",
                                    pt: 4,
                                    pb: 4,
                                    pl: 2,
                                    pr: 2,
                                    mt: 4,
                                    mb: 5
                                }}
                            >

                                <Grid item xs={12} md={4}>
                                    <Box component={"img"}
                                        src={images.projectImages.cardParallelImg}
                                        alt="Card image"
                                        sx={{
                                            width: "30px"
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box component={"p"}
                                        sx={{
                                            fontSize: { xs: "14px" },
                                            color: projectColors.white,
                                            mt: 3
                                        }}
                                    >
                                        {item.cardText}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} mt={3}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Stack direction="row" spacing={2}>
                                                <Avatar alt="Reviewer image" src={item.reviewerImg} />

                                            </Stack>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Box component={"h5"}
                                                sx={{
                                                    m: 0,
                                                    color: projectColors.white
                                                }}
                                            >
                                                {item.reviewerName}
                                            </Box>
                                            <Box component={"small"}
                                                sx={{
                                                    color: projectColors.white

                                                }}
                                            >Founder & Leader</Box>
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Grid>
                        ))
                    }
                </Grid>

                {/* comapany logos */}

                <Grid container
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    textAlign={"-webkit-center"}
                    spacing={4}
                    mt={1}

                >
                    <Grid item xs={12} sm={6} md={3}

                    >
                        <Box component={"img"}
                            sx={{
                                width: "150px",

                            }}
                            src={images.projectImages.airBnb}
                            alt="Airbnb logo"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box component={"img"}
                            sx={{
                                width: "150px",
                                display: "block"

                            }}
                            src={images.projectImages.binance}
                            alt="Binance logo"
                        /> </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box component={"img"}
                            sx={{
                                width: "150px",
                                display: "block"

                            }}
                            src={images.projectImages.coinbase}
                            alt="Coinbase logo"
                        /> </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box component={"img"}
                            sx={{
                                width: "150px",
                                display: "block"

                            }}
                            src={images.projectImages.dropbox}
                            alt="Airbnb logo"
                        /> </Grid>
                </Grid>

            </Container>

            {/* let's try section starts  */}
            <Box component={"section"}
                sx={{
                    backgroundColor: projectColors.footerBgColor,
                    width: "100%",
                    height: "auto",
                    mt: 10,
                    pt: 4,
                    pb: 4
                }}
            >
                <Container
                    sx={{
                        // backgroundColor:"red",
                        width: '80%',
                        height: { xs: "auto", md: "145px" },
                        background: `linear-gradient(to bottom left,rgba(63,62,69,1) 53%, rgba(17,15,29,1))`,
                        borderRadius: "10px",
                        pb: 4

                        // backgroundColor:"red"
                    }}
                >
                    <Grid container
                        justifyContent={"center"}
                        alignItems={"center"}

                    >
                        <Grid item xs={12} md={7}
                            sx={{
                                color: projectColors.white,
                                textAlign: { xs: "center", md: "left" }
                            }}
                        >
                            <Box component={"h2"}

                            >
                                Let's try our service now!
                            </Box>
                            <Box component={"p"}
                                sx={{
                                    mb: 0,
                                    textAlign: { xs: "center", md: "inherit" }
                                }}
                            >
                                Everything you need to accept card payments <Box component={"br"} sx={{ xs: "none", md: "block" }} /> and grow your business anywhere on the planet.
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}
                            sx={{
                                textAlign: { xs: "-webkit-center", md: "inherit" },
                            }}
                        >
                            <Button size={"large"}
                                sx={{
                                    mt: { xs: 3 },
                                    display: "block",
                                    color: "#000000",
                                    textTransform: "capitalize",
                                    background: `linear-gradient(to bottom right, rgba(149,236,239,1) 59%, rgba(51,187,207,1) 100%)`
                                }}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </Box >
    )
}

export default Home;
