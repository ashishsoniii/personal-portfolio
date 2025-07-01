import HomePage from './HomePage'
import AboutMe from './AboutMe'
import HeroExt from './HeroExt'
import WorkExperience from './WorkExperience'
import SocialCards from '../../components/SocialCards'

const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <HeroExt />
      <AboutMe />
      <WorkExperience />
      <SocialCards />
    </div>
  )
}

export default LandingPage
