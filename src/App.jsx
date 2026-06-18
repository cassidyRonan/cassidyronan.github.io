import { useState } from 'react'
import './App.css'
import CodexNavbar from './components/codex_navbar/CodexNavbar'
import ProfileFrame from './components/profile_frame/ProfileFrame'
import GithubLogo from './assets/GithubLogo.svg'
import LinkedInLogo from './assets/LinkedinLogo.png'
import PaperCard from './components/paper_card/PaperCard'
import AwardCard from './components/award_card/AwardCard'
import Timeline from './components/timeline/Timeline'

function App() {
  const [count, setCount] = useState(0)

  const timeline_entries = [
    {date:'2023 - Present',heading:'Azure AI Developer',logo:'/tcs.jpg',alt:"TCS",body:(<div>Research and development of PoCs/Demos/Tools that utilize Microsoft and Azure services/technologies with a focus on Generative AI and relevant frameworks/libraries. <br/><br/>Working on an international team to showcase technologies and capabilities to be utilized across various projects both internally and for clients in various industries.[1]<br/><br/>Accreditted with TCS Contextual Master for work on teaching Generative AI within the company and creating lesson plans to be utilized in tandem with Gen AI learning zone developed by our team.[2] <br/><br/>Member of Microsoft AI Foundry Partner Council (Formerly Microsoft AI Partner Council).<br/><br/><ol><li><a href="https://www.linkedin.com/pulse/nwg-innovation-festival-2024-tcs-water-treatment-copilot-cassidy-dc8oe" target="_blank">NWG Innovation Festival 2024 Article</a></li><li><a href="https://www.linkedin.com/business/talent/blog/learning-and-development/ai-skill-pathways" target="_blank">TCS AI Experience Zone Article</a></li></ol></div>)},
    {date:'2022 - 2023',heading:'Azure Developer (Full Stack)',logo:'/tcs.jpg',alt:"TCS",body:(<div>Research and development of Azure-based Proof of Concepts alongisde international team to showcase Demos/PoCs to be utilized across a variety of projects company-wide with a focus on Digital Twin technology using .NET and React.js. Responsible for full-stack development of application.<br/><br/>Involved in the teaching and training of associates in Azure technologies.</div>)},
    {date:'2021 - 2022',heading:'Graduate Systems Developer',logo:'/tcs.jpg',alt:"TCS",body:(<div>Experience with Full Stack development and a key focus on the use of Microsoft related technologies such as ASP.Net Core, C#, Microsoft SQL Server and Microsoft Azure.<br/><br/> Other skills developed include front-end technologies such as Angular and React.</div>)},
    {date:'2020 - 2021',heading:'BSc (Hons) in Software Development - Valedictorian',alt:"Sligo IT",logo:'/itSligo.jpg',body:(<div><div>Grade: First Class Honours (Prize Winner Award)</div><br/><div>Modules: (GPA: 78.75%)</div><div><i>Artificial Intelligence, Machine Learning, Data Analytics, Cloud Development, User Experience (UX), Advanced Programming, Software Application Security Testing, Secure Software Development, Strategic Technology Management, Startup Engineering, Project 400</i></div></div>)},
    {date:'2019',heading:'WPF Developer',logo:'/ans.jpg',alt:"ANS",body:(<div>Design and implementation of Inventory Management System to meet client business requirements. <br/>Provided range of functionality such as asset location, stock management and job tracking. <br/>Migration of pre-existing data to the new system and integrating of barcode scanning technology. <br/><br/> Technology stack implemented:<br/>.NET framework(C#), JSON, Windows Presentation Foundation (WPF), SQLite. </div>)},
    {date:'2017 - 2020',heading:'BSc in Games Development - Valedictorian',alt:"IT Sligo",logo:'/itSligo.jpg',
      body:(
        <div>
          <div>Grade: Distinction (Prize Winner Award)</div>
          <br/>
          <div>Year 1 Modules: (GPA: 91.41%)</div>
          <div><i>Personal Development, Intro To Programming 1 &#38; 2 using C#, Computer Systems and Networking 1 &#38; 2, Design Thinking, Game Design Fundamentals, Mathematics 1 &#38; 2, Game Design and Programming, Web Design Fundamentals, Internet of Things</i></div>
          <br/>
          <div>Year 2 Modules: (GPA: 87.75%)</div>
          <div><i>Maths 3 &#38; 4, Requirements Engineering, Foundation Object-Oriented Programming 201 &#38; 202, Web Programming 1 &#38; 2, 2D Games Programming, Game Content Design 1 &#38; 2, Software Dsign, Data Structures &#38; Algorithims</i></div>
          <br/>
          <div>Year 3 Modules: (GPA: 84.60%)</div>
          <div><i>Software Project Management, 3D Game Engine Programming, Casual Gaming, Rich Application Development 301 &#38; 302, Professional Development, Software Quality &#38; Testing, 3D Graphics for Game Programmers, Project 300, Work Placement Substitution Project</i></div>
        </div>)},
    {date:'2017',heading:'Lab Technician',logo:'/ans.jpg',alt:'ANS',body:(<div>Responsible for various tasks including inspection preperation, certification distribution, inventory management and other day to day tasks. <br/><br/> This role provided me with a base knowledge of the Non Destructive Testing (NDT) domain.</div>)},
  ];

  return (
    <>
      <CodexNavbar/>
      <div className='mainHero'>
        <div className='heroBlock heroText'>
          <div className='heroName'>Ronan&nbsp;<span>Cassidy</span></div>
          <div className='heroRole'>Full-Stack Azure AI Developer</div>
          <a className='heroCompany' target="_blank" rel="noopener noreferrer" href="https://www.tcs.com/">@ TATA CONSULTANCY SERVICES</a>
          <div className='heroIconBar'>
            <a href='https://www.linkedin.com/in/ronan-cassidy/'><img className='heroIcon' src={LinkedInLogo}/></a>
            <a href='https://github.com/cassidyRonan'><img className='heroIcon' src={GithubLogo}/></a>
          </div>
        </div>
      </div>
      
      <div className='curvedTopBlue'>
      </div>
      <section className='aboutBlock' id="about-jump">
        <PaperCard>
          <ProfileFrame/>
          <h1>Behind The Code</h1>
          <p>An Azure AI Developer based in Ireland at Tata Consultancy Services (TCS), speciailizing in Generative AI technologies and Azure services, developing Proof of Concepts, Service Offerings and Internal Tools as part of the Cloud Unit's Microsoft Practice at TCS. Working mainly in a research and development capacity looking at the bleeding edge of Azure services and AI technologies, working alongside clients to reach their goals.</p>
          <p>Always ready to research and explore new technologies, and expanding his skillset to bring tomorrow's ideas to life. He is accredited as a TCS Contextual Master for his work with Generative AI and the development of company wide training resources, lessons plans and delivering training to thousands of employees.</p>
          <p> A member of the <i>Microsoft Foundry Partner Council</i> (formerly Microsoft AI Partner Council) and <i>Irish Computing Society</i>.</p>
          <h1 style={{clear:'both',textAlign:"center",fontSize:'2em'}}><hr></hr>Experience</h1>
          <Timeline entries={timeline_entries} />
        </PaperCard>
      </section>
      <div className='curvedBottomBlue'>
      </div>

      <section className='memberBlock' id="portfolio-jump">
      </section>

    </>
  )
}

export default App
