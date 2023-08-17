'use client';
import {useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {CustomTabPanel} from "@/src/frontend/components/tabs/CustomTabPanel";

export const RecipeTab = () => {

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
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
            </Box>
        </>
    )
}
