import React from "react";
import useGenra from "../hooks/useGenra";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GetCroppedImageUrl from "../services/Image-url";

const GenraList = () => {
  const { data } = useGenra();
  return (
    <>
      <List>
        {data.map((genra) => (
          <ListItem key={genra.id} py={"5px"}>
            <HStack>
              <Image
                src={GetCroppedImageUrl(genra.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genra.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenraList;
