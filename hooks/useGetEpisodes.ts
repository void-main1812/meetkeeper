import useGetCharachterById from './useGetCharachterById';

const useGetEpisodes = ({ id }: { id: number }) => {
  const { charachter } = useGetCharachterById({ id });

  const initialArray = charachter?.episode.map((episode: string) => episode.split('/').pop());

  return { initialArray };
};

export default useGetEpisodes;
