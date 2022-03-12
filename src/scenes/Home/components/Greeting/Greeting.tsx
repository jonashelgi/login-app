import React from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

// import { Motion } from "../../../../components";
import avatar from "../../../../utils/images/avatar.png";
import { color, font } from "../../../../utils";

const Greeting = () => {
  const [isSmall] = useMediaQuery("(max-width: 767px)");
  return (
    <Container maxW="8xl" pb={40} pt={isSmall ? 10 : 40}>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={{ base: 5, md: 3 }}>
          <Stack>
            <Stack>
              <Text fontSize={font.md} color={color.main}>
                Hæ! Ég heiti Jónas Helgi
              </Text>
              <Text fontSize={font.sm} color={color.main}>
                Ég sérhæfi mig í vefhönnun, þróun og forritun á vefsíðum. Ég
                starfa sem vefhönnuður hjá Menntamálastofnun og sé um að þróa og
                viðhalda rafrænu útgáfunni af Aðalnámskrá Grunnskóla. Einnig er
                ég í námi í Tölvunarfræði hjá Háskólanum í Reykjavík. Ég legg
                mikið upp úr því að öll mín viðmót og allar mínar vefsíður líta
                vel út á sama hvaða græju þau eru skoðuð.
              </Text>
            </Stack>
            <Box pt={10}>
              <Text fontSize={font.sm} color={color.main}>
                Það sem ég er helst að nota:
              </Text>
              <Box display={"flex"} flexWrap={"wrap"}>
                <Image
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  alt="Javascript"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="Typescript"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
                  alt="GraphQL"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
                  alt="ChakraUI"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
                  alt="Jest"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/Prismic-8B66A9?style=for-the-badge&logo=prismic&logoColor=white"
                  alt="Prismic"
                  height="30px"
                />
                <Image
                  src="https://img.shields.io/badge/strapi%20-6933FF?style=for-the-badge&logo=strapi&logoColor=white"
                  alt="Strapi"
                  height="30px"
                />
                {/* <Image
                  src="https://img.shields.io/badge/-storybook-e35182?style=for-the-badge&logo=storybook&logoColor=white"
                  alt="StoryBook"
                  height="30px"
                /> */}
                <Image
                  src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                  alt="Github"
                  height="30px"
                />
              </Box>
            </Box>
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Center pt={isSmall ? 10 : 0}>
            <Image src={avatar} alt="Avatar of Jonas" width="300px" />
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Greeting;
