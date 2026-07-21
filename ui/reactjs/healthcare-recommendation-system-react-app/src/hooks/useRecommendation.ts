
// src/hooks/useRecommendation.ts

import { useState, useCallback } from "react";

import recommendationApi from "../api/recommendationApi";

import type {
  RecommendationRequest
  
} from "../types/request";

import type {
  RecommendationResponse
  
} from "../types/response";

interface UseRecommendationReturn {
  loading: boolean;
  error: string;
  response: RecommendationResponse | null;

  generateRecommendation: (
    request: RecommendationRequest
  ) => Promise<void>;

  clearResponse: () => void;

  clearError: () => void;
}

const useRecommendation = (): UseRecommendationReturn => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [response, setResponse] =
    useState<RecommendationResponse | null>(null);

  /**
   * Generate Recommendation
   */
  const generateRecommendation = useCallback(
    async (request: RecommendationRequest) => {
      try {
        setLoading(true);
        setError("");

        const result =
          await recommendationApi.generateRecommendations(
            request
          );

        setResponse(result);
      } catch (err: any) {
        const message =
          err?.response?.data?.detail ||
          err?.message ||
          "Unable to generate recommendation.";

        setError(message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  /**
   * Clear Response
   */
  const clearResponse = () => {
    setResponse(null);
  };

  /**
   * Clear Error
   */
  const clearError = () => {
    setError("");
  };

  return {
    loading,
    error,
    response,

    generateRecommendation,

    clearResponse,
    clearError,
  };
};

export default useRecommendation;

