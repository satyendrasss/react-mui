import Footer from "./Footer";
import Header from "./Header";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';



function Layout({children}) {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CssBaseline />
                <Header/>
                <Box component="main" sx={{ flex: 1, p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
                <Footer/>
            </Box>
        </>
    )
}
export default Layout;