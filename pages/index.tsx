import React from "react";
import { gql } from "@apollo/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import {
  Image,
  Heading,
  Link,
  Container,
  Stack,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import client from "../lib/apolloClient";

interface ISocialLinks {
  href: string;
  icon: string;
  title: string;
}

const ICONS: { [key: string]: IconType } = {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
};

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
          picture {
            url
            title
          }
        }
      }
    `,
    variables: {
      id: process.env.CONTENTFUL_PROFILE_ID,
    },
  });

  if (!data.profile) {
    return {
      notFound: true,
    };
  }
  return {
    props: { ...data.profile },
    revalidate: 10,
  };
};

const IndexPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    title,
    position,
    shortDescription: { json: description },
    socialLinks: profileSocialLinks,
    picture: { url: imageUrl, title: imageTitle },
  } = props;

  const socialLinks: ISocialLinks[] = Object.values(profileSocialLinks);
  const renderedDescription = documentToReactComponents(description);

  return (
    <>
      <Head>
        <title>Jan Miguel Carangan - Web Developer Portfolio</title>
      </Head>
      <Container
        centerContent
        maxW="container.lg"
        padding={[6, 6, 4]}
        minH="100vh"
        sx={{
          justifyContent: "center",
        }}
      >
        <Stack direction={["column", "column", "row"]} w="full" spacing={6}>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              flexShrink: "0",
              alignItems: ["center", "center", "flex-start"],
            }}
          >
            <Image
              align="center"
              boxSize="150px"
              borderRadius="full"
              src={imageUrl}
              alt={imageTitle}
              sx={{
                alignSelf: "center",
              }}
            />
            <Heading as="h1" size="xl" pt="6" color="black">
              {title}
            </Heading>
            <Text as="h4" fontSize="2xl" color="black">
              {position}
            </Text>
            <Stack direction="row" mt={3} spacing={3}>
              {socialLinks.map(({ href, title, icon }) => (
                <Link href={href} key={title}>
                  <Icon as={ICONS[icon]} w={8} h={8} color="black" />
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack pt={5} color="blackAlpha.800">
            <Heading as="h2" size="lg" mb={4} color="black">
              Biography
            </Heading>
            {renderedDescription}
            <Stack direction="column" spacing={2} pt={4}>
              <Link sx={{ textDecoration: "underline" }}>
                Check out my work history
              </Link>
              <Link sx={{ textDecoration: "underline" }}>
                Read some articles on my dev journal
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default IndexPage;
