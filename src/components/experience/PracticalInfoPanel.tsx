import { InfoGrid } from "@/components/ui/InfoGrid";
import type { PracticalInfo } from "@/lib/data/types";

/** Best time, difficulty, group size, what to bring (§4.3). */
export function PracticalInfoPanel({ info }: { info: PracticalInfo }) {
  return (
    <InfoGrid
      fields={[
        { label: "Melhor época", value: info.bestTime },
        { label: "Dificuldade", value: info.difficulty },
        { label: "Tamanho do grupo", value: info.groupSize },
        { label: "O que levar", value: info.whatToBring },
      ]}
    />
  );
}
