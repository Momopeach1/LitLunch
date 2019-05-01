    
import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

const EventCard = () => (
  <Card>
        <Card.Content>
          <Image size='small' rounded src="https://codepo8.github.io/canvas-images-and-pixels/img/horse.png" />
          <Card.Header>Momo</Card.Header>
          <Card.Meta>resturant name</Card.Meta>
          <Card.Description>
            Momo wants to Have lunch at <strong>Resturant name</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Join
            </Button>
            <Button basic color='blue'>
              Resturant Info
            </Button>
          </div>
        </Card.Content>
      </Card>
)

export default EventCard