import { useQuery } from "@tanstack/react-query";

type QueryProps = {
  queryKey: string;
  queryFunction?: (param:object) => Promise<object>;
  params: object;
};
export const useTanstackQuery = ({
  queryKey,
  queryFunction,
  params,
}: QueryProps) => {
  return useQuery({
    queryKey: [queryKey],
    refetchOnWindowFocus: true, // Sync data when window is focused
    staleTime: 30000, // Data is fresh for 30 seconds
    queryFn: ()=>queryFunction(param);
};
