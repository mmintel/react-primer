import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MailIcon from 'react-icons/lib/md/email';
import LanguageIcon from 'react-icons/lib/md/language';
import DropdownIcon from 'react-icons/lib/md/arrow-drop-down';
import { Container, Row, Column, Input, Button } from '../../src';
import Box from '../doc/box';

export default storiesOf('Examples', module)
  .add('Form', () => {
    return (
      <div>
        <Container>
          <Row>
            <Column margin>
              <Input placeholder="First name" />
            </Column>
            <Column margin>
              <Input placeholder="Last name" />
            </Column>
          </Row>
          <Row>
            <Column margin>
              <Input prepend={<MailIcon />} placeholder="Email" />
            </Column>
          </Row>
          <Row>
            <Column margin>
              <Input prepend={<LanguageIcon />} append={<DropdownIcon />} type="select" values={[
                {
                  key: 'de',
                  value: 'German',
                },
                {
                  key: 'en',
                  value: 'English',
                },
              ]} />
            </Column>
          </Row>
          <Button>Submit</Button>
        </Container>
      </div>
    );
  });
