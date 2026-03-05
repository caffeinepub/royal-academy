import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { AcademyData, Program } from '../backend';

export function useAcademyData() {
  const { actor, isFetching } = useActor();

  return useQuery<AcademyData>({
    queryKey: ['academyData'],
    queryFn: async () => {
      if (!actor) {
        return {
          name: '',
          tagline: '',
          description: '',
          contactEmail: '',
          programs: []
        };
      }
      return actor.getAcademyData();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5
  });
}

export function useAllPrograms() {
  const { actor, isFetching } = useActor();

  return useQuery<Program[]>({
    queryKey: ['allPrograms'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPrograms();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5
  });
}
