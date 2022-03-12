import React from "react";
import { BsLink45Deg, BsPatchCheck } from "react-icons/bs";
import { Box, HStack, Progress as ProgressBar, Text } from "@chakra-ui/react";
import { color, font } from "../../utils";

export interface CourseProgressProps {
  Title?: string;
  Info?: string;
  Progress?: number;
  Link?: string;
  Cert?: string;
}

export const CourseProgress = ({
  Title,
  Info,
  Progress,
  Link,
  Cert,
}: CourseProgressProps) => {
  return (
    <Box>
      {Title && (
        <Text fontSize={font.md} color={color.main} fontWeight={"semibold"}>
          {Title}
        </Text>
      )}
      {Info && (
        <Text fontSize={font.sm} pb={2} color={color.main}>
          {Info}
        </Text>
      )}
      {Progress && (
        <ProgressBar value={Progress} colorScheme={"main"} bg={color.red} />
      )}
      <HStack pt={2} pb={5}>
        {Link && (
          <a href={Link} target="_blank" rel="noreferrer">
            <BsLink45Deg
              size={40}
              aria-label="Link to another course page"
              color={color.main}
            />
          </a>
        )}
        {Cert && (
          <a href={Cert} target="_blank" rel="noreferrer">
            <BsPatchCheck
              size={40}
              aria-label="Link to certificate page"
              color={color.main}
            />
          </a>
        )}
      </HStack>
    </Box>
  );
};

export default CourseProgress;
