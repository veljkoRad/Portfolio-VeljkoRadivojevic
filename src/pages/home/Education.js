import { Card, CardContent, Typography, styled, useTheme } from "@mui/material";

const Education = ({ width }) => {
  const theme = useTheme();
  const EduTyp1 = styled(Typography)(({ theme }) => ({
    fontSize: width > 370 ? "1.5em" : "1.3rem",
    color: theme.palette.secondary.main,
    opacity: 0.7,
  }));
  const EduTyp2 = styled(Typography)(({ theme }) => ({
    fontSize: width > 370 ? "1rem" : "0.75rem",
    color: theme.palette.secondary.main,
    opacity: 0.7,
  }));

  return (
    <Card id="education" name="Education">
      <CardContent>
        <ul style={{ color: theme.palette.error.main, padding: "-1.2rem" }}>
          <li style={{ marginBottom: "1.2rem" }}>
            <EduTyp1>“Polytechnic" - high school for new technologies</EduTyp1>
            <EduTyp2>2007-2011,Belgrade</EduTyp2>
          </li>
          <li style={{ marginBottom: "1.2rem" }}>
            <EduTyp1>Faculty of Mechanical Engineering</EduTyp1>
            <EduTyp2>2011-2018, University of Belgrade</EduTyp2>
          </li>
          <li>
            <EduTyp1>
              Worked as CNC Programmer for 3+years in several companies
            </EduTyp1>
          </li>
        </ul>
        <Typography
          sx={{ fontSize: width < 430 ? "1rem" : "1.4rem", opacity: 0.75 }}
        >
          My math skills, taken from college help me a lot through learning web
          development.<br></br>As Cnc programmer I learned about programing
          basics.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
