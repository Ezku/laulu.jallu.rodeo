import * as React from 'react';
import { Section, Container } from 'bloomer';

export interface Props {
  header: React.ReactElement<any>;
  content: React.ReactElement<any>;
}

export default ({ header, content }: Props) =>
  <div>
    {header}
    <Section>
      <Container>
        {content}
      </Container>
    </Section>
  </div>;
