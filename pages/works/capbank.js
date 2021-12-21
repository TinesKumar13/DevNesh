import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CapBank">
    <Container>
      <Title>
        CapBank <Badge>2020-</Badge>
      </Title>
      <P>
        An E-Commerce Web App prototype using MERN Stack for development. This project was done completely solo by me as an internship project for TNBX. This project is a prototype
        of a working E-commerce website with integrated payment gateway. The payment gateway that was implemented for this project was Stripe payment gateway. The project has CRUD 
        functionalities and consists of both user and admin login pages. I learnt alot of technologies throughout this project ranging from ReactJS to NodeJS and MongoDB. Since this project was done 
        completely solo by me, I was independent and learnt the tech stack by myself and the final grade achieved for this project was an A.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/E-Commerce-Prototype">
          https://github.com/TinesKumar13/E-Commerce-Prototype <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, ExpressJS, ReactJS, NodeJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Ecommerce.png" alt="ecommerce" />
      <WorkImage src="/images/works/Checkout.png" alt="checkout" />
    </Container>
  </Layout>
)

export default Work
