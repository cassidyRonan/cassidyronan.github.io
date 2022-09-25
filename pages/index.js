import Head from 'next/head';
import Image from 'next/image';
import CertificationCard from './components/CertificationCard';
import Divider from './components/Divider';
import SectionHeader from './components/Headers/SectionHeader';
import SectionSubheader from './components/Headers/SectionSubheader';
import Navbar from './components/Navbar';
import PortfolioCard from './components/PortfolioCard';
import ProfilePortrait from './components/ProfilePortrait';
import RoleTitle from './components/RoleTitle';
import RoundedCard from './components/RoundedCard';
import Timeline from './components/TimeLine/Timeline';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Ronan Cassidy - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rcicon.ico" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main>
      
        <div className='pageTop'>
          <div className={'pageTopContainer'}>
            <RoleTitle />
            <ProfilePortrait />
          </div>
        </div>

        <div className={'pageDividerBackground'}>
          <img className={'pageDivider'} src={'/pageDivider.svg'} />
        </div>

        <div className={'sectionCenter '} >
          <SectionHeader heading={'ABOUT ME'} />
          
          <div className={'cardFlexBox'}>
            <RoundedCard isBlue={true} title='BIO'>
              <div className='cardText'>Hello there, I am Ronan and I am an Azure Developer based in Ireland. </div>
              <div className='cardText'>Currently researching and developing Proof of Concepts at <span className='cardTextHighlight'>Tata Consultancy Services</span> to bring new ideas and concepts to solve client problems.</div>
              <div className='cardText'>Always exploring new technologies and expanding my skillset to bring tomorrows ideas to life.</div>
            </RoundedCard>
            
            <RoundedCard isBlue={false} title='MEMBERSHIPS'>
              <ul className='cardText'>
                <li>Irish Computer Society</li>
                <li>Coderdojo Athlone</li>
              </ul>
              <ul className='cardText'>
                <div><b>IT Sligo</b>  (2017 - 2021)</div>
                <li>Class Representative</li>
                <li>Tea Society Secretary</li>
                <li>Games Society Treasurer</li>
                <li>Computing Society</li>
                <li>LGBT+ Society</li>
                <li>Games Society</li>
                <li>Irish Language Society</li>
              </ul>
            </RoundedCard>
            
            <RoundedCard isBlue={true} title='INTERESTS'>
              <ul className='cardText'>
                <li>Internet Of Things</li>
                <li>Digital Twins</li>
                <li>Computer Vision</li>
                <li>Robotics</li>
                <li>Machine Learning</li>
                <li>Game Development</li>
                <li>Virtual Reality</li>
                <li>Augmented Reality</li>
              </ul>
            </RoundedCard>
          </div>
        </div>

        <Divider/>

        <div className={'sectionCenter '} >
          <SectionHeader heading={'RESUME'} />
          
          <SectionSubheader heading='CERTIFICATIONS' />

          <div className={'cardFlexBox'}>
            <CertificationCard provider={'/certificationProviders/microsoftLogo.png'} image={'/certificationImages/azureFundamentals.png'} label={'Azure Fundamentals AZ-900'}/>
            <CertificationCard provider={'/certificationProviders/itSligo.png'} image={'/certificationImages/schoolFilled.svg'} label={'BSc (Hons) in Software Development - First Class Honours'}/>
            <CertificationCard provider={'/certificationProviders/itSligo.png'} image={'/certificationImages/schoolFilled.svg'} label={'BSc in Games Development - Distinction'}/>
          </div>
            
          <SectionSubheader heading='EXPERIENCE' />
          <Timeline />
        </div>

        <Divider/>

        <div className={'sectionCenter '} >
          <SectionHeader heading={'PORTFOLIO'} />

          <div className={'cardFlexCenterBox'}>
            <PortfolioCard company={'Personal'} isCompanyText={true} title={'Portfolio Website'} techStack={['/techStack/css3.png','/techStack/html5.png','/techStack/react.svg','/techStack/nextjs.svg']} repoLink={'https://github.com/cassidyRonan/cassidyronan.github.io'} />  
            <PortfolioCard company={'NDA'} isCompanyText={true} title={'Azure Full Stack Project'} techStack={['/techStack/maps.svg','/techStack/js.png','/techStack/html5.png']} />  
            <PortfolioCard company={'NDA'} isCompanyText={true} title={'Azure Full Stack Project'} techStack={['/techStack/iotcentral.svg','/techStack/digitalTwin.svg','/techStack/react.svg','/techStack/dotnet.svg']} />  
            <PortfolioCard company={'NDA'} isCompanyText={true} title={'React Project'} techStack={['/techStack/react.svg','/techStack/html5.png','/techStack/css3.png']} />  
            <PortfolioCard company={'Personal'} isCompanyText={true} title={'Face Detection Haar Cascade'} techStack={['/techStack/python.svg','/techStack/opencv.svg']} repoLink={'https://github.com/cassidyRonan/FaceHugger'} />  
            <PortfolioCard company={'Advanced NDT Solutions'} companyLogo={'/experienceLogos/ans.jpg'} projectLogo={'/projectImages/IMSLogo.png'} isCompanyText={false} techStack={['/techStack/dotnet.svg']} />  
            <PortfolioCard company={'IT Sligo'} companyLogo={'/certificationProviders/itSligo.png'} isCompanyText={false} projectLogo={'/projectImages/ARKnightLogo.png'}  techStack={['/techStack/Unity.svg','/techStack/dotnet.svg','/techStack/arcore.png']} />  
            <PortfolioCard company={'IT Sligo'} companyLogo={'/certificationProviders/itSligo.png'} isCompanyText={false} projectLogo={'/projectImages/CrescentMoonTitleLogo.png'} techStack={['/techStack/Unity.svg','/techStack/dotnet.svg']} />  
            <PortfolioCard company={'IT Sligo'} companyLogo={'/certificationProviders/itSligo.png'} isCompanyText={false} title={'Ghibli Movie Night Planner'} techStack={['/techStack/discord.svg','/techStack/dotnet.svg']} repoLink={'https://github.com/cassidyRonan/Ghibli-Planner'}/>  
            <PortfolioCard company={'IT Sligo'} companyLogo={'/certificationProviders/itSligo.png'} isCompanyText={false} title={'Mech Commander VR'} techStack={['/techStack/Unity.svg','/techStack/steamvr.png','/techStack/dotnet.svg']} repoLink={'https://github.com/cassidyRonan/MechCommanderVR'} />  
            <PortfolioCard company={'IT Sligo'} companyLogo={'/certificationProviders/itSligo.png'} isCompanyText={false} title={'Guess That Pokemon?'} techStack={['/techStack/Unity.svg','/techStack/dotnet.svg']} />  
            <PortfolioCard company={'IT Sligo'} companyLogo={'/certificationProviders/itSligo.png'} isCompanyText={false} projectLogo={'/projectImages/glitchedLogo.png'} techStack={['/techStack/Unity.svg','/techStack/dotnet.svg']} repoLink={'https://github.com/cassidyRonan/Glitched-Game'} />  
          </div>

        </div>
      
      </main>

    </div>
  )
}
