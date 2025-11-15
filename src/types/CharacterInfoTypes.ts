import type { CHARACTER_DATA } from '@/constants/CharacterInfo';

export type ChracterType = 'main' | 'sub';

export type CharacterItem = {
  id: string;
  characterType: ChracterType;
  wasteName: string;
  characterName: string;
  wasteImage: string;
  characterImage: string;
  description: string;
};

export type CharacterDataMap = Record<string, CharacterItem>;

/** "paper" | "paperProduct" | "pet" | ... | "sofa" */
export type CharacterKey = keyof typeof CHARACTER_DATA;
