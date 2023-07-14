import { Box, Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import { Genra } from "./hooks/useGenra";
import SelectedPlatform from "./components/SelectedPlatform";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genra | null>(null);
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);
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
            selectedGenre={selectedGenre}
            onSelected={(genra) => setSelectedGenre(genra)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <SelectedPlatform onSelected={(platform) => setPlatform(platform)} selectedPlatform={selectedPlatform}/>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
