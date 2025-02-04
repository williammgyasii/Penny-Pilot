"use client";

import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const UseGetAllAccounts = () => {
  return useQuery({
    queryKey: ["getAllAaccountsQueryKey"],
    refetchOnWindowFocus: true, // Sync data when window is focused
    staleTime: 30000, // Data is fresh for 30 seconds
    queryFn: async () => {
      const response = await client.api.db.accounts.getAllAccounts.$get();
      if (!response) {
        throw new Error("Failed to fetch accounts");
      }
      const { data } = await response.json();
      return data;
    },
  });
};
