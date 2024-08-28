import { useQuery } from '@tanstack/react-query';

import { getAllCharachters } from '~/api/charachter.api';

const useGetAllCharachters = () => {
  const { data, error, status } = useQuery({
    queryKey: ['all-charachters'],
    queryFn: () => getAllCharachters(1),
  });

  const charachters = data?.results.results;
  const count = data?.info.count;
  const pages = data?.info.pages;

  return { charachters, count, pages, status, error };
};

export default useGetAllCharachters;
