import React from 'react';
// import Link from 'next/link'
// import {NavLink} from '../Header/HeaderStyles';
import { DiFirebase, DiReact } from 'react-icons/di'
import { FaHandshake } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider /><br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are the technologies I use for now: HTML 5 | CSS 3 | Docker |
      Javascript ES6 | TypeScript | GitHub | Node.js | Express.js | APIs |
      MongoDB | React | Postgres | SQL
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJs | JavaScript | HTML5 | CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python | Django | Django restframework | Docker | Databases(Postgres, MySQL, SQlite, NoSQL)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaHandshake size='3rem' />
        <ListContainer>
          <ListTitle>Relational/Agile Skills</ListTitle>
          <ListParagraph>
            Experience with <br />
            Agile and Scrum Practices
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies;
