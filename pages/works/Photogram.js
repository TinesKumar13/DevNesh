import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Photogram">
    <Container>
      <Title>
        Photogram <Badge>2021-</Badge>
      </Title>
      <P>
        This was my personal project to explore the world of mobile app development. The motive of this project was that it allows users to share their photos on a mini instagram like
        app. The app has like and dislike features and implements firebase real-time database to handle all the data for the application. I also used React-redux for state-management
        as it would be easier to handle and carry out tasks from the data coming from firebase.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/PhotoGram">
          https://github.com/TinesKumar13/PhotoGram<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, React-Redux and Firebase Real-time database</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Pics.png" alt="pics" />
      <WorkImage src="/images/works/signin.png" alt="signin" />
      <WorkImage src="/images/works/Home.png" alt="home" />
      <WorkImage src="/images/works/addpost.png" alt="addpost" />

 
    </Container>
  </Layout>
)

export default Work
