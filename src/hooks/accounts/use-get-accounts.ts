"use client";
import { client } from "@/lib/hono";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const UseGetAccount = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["accountquerykey"],
    queryFn: async () => {
      const response = await client.api.db.accounts.$get();
      if (!response) {
        throw new Error("Failed to fetch accounts");
      }
      const { data } = await response.json();
      return data;
    },
  });
  return query;
};
