import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material";
import * as Data from "../data/about.js";

const About = () => {
    return (
        <>
            <IntroSection />
            <ExperienceSection />
            <ProjectsSection />
        </>
    );
};

const IntroSection = () => {
    return (
        <Paper elevation={4} sx={{ margin: "2%", padding: "2%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1%" }}>
                {Data.INTRO_HEADER}
            </Typography>
            <Typography>{Data.INTRO_DESCRIPTION}</Typography>
            <Button
                variant="outlined"
                color="secondary"
                target="_blank"
                rel="noreferrer"
                href={Data.RESUME_LINK}
                sx={{ marginTop: "1%" }}
            >
                Resume
            </Button>
        </Paper >
    );
};

const ExperienceSection = () => {
    return (
        <>
            <Paper elevation={4} sx={{ margin: "2%", padding: "2%" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1%" }}>
                    {Data.EXPERIENCE_HEADER}
                </Typography>
                <Stepper orientation="vertical">
                    {Data.EXPERIENCE_LIST.map((exp) => (
                        <Step key={exp.company + exp.role} active={true}>
                            <StepLabel>{exp.role}</StepLabel>
                            <StepContent>
                                <Typography>{exp.company}</Typography>
                                <Typography>{exp.tenure}</Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </>
    );
};

const ProjectsSection = () => {
    return (
        <>
            <Paper elevation={4} sx={{ margin: "2%", padding: "2%" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1%" }}>
                    {Data.PROJECTS_HEADER}
                </Typography>
                <Grid container>
                    {Data.PROJECTS_LIST.map((project) => (
                        <Grid item xs={12} sm={4} key={project.title}>
                            <Card sx={{ maxWidth: 320 }}>
                                <CardMedia
                                    component="img"
                                    alt={project.title}
                                    height="256"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="medium"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={project.link}
                                    >
                                        Show Project
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </>
    );
};

export default About;
