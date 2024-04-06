export interface Pokemon {
  name?: string;
  types?: PokemonType[];
  height?: number;
  weight?: number;
  health?: number;
  stats?: PokemonStats[];
  sprites?: Sprites;
}

interface PokemonType {
  slot?: number;
  type?: Type;
}

interface Type {
  name?: string;
}

interface PokemonStats {
  base_stat?: number;
}

interface Sprites {
  front_default?: string;
  other?: OtherSprites;
}

interface OtherSprites {
  showndown?: {
    front_default?: string;
  };
}
