import HomePage from './HomePage'
import AboutMe from './AboutMe'
import HeroExt from './HeroExt'
import WorkExperience from './WorkExperience'
import ProjectsSection from '../../components/ProjectsSection'
import SocialCards from '../../components/SocialCards'

const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <HeroExt />
      <AboutMe />
      <WorkExperience />
      <ProjectsSection />
      <SocialCards />
    </div>
  )
}

export default LandingPage
