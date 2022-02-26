import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  console.log(props)
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <h6>Folakemi Nimah Umar (Software Engineer) ...</h6>
          I write code to solve problems
        </SectionTitle>
        <SectionText>
          I choose to understand your product needs. Translate them to code.
          Choose the best technology for you. Give you a working solutions where
          your users would love.
        </SectionText>
        <Button onClick={() => window.location.href='mailto: folake.umar@gmail.com'}>
          Contact Me
        </Button>
      </LeftSection>
    </Section>
  )
}

export default Hero;

