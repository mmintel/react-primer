import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Row, Column } from '../../src';
import Box from '../doc/box';

export default storiesOf('Components', module)
  .add('Row', () => {
    const gutter = number('Gutter', 2);
    const basis = text('Basis', 'calc(100% / 3)');
    return (
      <div>
        <Row gutter={gutter} basis={basis}>
          <Column>
            <Box>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, amet!</Box>
          </Column>
          <Column>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
              eos suscipit, alias et odio aliquid repellendus, est optio quisquam
              porro veritatis. Ipsa sequi voluptas cumque, eaque ipsum ut, illo
              officiis fugit omnis doloremque molestiae, beatae. Adipisci tempora
              nemo rerum explicabo, nobis impedit doloremque, odio sequi illum,
              ipsam, laudantium ducimus consequuntur?
            </Box>
          </Column>
        </Row>
      </div>
    );
  });
