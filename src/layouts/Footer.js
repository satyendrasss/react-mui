
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    textAlign: 'center',
                    py: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default Footer;