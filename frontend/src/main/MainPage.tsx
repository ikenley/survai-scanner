import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../shared/Navbar";
import PunPanel from "./PunPanel";

// Based on:
// https://github.com/mui/material-ui/tree/v5.14.17/docs/data/material/getting-started/templates/pricing

const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <Container maxWidth="sm" component="main" sx={{ mt: 2 }}>
        <Typography component="h1" variant="h3" color="text.primary">
          SurvAI
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          Transcribe paper surveys using AI (because everything must use AI
          these days)
        </Typography>
        <PunPanel />
      </Container>
    </div>
  );
};

export default MainPage;
