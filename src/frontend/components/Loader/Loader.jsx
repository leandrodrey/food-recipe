import {CircularProgress} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Loader.css";

export const Loader = () => {
    return (
        <>
            <Container maxWidth="xs">
                <Box component="div" className="loader_container">
                    <CircularProgress color="secondary"/>
                </Box>
            </Container>
        </>
    )
}
