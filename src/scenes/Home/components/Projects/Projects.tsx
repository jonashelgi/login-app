import React from "react";
import { Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BsKanban } from "react-icons/bs";

import { ProjectCard } from "../../../../components";
import { color, font } from "../../../../utils";

const Projects = () => {
  return (
    <Container maxW="8xl" pb={"28"}>
      <Stack direction={"row"} pt={5} pb={5}>
        <BsKanban size={40} color={color.second} />
        <Text fontSize={font.md} color={color.second}>
          VERKEFNI
        </Text>
      </Stack>
      <SimpleGrid minChildWidth={"300px"} gap={5}>
        <ProjectCard
          Title="Aðalnámskrá grunnskóla"
          SubTitle="Menntamálastofnun"
          Info="Hanna og forrita aðalnámskrá grunnskóla yfir á rafrænt form ásamt áframhaldandi þróun og viðhald."
          LinkUrl="https://adalnamskra.is/"
          Tags={[
            { content: "React" },
            { content: "Typescript" },
            { content: "Prismic" },
            { content: "Jest" },
            { content: "Ísland.is UI library" },
          ]}
        />
        <ProjectCard
          Title="Portfolio"
          SubTitle="Jónas Helgi"
          Info="Síða sem inniheldur yfirlit af öllum mínum verkefnum, þetta er síðan sem þú ert á núna. "
          GithubUrl="https://github.com/jonashelgi/portfolio"
          Tags={[
            { content: "React" },
            { content: "Typescript " },
            { content: "React-Bootstrap" },
            { content: "Firebase" },
          ]}
        />
        <ProjectCard
          Title="Epic Store Clone"
          SubTitle="Jónas Helgi"
          Info="Endurherma af fræga windows tölvuleikja appinu hjá Epic Store."
          LinkUrl="https://gamestore-clone.web.app/"
          GithubUrl="https://github.com/jonashelgi/epicstore-clone"
          Tags={[
            { content: "React" },
            { content: "Typescript " },
            { content: "React-Bootstrap" },
            { content: "Firebase" },
          ]}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
