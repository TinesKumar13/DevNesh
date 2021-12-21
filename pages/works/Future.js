import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Future">
    <Container>
      <Title>
        FutureX <Badge>2021-</Badge>
      </Title>
      <P>
        This is a personal project to enhance my design skills as well as my frontend skills. This project was designed by myself using Figma and coded out using HTML, CSS, ReactJS
        and Javascript.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/FutureX">
          https://github.com/TinesKumar13/FutureX<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, ReactJS and Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Future 1.png" alt="Future" />
      <WorkImage src="/images/works/Future 2.png" alt="Future2" />
      <WorkImage src="/images/works/Future 3.png" alt="Future3" />
      <WorkImage src="/images/works/Future 4.png" alt="Future4" />
      <WorkImage src="/images/works/Future 5.png" alt="Future5" />
     
 
    </Container>
  </Layout>
)

export default Work
