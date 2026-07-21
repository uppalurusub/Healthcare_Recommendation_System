// src/components/ErrorAlert.tsx

import {
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

interface ErrorAlertProps {
  open: boolean;
  message: string;
  title?: string;
  onClose?: () => void;
}

const ErrorAlert = ({
  open,
  message,
  title = "Error",
  onClose,
}: ErrorAlertProps) => {
  if (!message) return null;

  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        variant="filled"
        sx={{
          mb: 3,
          borderRadius: 2,
        }}
        action={
          onClose ? (
            <IconButton
              size="small"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          ) : undefined
        }
      >
        <AlertTitle>{title}</AlertTitle>

        {message}
      </Alert>
    </Collapse>
  );
};

export default ErrorAlert;

