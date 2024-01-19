import Footer from "../Components/Footer"
import Cards from "../Components/Cards"
import SlideShow from "../Components/SlideShow"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
const Home = () => {

    const [foodItem, setFoodItem] = useState([])
    const [foodCategory, setFoodCategory] = useState([])
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
            console.log("Received data:", data);

            setFoodCategory(data.food_category);
            setFoodItem(data.food_items);
            console.log("food_category:", data.food_category);
            console.log("food_items:", data.food_items);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };




    useEffect(() => {
        loadData()
    }, [])
    console.log("foodCategory:", foodCategory);
    return (
        <div>
            <SlideShow />
            {foodCategory.length > 0 ? (
                foodCategory.map((data, index) => (
                    <div className="foodCategory" key={index}>
                        <div>{data.CategoryName}</div>
                        <hr />
                        <Grid container>
                            {foodItem.length > 0 ? (
                                foodItem
                                    .filter((item) => item.CategoryName === data.CategoryName)
                                    .map((filterItems) => (
                                        <div key={filterItems._id} className="foodCard">
                                            <Cards />
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
