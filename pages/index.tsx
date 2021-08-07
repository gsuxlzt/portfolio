import { Heading, Link, Container, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
      <Container centerContent padding={['4','3','2']}>
        <Heading as="h1" size="2xl" mb="2">
          Welcome to <Link href="https://nextjs.org" color="purple.500">Next.js!</Link>
        </Heading>
        <Stack direction="row" w="full" background="purple.50">
            <Text>test</Text>
        </Stack>
    </Container>
  )
}
