"use client"
import {useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const RecipeValoration = () => {

    const [rating, setRating] = useState('');

    const handleChange = (event) => {
        setRating(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                    <MenuItem value={4}>Fourth</MenuItem>
                    <MenuItem value={5}>Fifth</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )

}
