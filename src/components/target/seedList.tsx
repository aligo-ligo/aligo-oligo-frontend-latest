import { useNavigate } from 'react-router-dom';

import { PreviewSeedType } from '@/types/target/type';
import SeedCard from '../feature/seed/SeedCard';
import SeedEmptyCard from './SeedEmptyCard';

const SeedList = ({ seeds, isActive }: { seeds: PreviewSeedType[]; isActive: boolean }) => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-col gap-6">
      {seeds?.length === 0 ? (
        <SeedEmptyCard isActive={isActive} />
      ) : (
        <>
          {seeds.map((seed) => {
            return (
              <SeedCard
                mode={isActive ? 'active' : 'inactive'}
                key={seed.id}
                onClick={() => navigate(`/seed/${seed.id}`)}
              >
                <SeedCard.Header endDate="2024-05-20" />
                <SeedCard.Background />
                <SeedCard.Body
                  seed={seed.seed}
                  routineInfos={seed.routineInfos}
                  seedState={seed.seedState}
                />
                <SeedCard.Footer />
              </SeedCard>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default SeedList;
