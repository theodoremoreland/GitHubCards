import React from 'react';

// Semantic UI
import { Card, Icon, Image } from 'semantic-ui-react';

// Custom styles
import './Card.css';

class card extends React.Component {

    render() {
      let profile = this.props;

      return (
        <Card className="profile" color="teal">
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="profileImage" src={profile.avatar_url} alt={profile.alt} />
          </a>
          <Card.Content textAlign="center">
            <Card.Header className="profileHeader">{profile.name}</Card.Header>
            <Card.Meta>
              <span className='profileJoinDate'>Joined on {new Date(profile.created_at).toLocaleDateString()}</span>
            </Card.Meta>
            <Card.Description className="profileBio">{profile.bio}</Card.Description>
            <Card.Meta>
              <div>
                <Icon className="profileFolderIcon" name='folder open' />
                {profile.public_repos} public repos
              </div>
              <div>
                <Icon className="profileUsersIcon" name='users' />
                {profile.followers} followers
                * {profile.following} following
              </div>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
          {
              profile.location
                ?
                  <div>
                    <Icon className="profileLocationIcon" name='location arrow' />
                      {profile.location}
                  </div>
                : ""
            }
            {
              profile.company
                ?
                  <div>
                    <Icon className="profileBuildingIcon" name='building' />
                      {profile.company}
                  </div>
                : ""
            }

          </Card.Content>
        </Card>
      )
    }
}

export default card;