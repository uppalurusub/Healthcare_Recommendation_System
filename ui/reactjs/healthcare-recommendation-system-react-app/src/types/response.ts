// src/types/response.ts

/**
 * Patient Profile
 */
export interface PatientProfile {
  age: number;
  gender: string;
  profile_text: string;
}

/**
 * Individual Recommendation
 */
export interface Recommendation {
  disease: string;
  recommended_treatment: string;
  diet_plan: string;
  lifestyle_changes: string[];
  follow_up: string;
}

/**
 * Healthcare Recommendation Response
 */
export interface RecommendationResponse {
  patient_profile: PatientProfile;
  recommendations: Recommendation[];
}

/**
 * Optional API Error Response
 */
export interface ApiErrorResponse {
  detail: string;
}

/**
 * Optional API Success Response
 */
export interface ApiSuccessResponse {
  success: boolean;
  message: string;
}

