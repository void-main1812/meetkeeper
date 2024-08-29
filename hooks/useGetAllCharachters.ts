import { useQuery } from '@tanstack/react-query';

import { getAllCharachters } from '~/api/charachter.api';

const useGetAllCharacters = ({ page }: { page?: number } = { page: 1 }) => {
  const { data, error, status, refetch } = useQuery({
    queryKey: ['all-characters', page],
    queryFn: () => getAllCharachters(page ?? 1),
  });

  const charachters = data?.results;
  const count = data?.info.count;
  const pages = data?.info.pages;

  return { charachters, count, pages, status, error, refetch };
};

export default useGetAllCharacters;
