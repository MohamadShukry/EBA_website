import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import m1 from '../Assets/team1.png';
import m2 from '../Assets/team2.png';
import m3 from '../Assets/team3.png';
import m4 from '../Assets/team 4.png';
import m5 from '../Assets/team 5.png';
import m6 from '../Assets/team6.png';
import m7 from '../Assets/team7.png'
import m8 from '../Assets/team8.png'
import "../Styles/Team.css";

function Team() {
  const Team = [
    { id: 1, name: "Ahamed Asmin", position: "Managing Director", image: m1 },
    { id: 3, name: "Sayona Hanshini", position: "Personal Secretary", image: m7 },
    { id: 2, name: "Thishal Cooray", position: "Office Coordinator", image: m2 },
   
    { id: 4, name: "Suresh Kumar", position: "Overseas Coordinator", image: m3 },
    { id: 5, name: "Ahamed Afker", position: "Accountant", image:m6},
   
    { id: 6, name: "Mohamed Najath", position: "Manager", image: m5 },
    { id: 7, name: "Mohamad Isthikam", position: "IELTS Lecturer", image: m4 },
    
    { id: 8, name: "Mohomad Inshaf", position: "Office Boy", image: m8 },
    // { id: 9, name: "profile loading", position: "-", image:'https://mdbootstrap.com/img/new/avatars/9.jpg'}
  ];

  // Function to render each Team card
  const renderTeam = () => {
    return Team.map(Team => (
      <MDBCol key={Team.id} xl={4} lg={4} md={6} sm={12} className='mb-4'>
        <MDBCard className='team-card'>
          <MDBCardBody className='team-card-body'>
            <div className='d-flex align-items-center'>
              <img
                src={Team.image}
                alt={Team.name}
                className='card-image rounded-circle'
              />
              <div className='card-info'>
                <p className='card-name'>{Team.name}</p>
                <p className='card-position'>{Team.position}</p>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));
  };

  return (
    <div className="team-section" id='team'>
      <div className="team-title-content">
        <h3 className="team-title">
          <span>Meet Our Team</span>
        </h3>
      </div>
      <div className='team-dec'>Meet our dedicated team, each bringing a wealth of expertise and experience to our organization. From our visionary Founder to our skilled coordinators, accountants, and educators, every member plays a crucial role in delivering exceptional services. Learn more about our team members below.</div>
      <MDBRow className='justify-content-center'>
        {/* Render the Team */}
        {renderTeam()}
      </MDBRow>
    </div>
  );
}

export default Team;
