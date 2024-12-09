import Layout from "../layouts/Layout";

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Link,
    IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Contact() {
    return (
        <>
            <Layout>
                <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            We’d love to hear from you! Feel free to reach out to us for any inquiries or assistance.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {/* Contact Form */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                Get in Touch
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    mt: 2,
                                }}
                            >
                                <TextField fullWidth label="Name" variant="outlined" required />
                                <TextField fullWidth label="Email" variant="outlined" type="email" required />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                />
                                <Button variant="contained" color="primary" size="large">
                                    Submit
                                </Button>
                            </Box>
                        </Grid>

                        {/* Contact Information */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                Contact Information
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                                    <Typography>
                                        123 Software Lane, Tech City, Innovate State, 12345
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <PhoneIcon color="primary" sx={{ mr: 2 }} />
                                    <Typography>(123) 456-7890</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <EmailIcon color="primary" sx={{ mr: 2 }} />
                                    <Typography>
                                        <Link href="mailto:contact@yourcompany.com" underline="hover">
                                            contact@yourcompany.com
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Social Media */}
                            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                                Follow Us
                            </Typography>
                            <Box>
                                <IconButton color="primary" href="https://facebook.com" target="_blank">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton color="primary" href="https://twitter.com" target="_blank">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton color="primary" href="https://linkedin.com" target="_blank">
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </>
    )
}

export default Contact;