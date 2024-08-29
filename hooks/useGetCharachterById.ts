import { useQuery } from '@tanstack/react-query';

import { getCharachterById } from '~/api/charachter.api';

const useGetCharachterById = ({ id }: { id: number }) => {
  const { data, error, status } = useQuery({
    queryKey: ['charachter-by-id'],
    queryFn: () => getCharachterById(1),
  });

  const charachter = data;
  const EpisodeArray = charachter?.episode.map((episode: string) => episode.split('/').pop());

  return { charachter, EpisodeArray, status, error };
};

export default useGetCharachterById;
