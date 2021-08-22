import React from "react";
import { gql } from "@apollo/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Heading, Link, Container, Stack, Text } from "@chakra-ui/react";
import client from "../lib/apolloClient";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetProfile($id: String!) {
        profile(id: $id) {
          title
          position
          shortDescription {
            json
          }
          socialLinks
        }
      }
    `,
    variables: {
      id: process.env.CONTENTFUL_PROFILE_ID,
    },
  });

  console.log("data", data);
  return {
    props: {},
  };
};

const IndexPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container centerContent padding={["4", "3", "2"]}>
      <Heading as="h1" size="2xl" mb="2">
        Welcome to{" "}
        <Link href="https://nextjs.org" color="purple.500">
          Next.js!
        </Link>
      </Heading>
      <Stack direction="row" w="full" background="purple.50">
        <Text>test</Text>
      </Stack>
    </Container>
  );
};

export default IndexPage;
