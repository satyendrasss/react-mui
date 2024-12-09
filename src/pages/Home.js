import Layout from "../layouts/Layout";

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import MediaCard from "../components/Mediacard";
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function Home() {
    return (
        <>
            <Layout>
                <Grid container spacing={2}>
                    <Grid size={8} sx={{ display: 'flex', gap: 2 }} >
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                    </Grid>
                    <Grid size={4}>
                        <Item>

                            <Typography variant="h6" gutterBottom>
                                h6. Heading
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                            <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                                button text
                            </Typography>
                            <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                                caption text
                            </Typography>
                            <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                                overline text
                            </Typography>

                        </Item>
                    </Grid>


                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>


                </Grid>
            </Layout>
        </>
    )
}

export default Home;