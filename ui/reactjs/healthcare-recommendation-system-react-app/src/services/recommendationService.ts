
// src/services/recommendationService.ts

import recommendationApi from "../api/recommendationApi";

import type {
  RecommendationRequest
  
} from "../types/request";

import type {
  RecommendationResponse
  
} from "../types/response";

class RecommendationService {
  /**
   * Generate Healthcare Recommendations
   */
  async generateRecommendation(
    request: RecommendationRequest
  ): Promise<RecommendationResponse> {
    return await recommendationApi.generateRecommendations(
      request
    );
  }

  /**
   * Validate Request
   */
  validateRequest(
    request: RecommendationRequest
  ): string[] {
    const errors: string[] = [];

    if (!request.age || request.age < 1 || request.age > 120) {
      errors.push("Age must be between 1 and 120.");
    }

    if (!request.gender?.trim()) {
      errors.push("Gender is required.");
    }

    if (!request.symptoms?.trim()) {
      errors.push("Symptoms are required.");
    }

    if (!request.medical_history?.trim()) {
      errors.push("Medical history is required.");
    }

    return errors;
  }

  /**
   * Format Patient Summary
   */
  getPatientSummary(
    request: RecommendationRequest
  ): string {
    return `
Age: ${request.age}
Gender: ${request.gender}

Symptoms:
${request.symptoms}

Medical History:
${request.medical_history}
`;
  }

  /**
   * Count Recommendations
   */
  getRecommendationCount(
    response: RecommendationResponse
  ): number {
    return response.recommendations.length;
  }

  /**
   * Get Unique Diseases
   */
  getUniqueDiseases(
    response: RecommendationResponse
  ): string[] {
    return [
      ...new Set(
        response.recommendations.map(
          (r) => r.disease
        )
      ),
    ];
  }

  /**
   * Get Unique Treatments
   */
  getUniqueTreatments(
    response: RecommendationResponse
  ): string[] {
    return [
      ...new Set(
        response.recommendations.map(
          (r) => r.recommended_treatment
        )
      ),
    ];
  }

  /**
   * Get Unique Diet Plans
   */
  getUniqueDietPlans(
    response: RecommendationResponse
  ): string[] {
    return [
      ...new Set(
        response.recommendations.map(
          (r) => r.diet_plan
        )
      ),
    ];
  }

  /**
   * Get All Lifestyle Recommendations
   */
  getLifestyleChanges(
    response: RecommendationResponse
  ): string[] {
    return [
      ...new Set(
        response.recommendations.flatMap(
          (r) => r.lifestyle_changes
        )
      ),
    ];
  }
}

export default new RecommendationService();

