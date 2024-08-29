import { useQuery } from '@tanstack/react-query';

import { getEpisodeList } from '~/api/charachter.api';

const useGetEpisodes = ({ EpisodeList }: { EpisodeList: string[] }) => {
  const { data, error, status } = useQuery({
    queryKey: ['all-characters', EpisodeList],
    queryFn: () => getEpisodeList(EpisodeList),
  });

  return { data, error, status };
};

export default useGetEpisodes;
