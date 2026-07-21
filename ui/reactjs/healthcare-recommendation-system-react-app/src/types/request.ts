// src/types/request.ts

/**
 * Healthcare Recommendation Request
 */
export interface RecommendationRequest {
  age: number;
  gender: GenderType;
  symptoms: string;
  medical_history: string;
}

/**
 * Supported Gender Values
 */
export type GenderType =
  | "Male"
  | "Female"
  | "Other";

/**
 * Default Request Values
 */
export const defaultRecommendationRequest: RecommendationRequest = {
  age: 45,
  gender: "Male",
  symptoms: "",
  medical_history: "",
};

/**
 * Validation Limits
 */
export const RecommendationValidation = {
  MIN_AGE: 1,
  MAX_AGE: 120,
};

