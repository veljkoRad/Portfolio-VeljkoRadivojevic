import { Card, CardContent, Typography, styled } from "@mui/material";

const divColored = {
  backgroundColor: "#0092FF",
  borderRadius: "20px",
  padding: "10px 10px 10px 15px",
};

const Education = ({ width }) => {
  const EduTyp1 = styled(Typography)(({ theme }) => ({
    fontSize: width > 370 ? "1.3rem" : "0.95rem",
    color: theme.palette.primary.main,
  }));
  const EduTyp2 = styled(Typography)(({ theme }) => ({
    fontSize: width > 370 ? "1rem" : "0.75rem",
    color: theme.palette.primary.main,
  }));

  return (
    <Card id="education" name="Education">
      <CardContent>
        <div style={{ ...divColored, opacity: 0.6 }}>
          <EduTyp1>“Polytechnic" - high school for new technologies</EduTyp1>
          <EduTyp2>2007-2011,Belgrade</EduTyp2>
        </div>
        <div style={{ ...divColored, opacity: 0.55 }}>
          <EduTyp1>Faculty of Mechanical Engineering</EduTyp1>
          <EduTyp2>2011-2018, University of Belgrade</EduTyp2>
        </div>
        <div style={{ ...divColored, opacity: 0.5 }}>
          <EduTyp1>
            Worked as CNC Programmer for 3+years in several companies
          </EduTyp1>
        </div>
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
