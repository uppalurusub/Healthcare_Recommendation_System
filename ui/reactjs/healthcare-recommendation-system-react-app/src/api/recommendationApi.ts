// src/api/recommendationApi.ts

import apiClient from "./axios";

import type {
  RecommendationRequest
  
} from "../types/request";

import type {
  RecommendationResponse
  
} from "../types/response";

/**
 * Recommendation API Service
 */
class RecommendationApi {
  /**
   * Generate Healthcare Recommendations
   */
  async generateRecommendations(
    request: RecommendationRequest
  ): Promise<RecommendationResponse> {
    const response =
      await apiClient.post<RecommendationResponse>(
        "/recommendation/",
        request
      );

    return response.data;
  }
}

/**
 * Export Singleton Instance
 */
export default new RecommendationApi();

