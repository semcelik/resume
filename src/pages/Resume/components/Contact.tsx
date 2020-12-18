import React, { ReactElement } from 'react';

import ContactCard from 'components/ContactCard';

import Content from './Content';
import { CONTACT_CONTENTS } from '../Resume.constants';

function Contact(): ReactElement {
  return (
    <Content>
      {CONTACT_CONTENTS.map(({ icon, type, link }) => (
        <ContactCard key={link} icon={icon} type={type} link={link} />
      ))}
    </Content>
  );
}

export default Contact;
