import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Architect from '../public/images/works/Architect.png'
import Capbank from '../public/images/works/Ecommerce.png'
import Covinfo from '../public/images/works/Covid19.png'
import SignLanguage from '../public/images/works/Real-time.png'
import Future from '../public/images/works/Future 2.png'
import Global from '../public/images/works/Global 4.png'
import Verifier from '../public/images/works/DatabaseApp.png'
import Home from '../public/images/works/Home.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="capbank" title="CapBank E-Commerce Prototype Web-App" thumbnail={Capbank}>
            This was my major project during my internship period at TNBX. I was given the task to build an E-commerce web-app using the
            MERN Stack. This project also consisted of payment gateway integration.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="database"
            title="Database Verifier App"
            thumbnail={Verifier}
          >
            A database checking app with CRUD functionalities to verify and validate customer contracts at TNBX. The idea of this project was to ease the employees
            to check for existing customer contracts registered in the database.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="covinfo"
            title="CovInfo"
            thumbnail={Covinfo}
          >
            This project is a Real-time dashboard for monitoring Covid positive patients with real-time location tracking and visualization using leaflet. It is a 
            part of my Univiersity project for the Systems Integration Design Project.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="RNN" thumbnail={SignLanguage} title="Sign Language Recognition Using Recurrent Neural Networks">
          This is a Sign Language recognition prototype that uses Custom designed Recurrent Neural Networks with Network Ensembling to classify gestures to specific actions
          in real-time video feed.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="architect" thumbnail={Architect} title="Architecture">
            This is a personal project to test my design skills as well as frontend skills. This landing page was designed using Figma and coded using HTML, CSS and Javascript with 
            ReactJS.
          </WorkGridItem>
        </Section>


        <Section delay={0.1}>
          <WorkGridItem id="Future" thumbnail={Future} title="FutureX">
            This is a personal project to test my design skills as well as frontend skills. This landing page was designed using Figma and coded using HTML, CSS and Javascript with 
            ReactJS.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="Global" thumbnail={Global} title="Global Gateway">
            This is a freelance project that I did for my client&apos;s company. It is an advertising website for their business and done with HTML, CSS, ReactJS and Framer Motion.
          </WorkGridItem>
        </Section>


        <Section delay={0.1}>
          <WorkGridItem id="Photogram" thumbnail={Home} title="Photogram">
           This is my personal project to dive into the world of mobile app development using React-Native
          </WorkGridItem>
        </Section>
      </SimpleGrid>



    </Container>
  </Layout>
)

export default Works
