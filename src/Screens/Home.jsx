import Footer from "../Components/Footer"
import Cards from "../Components/Cards"

import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/Carousel_img1.jpg";
import img2 from "../assets/Carousel_img2.jpg";
import img3 from "../assets/Carousel_img3.jpg";
import img4 from "../assets/Carousel_img4.jpg";
import { Box, Typography, TextField, Button } from "@mui/material";
const Home = () => {

    const [foodItem, setFoodItem] = useState([])
    const [foodCategory, setFoodCategory] = useState([])
    const [search, setSearch] = useState("")
    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/foodData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            //   console.log("Received data:", data);

            setFoodCategory(data.food_category);
            setFoodItem(data.food_items);
            // console.log("food_category:", data.food_category);
            //console.log("food_items:", data.food_items);
        } catch (error) {
            //console.error("Error loading data:", error);
        }
    };




    useEffect(() => {
        loadData()
    }, [])
    // console.log("foodCategory:", foodCategory);
    return (
        <div>
            <div>
                <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false}>
                    <Box sx={{ position: "relative", width: "100%" }}>
                        <img className="carousel-img" src={img1} alt="Slide 1" />
                        <Typography className="carousel-caption">
                            <TextField fullWidth label="Search" id="fullWidth" type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            {/* <Button variant="contained">Search</Button> */}
                        </Typography>
                    </Box>

                    <Box sx={{ position: "relative", width: "100%" }}>
                        <img className="carousel-img" src={img2} alt="Slide 2" />
                        <Typography className="carousel-caption">
                            <TextField fullWidth label="Search" id="fullWidth" type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            {/* <Button variant="contained">Search</Button> */}
                        </Typography>
                    </Box>
                    <Box sx={{ position: "relative", width: "100%" }}>
                        <img className="carousel-img" src={img3} alt="Slide 2" />
                        <Typography className="carousel-caption">
                            <TextField fullWidth label="Search" id="fullWidth" type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            {/* <Button variant="contained">Search</Button> */}
                        </Typography>
                    </Box>
                    <Box sx={{ position: "relative", width: "100%" }}>
                        <img className="carousel-img" src={img4} alt="Slide 2" />
                        <Typography className="carousel-caption">
                            <TextField fullWidth label="Search" id="fullWidth" type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            {/* <Button variant="contained">Search</Button> */}
                        </Typography>
                    </Box>
                </Carousel>
            </div>
            {foodCategory.length > 0 ? (
                foodCategory.map((data, index) => (
                    <div className="foodCategory" key={index}>
                        <h1>{data.CategoryName}</h1>
                        <hr />
                        <Grid container>
                            {foodItem.length > 0 ? (
                                foodItem
                                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map((filterItems) => (
                                        <div key={filterItems._id} className="foodCard">
                                            <Cards
                                                foodName={filterItems.name}
                                                foodImg={filterItems.img}
                                                options={filterItems.options[0]}
                                            />
                                        </div>
                                    ))
                            ) : (
                                <div>========</div>
                            )}
                        </Grid>

                    </div>
                ))
            ) : (
                <div>========</div>
            )}

            <Footer />
        </div>
    );
}

export default Home
