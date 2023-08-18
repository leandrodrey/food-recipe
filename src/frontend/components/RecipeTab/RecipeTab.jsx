'use client';
import {useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {CustomTabPanel} from "@/src/frontend/components/RecipeTab/CustomTabPanel";

export const RecipeTab = ({ingredients, steps}) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Ingredients" />
                        <Tab label="Steps"  />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {ingredients.map((ingredient, index) => (
                        <div key={`${index}-${ingredient}`}>
                            <p>{ingredient.ingredient}</p>
                            <p>{ingredient.quantity}</p>
                        </div>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {steps.map((step, index) => (
                        <div key={`${index}-${step}`}>{step}</div>
                    ))}
                </CustomTabPanel>
            </Box>
        </>
    )
}
