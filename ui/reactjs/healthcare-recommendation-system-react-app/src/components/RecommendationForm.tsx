// src/components/RecommendationForm.tsx

import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import type { RecommendationRequest } from "../types/request";

interface RecommendationFormProps {
  onSubmit: (data: RecommendationRequest) => void;
  loading: boolean;
}

const RecommendationForm = ({
  onSubmit,
  loading,
}: RecommendationFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecommendationRequest>({
    defaultValues: {
      age: 45,
      gender: "Male",
      symptoms: "",
      medical_history: "",
    },
  });

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          Patient Information
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={3}
        >
          Enter patient details to generate AI-powered healthcare
          recommendations.
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* Age */}

            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="age"
                control={control}
                rules={{
                  required: "Age is required",
                  min: {
                    value: 1,
                    message: "Minimum age is 1",
                  },
                  max: {
                    value: 120,
                    message: "Maximum age is 120",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    label="Age"
                    error={!!errors.age}
                    helperText={errors.age?.message}
                  />
                )}
              />
            </Grid>

            {/* Gender */}

            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="gender"
                control={control}
                rules={{
                  required: "Gender is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="Gender"
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                )}
              />
            </Grid>

            {/* Symptoms */}

            <Grid size={{ xs: 12 }}>
              <Controller
                name="symptoms"
                control={control}
                rules={{
                  required: "Symptoms are required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    minRows={4}
                    label="Symptoms"
                    placeholder="Example: Fever, cough, fatigue..."
                    error={!!errors.symptoms}
                    helperText={errors.symptoms?.message}
                  />
                )}
              />
            </Grid>

            {/* Medical History */}

            <Grid size={{ xs: 12 }}>
              <Controller
                name="medical_history"
                control={control}
                rules={{
                  required: "Medical history is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    minRows={4}
                    label="Medical History"
                    placeholder="Example: Diabetes, Hypertension..."
                    error={!!errors.medical_history}
                    helperText={errors.medical_history?.message}
                  />
                )}
              />
            </Grid>

            {/* Buttons */}

            <Grid size={{ xs: 12 }}>
              <Stack
                direction="row"
                spacing={2}
                justifycontent="flex-end"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => reset()}
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                >
                  {loading
                    ? "Generating..."
                    : "Generate Recommendation"}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecommendationForm;