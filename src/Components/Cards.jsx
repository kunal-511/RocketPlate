import { useState } from "react"
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
import menuImg from "../assets/menu-img.jpg";
const Cards = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (

        <div>
            <Card sx={{ maxWidth: 480, marginTop: "2rem", minHeight: 300 }}>
                <CardMedia sx={{ maxHeight: 300 }}
                    component="img"
                    alt="default image"
                    height="140"
                    image={menuImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
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
                            <MenuItem value="half">Half</MenuItem>
                            <MenuItem value="full">Full</MenuItem>

                        </Select>
                    </FormControl>
                    <Typography>Total Price</Typography>
                </CardActions>
            </Card>

        </div>
    )
}

export default Cards;
