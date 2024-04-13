import React, { useState, useEffect } from 'react';
import '../css/TeamMemberList.css'; 

const TeamMemberList = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('https://krikey-x565.onrender.com/top-authors')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching team members:', error));
  }, []);

  return (
    <div className="team-member-list">
      <h2>You have {teamMembers.length} Team Members</h2>
      {teamMembers.map(member => (
        <div key={member.id} className="team-member">
          <img src={"https://cdn4.iconfinder.com/data/icons/commenly-needed/400/Icon-06-1024.png"} alt={member.name} className="team-member-avatar" />
          <div className="team-member-info">
            <h3>{member.name}</h3>
            <p>{member.total_sales}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberList;