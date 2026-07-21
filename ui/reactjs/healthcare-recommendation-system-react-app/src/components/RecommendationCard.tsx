// src/components/RecommendationCard.tsx

import {
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import type { Recommendation } from "../types/response";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard = ({
  recommendation,
}: RecommendationCardProps) => {
  return (
    <Card
      elevation={4}
      sx={{
        mb: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>

        {/* Header */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {recommendation.disease}
          </Typography>

          <Chip
            color="primary"
            icon={<LocalHospitalIcon />}
            label="Recommendation"
          />
        </Stack>

        <Divider sx={{ mb: 2 }} />

        {/* Treatment */}

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          mb={2}
        >
          <MedicalServicesIcon color="primary" />

          <Typography variant="subtitle1">
            <strong>Treatment:</strong>{" "}
            {recommendation.recommended_treatment}
          </Typography>
        </Stack>

        {/* Diet */}

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          mb={2}
        >
          <RestaurantMenuIcon color="success" />

          <Typography variant="subtitle1">
            <strong>Diet Plan:</strong>{" "}
            {recommendation.diet_plan}
          </Typography>
        </Stack>

        {/* Lifestyle */}

        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
        >
          Lifestyle Changes
        </Typography>

        <List dense>

          {recommendation.lifestyle_changes.map(
            (item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <DirectionsWalkIcon
                    color="secondary"
                  />
                </ListItemIcon>

                <ListItemText primary={item} />
              </ListItem>
            )
          )}

        </List>

        <Divider sx={{ my: 2 }} />

        {/* Follow-up */}

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <EventRepeatIcon color="warning" />

          <Typography variant="subtitle1">
            <strong>Follow-up:</strong>{" "}
            {recommendation.follow_up}
          </Typography>
        </Stack>

      </CardContent>
    </Card>
  );
};

export default RecommendationCard;

