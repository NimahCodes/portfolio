import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { ListItem } from '../Technologies/TechnologiesStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>CALL:</LinkTitle>
          <LinkItem href='tel: +234 8081 033 162'>+234 9069 943 386</LinkItem>
          <LinkTitle>GMAIL:</LinkTitle>
          <LinkItem href='mailto: folake.umar@gmail.com'>
            folake.umar@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>People | Research | Technology</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/NimahCodes'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/folakemi-umar-71aaa663/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href=''>
            <AiFillTwitterCircle size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/instantailor_ng/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
};

export default Footer;
