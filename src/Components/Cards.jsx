import { useState } from "react"
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import menuImg from "../assets/menu-img.jpg";


const Cards = (props) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    let options = props.options
    let priceOptions = Object.keys(options)
    return (

        <div>
            <Card sx={{ maxWidth: 480, marginTop: "2rem", }}>
                <CardMedia sx={{ objectFit: "fill", height: 300 }}
                    component="img"
                    alt="default image"
                    height="140"
                    image={props.foodImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.foodName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum repellat sed!
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    {/* <Button size="small">Learn More</Button> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Age</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {Array.from(Array(6), (e, i) => {
                                return <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Age</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {priceOptions.map((data) => (
                                <MenuItem key={data} value={data}>
                                    {data}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography>Total Price</Typography>
                </CardActions>
            </Card>

        </div>
    )
}

export default Cards;
Cards.propTypes = {
    foodName: PropTypes.string.isRequired,
    foodImg: PropTypes.string,
    options: PropTypes.any
    // Add other prop types if there are additional props
};
