import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { Icon , HStack} from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType} = {
    pc: FaWindows,
    android: FaAndroid,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    apple: FaApple,
    phoneiphone: MdPhoneIphone,
    globe: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <HStack my={1}>
      {platform.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
