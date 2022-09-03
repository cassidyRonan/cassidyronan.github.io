import Head from 'next/head';
import Image from 'next/image';
import CertificationCard from './components/CertificationCard';
import Divider from './components/Divider';
import SectionHeader from './components/Headers/SectionHeader';
import SectionSubheader from './components/Headers/SectionSubheader';
import Navbar from './components/Navbar';
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

      
      </main>

    </div>
  )
}
