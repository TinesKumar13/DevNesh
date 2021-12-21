import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Global">
    <Container>
      <Title>
        Global Gateway <Badge>2021-</Badge>
      </Title>
      <P>
        This was my first freelance project. It was an advertising website for my friend's company which does logistics. The website was designed by me using Figma and coded out using
        HTML, CSS, Javascript and ReactJS. Additional animation library such as Framer Motion was used to make the website lively. The website also had a contact form which was made using
        React Formspree which allowed customers to contact the company by submitting the form.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/Global-Gateway">
          https://github.com/TinesKumar13/Global-Gateway<ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/Global.png" alt="global1" />
      <WorkImage src="/images/works/Global 2.png" alt="global2" />
      <WorkImage src="/images/works/Gobal 3.png" alt="global3" />
      <WorkImage src="/images/works/Global 4.png" alt="global4" />
      <WorkImage src="/images/works/Global 5.png" alt="global5" />
      <WorkImage src="/images/works/Global 6.png" alt="global6" />
      <WorkImage src="/images/works/Gloal 7.png" alt="global7" />
      <WorkImage src="/images/works/Global 8.png" alt="global8" />
 
    </Container>
  </Layout>
)

export default Work
