import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import { Genra } from "./hooks/useGenra";
import SelectedPlatform from "./components/SelectedPlatform";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genra | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      px={5}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenraList
            selectedGenre={gameQuery.genre}
            onSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} pl={2} mb={5}>
          <SelectedPlatform
            onSelected={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
