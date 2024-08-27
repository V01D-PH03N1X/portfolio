import React, { ReactElement } from 'react';
import styles from './ProjectsPage.module.sass';
import NavBar from '../../compontents/NavBar';
import { Card, CardHolder } from '../../compontents/Card';

export default function ProjectsPage(): ReactElement {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1>Projektübersicht von Sebastian Schindler</h1>
        <CardHolder>
          <Card
            title='PortfolioPage'
            subtitle='React / TypeScript'
            url='insert GithubLink'
            urltitle='Github Repository'
            content='Portfoliopage. This Portfoliopage.'
          />
        </CardHolder>
        <CardHolder>
          <Card
            title='TikTakToe'
            subtitle='CSharp'
            url='insert GithubLink'
            urltitle='Github Repository'
            content='This is a easy TikTakToe Game for two players developed in CSharp. '
          />
          <Card
            title='YouTube Downloader'
            subtitle='CSharp'
            url='insert GithubLink'
            urltitle='Github Repository'
            content='This is a simple GUI for the yt-dlp Project. (outdated)'
          />
          <Card
            title='CRA-Template'
            subtitle='TypeScript / NodeJS'
            url='insert NPM.JS Repository'
            urltitle='NPM.JS Repository'
            content='This is a customized template for the Create React App Script. It provides a better Workflow and let me do less work because Boilerplatecode is already created'
          />
        </CardHolder>
      </div>
    </>
  );
}
