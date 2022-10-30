import { Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import * as Data from "../data/about.js";

const About = () => {
    return (
        <>
            <IntroSection />
            <ExperienceSection />
        </>
    )
}

const IntroSection = () => {
    return (
        <Paper elevation={4} sx={{ margin: "2%", padding: "2%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {Data.INTRO_HEADER}
            </Typography>
            <Typography>
                {Data.INTRO_DESCRIPTION}
            </Typography>
            <Button
                variant="outlined"
                color="secondary"
                target="_blank"
                rel="noreferrer"
                href={Data.RESUME_LINK}
                sx={{ marginTop: "1%" }}>
                Resume
            </Button>
        </Paper>
    )
}

const ExperienceSection = () => {
    return (
        <>
            <Paper elevation={4} sx={{ margin: "2%", padding: "2%" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {Data.EXPERIENCE_HEADER}
                </Typography>
                <Stepper orientation="vertical">
                    {Data.EXPERIENCE_LIST.map(exp => (
                        <Step key={exp.company + exp.role} active={true}>
                            <StepLabel>
                                {exp.role}
                            </StepLabel>
                            <StepContent>
                                <Typography>{exp.company}</Typography>
                                <Typography>{exp.tenure}</Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </>
    )
}

export default About;