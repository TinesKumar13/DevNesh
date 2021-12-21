import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RNN">
    <Container>
      <Title>
        Sign Language Recognition Using Recurrent Neural Networks  <Badge>2021-</Badge>
      </Title>
      <P>
            This project was my Final Year Project for my Computer Engineering degree. The project aims to build a system that would able to detect gestures for the English Alphabets
            in real-time. The motive of this project was to build a system which does not use specialized sensors as well as expensive equipment for data aquisition. To achieve that, we used
            Google's Mediapipe framework for extracting skeletal patterns of our hands in real time for model training. The uniqueness of this project comes from the Recurrent Neural Networks
            used in this project. These neural networks were customly designed by myself and they were able to achieve an accuracy of up to 100% when it comes to classifying gestures in real time.
            The project was done completely in Python and Tensorflow and Keras were used as the Deep Learning tools.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/FYP-Project">
          https://github.com/TinesKumar13/FYP-Project <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Tensorflow, Keras</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Real-time.png" alt="realtime" />

    </Container>
  </Layout>
)

export default Work
