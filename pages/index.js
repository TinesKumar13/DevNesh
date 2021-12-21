import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a self-taught Developer and a fresh graduate in Computer Engineering from University Teknologi Petronas!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tines Kumar
          </Heading>
          <p>Self-Taught Developer (Computer Engineer / Fresh Graduate / Life-long learner)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/DevNesh.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        Greetings Visitor ! My name is Tineskumar and I am a fresh graduate from University Teknologi Petronas that has just graduated in Bachelor's Of Computer Engineering. I am a self-taught
        developer and passionate about frontend technologies as well as looking to get placed in either frontend development or backend development. I enjoy coding in Javascript and 
        as obvious as it may sound, I fell in love with React JS. I do have experience with HTML, CSS as well as plain Javascript but most of my personal projects involve integration of React.
        Web Technologies have always fascinated me and is the main reason why I wanted to dive deeper into this field. Visitor, feel free to have a look at my projects at the Works section
        and if you feel that I might be a suitable candidate for your organization, do connect with me. Looking forward to hearing from you as well as getting an oppurtuinity to learn and work
        with the best developers. Enjoy your stay in DevNesh's website :) 
          .
        </Paragraph>
        <Box align="center" my={4}>
        <a href="/files/Tineskumar.pdf"     
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
Download Resume
            </Button>
            </a>
         
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education ft. Achievements
        </Heading>
        <BioSection>
          <BioYear>2012 - 2016</BioYear><br/>
          Completed my Higher Secondary Studies at Sekolah Menengah Kebangsaan Subang Jaya <br/>
          • Assistant Head of Discipline Department <br/>
          • President Of English Society Club <br/>
          • President Of Public Speaking Club <br/>
          • Participant Of District-Level Public Speaking Competition <br/>
          • Second Runner-Up of Asia-Pacific University Public Speaking <br/>
          Competition 
          • Winner Of State-Level Public Speaking Competition <br/>
          • Second Runner-Up of Youth Engineering Competition Organized by
          Local Universities <br/>
          • Overall Best Futsal Player for Inter-Class Futsal Tournament <br/>
          • Scored 8A+ 1A for the 2016 SPM EXAMINATIONS <br/>

        </BioSection>
        <BioSection>
          <BioYear>2016-2017</BioYear><br/>
          Completed my Pre-University Studies from Sunway University in Australian Matriculation<br/>
          • Achieved 93.1 ATAR upon course completion and received award for High Achievers of AUSMAT
          (Australian Matriculation)
        </BioSection>
        <BioSection>
          <BioYear>2018-2021</BioYear> <br/>
         Completed my Bachelors' In Computer Engineering from Universiti Teknologi Petronas <br/>
         • Completed Bachelors' in Computer Engineering with CGPA of 3.47
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>2016 - 2021</BioYear><br/>
          • Worked as a tuition teacher for higher secondary students as well as personal tutor for subjects
          like Chemistry, Physics, Biology, Additional Mathematics, and Modern Mathematics<br/>
          • Interned at TNBX Malaysia as a Software development intern mainly focusing on Web application
          development. I was responsible in building an online e-commerce application using Mongodb
          Database, ExpressJS framework, React JS framework and NodeJS framework which was all built
          upon Javascript. <br/>
          • Freelanced as a web developer for building advertising websites using ReactJs. <br/>

        </BioSection>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ 
        </Heading> 
        <Paragraph><br/> 
        • Maths <br/>
        • Coding UI/UX <br/>
        • Designing <br/>
        • Teaching <br/>
        • Learning new technologies <br/>

         
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/TinesKumar13" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @TinesKumar13
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/thisistinesh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @thisistinesh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/tinesh_13/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @tinesh_13
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/tinesh-kumar/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>


      </Section>
    </Container>
  </Layout>
)

export default Home
