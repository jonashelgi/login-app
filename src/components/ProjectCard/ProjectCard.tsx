import React from "react";
import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import { BsLink, BsGithub } from "react-icons/bs";
import { color, font } from "../../utils";

export interface ProjectCardProps {
  Title?: string;
  SubTitle?: string;
  Info?: string;
  LinkUrl?: string;
  GithubUrl?: string;
  Tags?: {
    content: string;
  }[];
}

export const ProjectCard = ({
  Title,
  SubTitle,
  Info,
  LinkUrl,
  GithubUrl,
  Tags,
}: ProjectCardProps) => {
  return (
    <Box bg={color.second} borderRadius={10} p={5} className={"boxShadow"}>
      {Title && (
        <Text fontSize={font.md} fontWeight={"semibold"} color={color.main}>
          {Title}
        </Text>
      )}
      {SubTitle && (
        <Text fontSize={font.sm} fontWeight={"semibold"} color={color.main}>
          {SubTitle}
        </Text>
      )}
      {Info && (
        <Text fontSize={font.sm} color={color.main} pt={2}>
          {Info}
        </Text>
      )}
      {Tags && (
        <Text fontSize={font.md}>
          {Tags.map((data: any, index: number) => (
            <Badge key={index} color={color.main} bg={color.second}>
              {data.content}
            </Badge>
          ))}
        </Text>
      )}
      <Stack direction={"row"} pt={2}>
        {GithubUrl && (
          <a href={GithubUrl} target="_blank" rel="noreferrer">
            <BsGithub
              size={40}
              aria-label="Linkur á Github"
              color={color.main}
            />
          </a>
        )}
        {LinkUrl && (
          <a href={LinkUrl} target="_blank" rel="noreferrer">
            <BsLink
              size={40}
              aria-label="Linkur á vefsíðuna"
              color={color.main}
            />
          </a>
        )}
      </Stack>
    </Box>
  );
};

export default ProjectCard;
