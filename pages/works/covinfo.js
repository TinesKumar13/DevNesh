import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CovInfo">
    <Container>
      <Title>
        CovInfo <Badge>2021-</Badge>
      </Title>
      <P>
        This project was part of my University project for the System Integration Design subject. I was assigned by my team to work as a frontend developer who would fetch data from
        firebase firestore database and visualize it on a dashboard. I decided to build a dashboard from scratch using HTML, CSS, Javascript and ReactJS. I also used an open source
        framework called Leaflet which would help to visualize and monitor locations of users on a real map. The web app also has various functionalities ranging from CRUD to importing
        data to excel files. The final grade achieved for this project was A-.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/CovInfo">
          https://github.com/TinesKumar13/CovInfo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript, ReactJS, Firebase, Framer Motion and MaterialUI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Covid19.png" alt="covid19" />
      <WorkImage src="/images/works/Covid20.png" alt="covid20" />
    </Container>
  </Layout>
)

export default Work
