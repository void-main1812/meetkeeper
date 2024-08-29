import { useQuery } from '@tanstack/react-query';

import { getFilteredCharachters } from '~/api/charachter.api';

const useGetFilteredCharachters = ({
  type,
  page = 1,
}: {
  type: 'alive' | 'dead' | 'unknown';
  page?: number;
}) => {
  const { data, error, status, refetch } = useQuery({
    queryKey: ['filtered-charachters', type, page],
    queryFn: () => getFilteredCharachters(type, page),
  });

  const charachters = data?.results;
  const count = data?.info.count;
  const pages = data?.info.pages;

  return { charachters, count, pages, status, error, refetch };
};

export default useGetFilteredCharachters;
