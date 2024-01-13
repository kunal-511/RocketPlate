import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/Carousel_img1.jpg";
import img2 from "../assets/Carousel_img2.jpg";
import img3 from "../assets/Carousel_img3.jpg";
import img4 from "../assets/Carousel_img4.jpg";
import { Box, Typography, TextField, Button } from "@mui/material";

const SlideShow = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false}>
                <Box sx={{ position: "relative", width: "100%" }}>
                    <img className="carousel-img" src={img1} alt="Slide 1" />
                    <Typography className="carousel-caption">
                        <TextField fullWidth label="Search" id="fullWidth" />
                        <Button variant="contained">Search</Button>
                    </Typography>
                </Box>

                <Box sx={{ position: "relative", width: "100%" }}>
                    <img className="carousel-img" src={img2} alt="Slide 2" />
                    <Typography className="carousel-caption">
                        <TextField fullWidth label="Search" id="fullWidth" />
                        <Button variant="contained">Search</Button>
                    </Typography>
                </Box>
                <Box sx={{ position: "relative", width: "100%" }}>
                    <img className="carousel-img" src={img3} alt="Slide 2" />
                    <Typography className="carousel-caption">
                        <TextField fullWidth label="Search" id="fullWidth" />
                        <Button variant="contained">Search</Button>
                    </Typography>
                </Box>
                <Box sx={{ position: "relative", width: "100%" }}>
                    <img className="carousel-img" src={img4} alt="Slide 2" />
                    <Typography className="carousel-caption">
                        <TextField fullWidth label="Search" id="fullWidth" />
                        <Button variant="contained">Contained</Button>
                    </Typography>
                </Box>
            </Carousel>
        </div>
    );
};

export default SlideShow;
