import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const styles = {
    backgroundColor: "lightblue",
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
    paddingTop: "20px",
};
function Content2() {
    const navItems = ['Home', 'About', 'Products', 'Contact'];
    return (
        <div style={styles}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <Button key={item} sx={{
                        color: '#000', fontSize: '16px', fontWeight:
                            'bold'
                    }} >
                        {item}
                    </Button>
                ))}
            </Box>
        </div>
    );
}
export default Content2;