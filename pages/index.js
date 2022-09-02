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

const experienceNodes = [
  {date:'2021 - Present',heading:'Azure/ Full Stack Developer',logo:'/experienceLogos/tcs.png',body:(<div>Research &#38; Development of Azure-based Proof of Concepts with international teams to showcase potential features and technologies to be utilized across a variety of projects company-wide.<br/><br/> Responsible for Backend, Frontend Web &#38; API development on current project.</div>)},
  {date:'2021 - 2022',heading:'Graduate Systems Developer',logo:'/experienceLogos/tcs.png',body:(<div>Experience with Full Stack development and a key focus on the use of Microsoft related technologies such as ASP.Net Core, C#, Microsoft SQL Server and Microsoft Azure.<br/><br/> Other skills developed include front-end technologies such as Angular and React.</div>)},
  {date:'2020 - 2021',heading:'BSc (Hons) in Software Development',logo:'/experienceLogos/itSligo.png',body:(<div><div>Grade: First Class Honours (Prize Winner Award)</div><br/><div>Modules: (GPA: 78.75%)</div><div>Artificial Intelligence, Machine Learning, Data Analytics, Cloud Development, User Experience (UX), Advanced Programming, Software Application Security Testing, Secure Software Development, Strategic Technology Management, Startup Engineering, Project 400</div></div>)},
  {date:'2019',heading:'WPF Developer',logo:'/experienceLogos/ans.jpg',body:(<div>Design and implementation of Inventory Management System to meet client business requirements. <br/>Provided range of functionality such as asset location, stock management and job tracking. <br/>Migration of pre-existing data to the new system and integrating of barcode scanning technology. <br/><br/> Technology stack implemented:<br/>.NET framework(C#),JSON,Windows Presentation Foundation (WPF),SQLite </div>)},
  {date:'2017 - 2020',heading:'BSc in Games Development',logo:'/experienceLogos/itSligo.png',
    body:(
      <div>
        <div>Grade: Distinction (Prize Winner Award)</div>
        <br/>
        <div>Year 1 Modules: (GPA: 91.41%)</div>
        <div>Personal Development, Intro To Programming 1 &#38; 2 using C#, Computer Systems and Networking 1 &#38; 2, Design Thinking, Game Design Fundamentals, Mathematics 1 &#38; 2, Game Design and Programming, Web Design Fundamentals, Internet of Things</div>
        <br/>
        <div>Year 2 Modules: (GPA: 87.75%)</div>
        <div>Maths 3 &#38; 4, Requirements Engineering, Foundation Object-Oriented Programming 201 &#38; 202, Web Programming 1 &#38; 2, 2D Games Programming, Game Content Design 1 &#38; 2, Software Dsign, Data Structures &#38; Algorithims</div>
        <br/>
        <div>Year 3 Modules: (GPA: 84.60%)</div>
        <div>Software Project Management, 3D Game Engine Programming, Casual Gaming, Rich Application Development 301 &#38; 302, Professional Development, Software Quality &#38; Testing, 3D Graphics for Game Programmers, Project 300, Work Placement Substitution Project</div>
      </div>)},
  {date:'2017',heading:'Lab Technician',logo:'/experienceLogos/ans.jpg',body:(<div>Responsible for a variety of tasks including inspection preperation, certification distribution, inventory management and various other day to day tasks. <br/>Provided a base knowledge of the Non Destructive Testing (NDT) domain.</div>)},
];

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
          <Timeline nodes={experienceNodes} />
        </div>

        <Divider/>

      
      </main>

    </div>
  )
}
