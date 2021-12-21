import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Database">
    <Container>
      <Title>
        Database Verifier Web App <Badge>2020-</Badge>
      </Title>
      <P>
    This project was assigned to me by my internship supervisor as a side task during my internship project. The team initially had difficulties in validating existing as well as new 
    contracts because all these tasks were done manually. Therefore, I was tasked to come up with a solution that can automate the task instead of having to manually validate a pile of
    contracts. I came up with a MERN stack web app which allows the admin to login and search for an account number and update the details correctly. In simple terms, I built a CRUD
    based application. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Website</Meta>
          <Link href="https://github.com/TinesKumar13/Database-Prototype">
          https://github.com/TinesKumar13/Database-Prototype <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/DatabaseApp.png" alt="databaseApp" />
   
    </Container>
  </Layout>
)

export default Work
