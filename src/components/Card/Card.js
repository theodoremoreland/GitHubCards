import React from 'react';

// Semantic UI
import { Card, Icon, Image } from 'semantic-ui-react'

class card extends React.Component {

    render() {
      let profile = this.props;

      return (
        <Card className="profile">
          <Image src={profile.avatar_url} alt={profile.alt}/>
          <Card.Content>
            <Card.Header>{profile.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Icon name='building' />
                {profile.company}
            </div>
          </Card.Content>
        </Card>
      )
    }
}

export default card;