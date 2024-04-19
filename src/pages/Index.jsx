import React, { useState } from "react";
import { Box, Button, Text, VStack, Heading } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [leaderResponse, setLeaderResponse] = useState("");
  const [followerResponse, setFollowerResponse] = useState("");
  const [interactionCount, setInteractionCount] = useState(0);

  const handleInteraction = () => {
    // Simulate interaction
    const newLeaderResponse = `Leader Model Response #${interactionCount + 1}`;
    const newFollowerResponse = `Follower Model Response #${interactionCount + 1}`;

    setLeaderResponse(newLeaderResponse);
    setFollowerResponse(newFollowerResponse);
    setInteractionCount(interactionCount + 1);
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        AI Model Interaction Simulator
      </Heading>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Text fontSize="lg" fontWeight="bold">
          Leader Model <FaRobot />
        </Text>
        <Text>{leaderResponse}</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Text fontSize="lg" fontWeight="bold">
          Follower Model <FaRobot />
        </Text>
        <Text>{followerResponse}</Text>
      </Box>
      <Button colorScheme="blue" onClick={handleInteraction}>
        Simulate Interaction
      </Button>
    </VStack>
  );
};

export default Index;
