// src/utils/formatter.ts


import type { PatientProfile } from "../types/response";


import type {
  RecommendationResponse, Recommendation
  
} from "../types/response";

//import type { RecommendationRequest } from "../types/request";


/*----------------------------------------------------------
 String Utilities
----------------------------------------------------------*/

export const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const titleCase = (value: string): string =>
  value
    .toLowerCase()
    .split(" ")
    .map(capitalize)
    .join(" ");

/*----------------------------------------------------------
 Patient Profile
----------------------------------------------------------*/

export const formatPatientName = (
  profile: PatientProfile
): string => {
  return `${profile.gender}, ${profile.age} Years`;
};

export const formatProfileSummary = (
  profile: PatientProfile
): string => {
  return profile.profile_text
    ?.replace(/\s+/g, " ")
    .trim();
};

/*----------------------------------------------------------
 Recommendation
----------------------------------------------------------*/

export const uniqueRecommendations = (
  recommendations: Recommendation[]
): Recommendation[] => {
  const map = new Map<string, Recommendation>();

  recommendations.forEach((item) => {
    const key = `${item.disease}-${item.recommended_treatment}`;

    if (!map.has(key)) {
      map.set(key, item);
    }
  });

  return [...map.values()];
};

export const uniqueDiseases = (
  recommendations: Recommendation[]
): string[] => {
  return [
    ...new Set(
      recommendations.map((r) => r.disease)
    ),
  ];
};

export const uniqueTreatments = (
  recommendations: Recommendation[]
): string[] => {
  return [
    ...new Set(
      recommendations.map(
        (r) => r.recommended_treatment
      )
    ),
  ];
};

export const allLifestyleChanges = (
  recommendations: Recommendation[]
): string[] => {
  return [
    ...new Set(
      recommendations.flatMap(
        (r) => r.lifestyle_changes
      )
    ),
  ];
};

/*----------------------------------------------------------
 Statistics
----------------------------------------------------------*/

export const recommendationCount = (
  response: RecommendationResponse
): number => response.recommendations.length;

export const diseaseCount = (
  response: RecommendationResponse
): number =>
  uniqueDiseases(response.recommendations).length;

/*----------------------------------------------------------
 Display Helpers
----------------------------------------------------------*/

export const severityColor = (
  disease: string
):
  | "success"
  | "warning"
  | "error"
  | "info" => {
  const value = disease.toLowerCase();

  if (
    value.includes("heart") ||
    value.includes("stroke")
  ) {
    return "error";
  }

  if (
    value.includes("diabetes") ||
    value.includes("hypertension")
  ) {
    return "warning";
  }

  return "success";
};

export const recommendationTitle = (
  recommendation: Recommendation
): string =>
  `${recommendation.disease} Treatment Plan`;

/*----------------------------------------------------------
 Date Formatting
----------------------------------------------------------*/

export const formatDate = (
  value: Date | string
): string =>
  new Date(value).toLocaleDateString();

export const formatDateTime = (
  value: Date | string
): string =>
  new Date(value).toLocaleString();

/*----------------------------------------------------------
 Number Formatting
----------------------------------------------------------*/

export const formatAge = (
  age: number
): string => `${age} Years`;

export const formatPercentage = (
  value: number
): string => `${value.toFixed(2)}%`;

