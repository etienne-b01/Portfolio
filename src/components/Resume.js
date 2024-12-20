import React from 'react';

function Resume({ resumeData }) {
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work" id="works_section">
            <div className="three columns header-col">
               <h1><span>Works</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.ProjectName}</h3>
                          <p className="info">Tool(s) used:&nbsp; 
                          {item.specialization}
                          </p>
                          <p>
                          {item.Achievements}
                          </p>
                          <p><a href={item.GithubLink} >Github repository </a>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
               {resumeData.skillsDescription}
               </p>
   				<div className="bars">
   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li key={item.skillname}>
                      <span
                        className="bar-expand"
                        style={{ width: `${item.skilllevel * 10}%` }} // Calculate width dynamically
                      ></span>
                      <em>{item.skillname}</em>
                    </li>
                    )
                  })
                }
   					</ul>
   				</div>
   			</div>
         </div>
      </section>
    );
  }

export default Resume;