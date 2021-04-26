import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Flex, Spacer, Container, SimpleGrid } from "@chakra-ui/react";

export default function TrekMenu() {
  return (
    <Fragment>
      <Container maxW="container.xl">
        <Flex style={{ marginTop: "20%" }}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={"https://image.freepik.com/free-vector/hiking-hand-drawn-poster_1284-16887.jpg"} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Treks
          </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  Hit the list of treks
            <Link to="/search/treks" className="btn btn-primary">
                    Find where you want to trek
              </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={"https://image.freepik.com/free-vector/explorer-with-backpack-background_52683-9666.jpg"} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Expeditions
          </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  Explore the wild
            <Link to="/search/treks" className="btn btn-primary">
                    Find what you want to expedite
              </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={"https://image.freepik.com/free-vector/rock-climbing-logo-design-illustration_96485-223.jpg"} />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Adventures
          </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  Adventure more worry less
            <Link to="/search/treks" className="btn btn-primary">
                    Find your next adventure
              </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
      <SimpleGrid minChildWidth="120px" spacing="0px" style={{ marginTop:"20%" }}>
      <Box className="mt-5">
        <Image style={{height:"300px", width:"100%"}} src={"https://image.freepik.com/free-vector/forest-panorama-view-pines-spruce-nature-landscape-forest-background-set-pine-spruce-christmas-tree-white-background-silhouette-forest-background-vector-illustration_230281-83.jpg"} />
      </Box>
      </SimpleGrid>
    </Fragment>
  );
}
