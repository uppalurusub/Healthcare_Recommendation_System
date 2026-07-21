// src/components/PatientProfileCard.tsx

import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import DescriptionIcon from "@mui/icons-material/Description";

interface PatientProfile {
  age: number;
  gender: string;
  profile_text: string;
}

interface PatientProfileCardProps {
  profile: PatientProfile;
}

const PatientProfileCard = ({
  profile,
}: PatientProfileCardProps) => {
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
          spacing={2}
          alignItems="center"
          mb={3}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: "primary.main",
            }}
          >
            <PersonIcon fontSize="large" />
          </Avatar>

          <div>
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Patient Profile
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Patient demographic information
            </Typography>
          </div>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>

          {/* Age */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="caption"
                color="text.secondary"
              >
                AGE
              </Typography>

              <Chip
                icon={<CakeIcon />}
                color="primary"
                label={`${profile.age} Years`}
              />
            </Stack>
          </Grid>

          {/* Gender */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography
                variant="caption"
                color="text.secondary"
              >
                GENDER
              </Typography>

              <Chip
                icon={<WcIcon />}
                color="secondary"
                label={profile.gender}
              />
            </Stack>
          </Grid>

          {/* Profile Text */}

          <Grid size={{ xs: 12 }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              PATIENT SUMMARY
            </Typography>

            <Card
              variant="outlined"
              sx={{
                mt: 1,
                p: 2,
                bgcolor: "grey.50",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <DescriptionIcon color="primary" />

                <Typography variant="body1">
                  {profile.profile_text}
                </Typography>
              </Stack>
            </Card>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  );
};

export default PatientProfileCard;

