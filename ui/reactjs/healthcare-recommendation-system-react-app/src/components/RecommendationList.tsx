
// src/components/RecommendationList.tsx

import {
  Alert,
  Box,
  Stack,
  Typography,
} from "@mui/material";

import RecommendationCard from "./RecommendationCard";
import type { Recommendation } from "../types/response";

interface RecommendationListProps {
  recommendations: Recommendation[];
}

const RecommendationList = ({
  recommendations,
}: RecommendationListProps) => {
  if (!recommendations || recommendations.length === 0) {
    return (
      <Alert severity="info">
        No healthcare recommendations are available for the
        provided patient information.
      </Alert>
    );
  }

  return (
    <Box mt={4}>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
      >
        Healthcare Recommendations
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
      >
        Based on the patient's symptoms and medical history,
        the following treatment recommendations have been
        generated.
      </Typography>

      <Stack spacing={3}>
        {recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={`${recommendation.disease}-${index}`}
            recommendation={recommendation}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default RecommendationList;

