import Layout from "../layouts/Layout";
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function About() {
    return (
        <>
            <Layout>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
                    {/* Company Description */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Welcome to [Your Company Name], a leading software development company specializing
                            in delivering innovative and scalable solutions for businesses of all sizes.
                            With a passion for technology and a commitment to excellence, we help
                            transform ideas into reality.
                        </Typography>
                    </Box>

                    {/* Mission and Vision */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                            Our Mission and Vision
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                            At [Your Company Name], we aim to empower businesses through cutting-edge technology,
                            delivering tailor-made software solutions that drive growth and innovation.
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Developing high-quality software tailored to your needs." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Empowering businesses with cutting-edge technology." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Delivering exceptional user experiences and scalable solutions." />
                            </ListItem>
                        </List>
                    </Box>

                    {/* Services Section */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                            Our Services
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Custom Software Development
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            We build tailored software solutions that align with your business goals.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Web and Mobile Apps
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Delivering responsive and user-friendly web and mobile applications.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Cloud Solutions
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Offering scalable cloud computing solutions for businesses.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Meet the Team */}
                    <Box>
                        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                            Meet Our Team
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://via.placeholder.com/200"
                                        alt="Team Member"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            John Doe
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            CEO & Founder
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://via.placeholder.com/200"
                                        alt="Team Member"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Jane Smith
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            CTO
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://via.placeholder.com/200"
                                        alt="Team Member"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Alice Brown
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Head of Marketing
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Layout>
        </>
    )
}

export default About;