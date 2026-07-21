
// src/components/LoadingSpinner.tsx

import {
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
  fullScreen?: boolean;
}

const LoadingSpinner = ({
  message = "Generating healthcare recommendations...",
  size = 60,
  fullScreen = false,
}: LoadingSpinnerProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{
        width: "100%",
        minHeight: fullScreen ? "100vh" : "250px",
      }}
    >
      <CircularProgress size={size} />

      <Typography
        variant="body1"
        color="text.secondary"
      >
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;

