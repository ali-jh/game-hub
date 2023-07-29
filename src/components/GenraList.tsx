import useGenra, { Genra } from "../hooks/useGenra";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import GetCroppedImageUrl from "../services/Image-url";

interface Props {
  onSelected: (genre: Genra) => void;
  selectedGenre: Genra | null;
}

const GenraList = ({ onSelected, selectedGenre }: Props) => {
  const { data, isLoading, errors } = useGenra();
  {
    errors && null;
  }
  {
    isLoading && <Spinner color="red.500" />;
  }
  return (
    <>
    <Heading fontSize="2xl" mb={3}>Genres</Heading>
      <List>
        {data.map((genra) => (
          <ListItem key={genra.id} py={"5px"}>
            <HStack>
              <Image
                objectFit='cover'
                src={GetCroppedImageUrl(genra.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genra.id === selectedGenre?.id ? "bold" : "normal"}
                color={genra.id === selectedGenre?.id ? "red" : "white"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelected(genra)}
              >
                {genra.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenraList;
