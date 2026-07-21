// src/App.tsx

import { CssBaseline, Container, Typography, Box } from "@mui/material";
import RecommendationPage from "./pages/RecommendationPage";


function App() {
  return (
    <>
      <CssBaseline />

      <Container maxWidth="lg">
        <Box py={4}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            🏥 Healthcare Recommendation System
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            mb={4}
          >
            AI Powered Disease Treatment & Lifestyle Recommendation
          </Typography>

          <RecommendationPage />
        </Box>
      </Container>
    </>
  );
}

export default App;