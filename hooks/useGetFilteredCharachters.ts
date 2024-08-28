import { useQuery } from '@tanstack/react-query';

import { getFilteredCharachters } from '~/api/charachter.api';

const useGetFilteredCharachters = ({ type }: { type: 'alive' | 'dead' | 'unknown' }) => {
  const { data, error, status } = useQuery({
    queryKey: ['filtered-charachters'],
    queryFn: () => getFilteredCharachters(type, 1),
  });

  const charachters = data?.results.results;
  const count = data?.info.count;
  const pages = data?.info.pages;

  return { charachters, count, pages, status, error };
};

export default useGetFilteredCharachters;
