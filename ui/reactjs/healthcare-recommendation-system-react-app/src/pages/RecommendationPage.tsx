// src/pages/RecommendationPage.tsx

import { useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";

import RecommendationForm from "../components/RecommendationForm";
import PatientProfileCard from "../components/PatientProfileCard";
import RecommendationList from "../components/RecommendationList";

import recommendationApi from "../api/RecommendationApi";



import type {
  RecommendationRequest
  
} from "../types/request";

import type {
  RecommendationResponse
  
} from "../types/response";

const RecommendationPage = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [response, setResponse] =
    useState<RecommendationResponse | null>(null);

  //------------------------------------------------------------------
  // Submit Handler
  //------------------------------------------------------------------

  const handleSubmit = async (
    values: RecommendationRequest
  ) => {
    try {
      setLoading(true);
      setError("");

      const result = await recommendationApi.generateRecommendations(values);

      setResponse(result);
    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
          "Unable to generate recommendations."
      );
    } finally {
      setLoading(false);
    }
  };

  //------------------------------------------------------------------

  return (
    <Box>

      {/* Input Form */}

      <RecommendationForm
        onSubmit={handleSubmit}
        loading={loading}
      />

      {/* Loading */}

      {loading && (
        <Box
          mt={4}
          display="flex"
          justifycontent="center"
        >
          <CircularProgress />
        </Box>
      )}

      {/* Error */}

      {error && (
        <Box mt={4}>
          <Alert severity="error">
            {error}
          </Alert>
        </Box>
      )}

      {/* Response */}

      {response && (
        <Grid
          container
          spacing={3}
          mt={2}
        >
          {/* Patient */}

          <Grid size={{ xs: 12 }}>
            <PatientProfileCard
              profile={response.patient_profile}
            />
          </Grid>

          {/* Recommendations */}

          <Grid size={{ xs: 12 }}>
            <RecommendationList
              recommendations={
                response.recommendations
              }
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default RecommendationPage;
