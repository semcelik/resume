import React, { ReactElement } from 'react';

import { FontWeight } from 'constants/props';
import { TContactCardProps } from './ContactCard.types';
import { Container, StyledA, StyledText } from './ContactCard.style';

function ContactCard({ icon: Icon, type, link }: TContactCardProps): ReactElement {
  return (
    <Container>
      <StyledA href={`${type}${link}`} target="_blank" rel="noreferrer">
        <Icon width={18} height={18} />
        <StyledText fontWeight={FontWeight.light}>{link}</StyledText>
      </StyledA>
    </Container>
  );
}

export default ContactCard;
