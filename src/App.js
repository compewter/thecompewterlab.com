import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import { Container, Divider, Grid, Header, Image, Item } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    const list = listItems.map((article)=>{
      return <ArticleList article={article} key={article.link} />
    })
    const articles = listItems.map((article)=>{
      return <Route exact path={article.link} render={props =>(<Article article={article} />)} key={article.link} />
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2><Link to="/" className="header-link">The Compewter Lab</Link></h2>
          <a href="https://github.com/compewter" target="_blank" rel="noopener noreferrer"><img className="social-img" src="/assets/images/GitHub-Mark-Light-32px.png" alt="Github logo" /></a>
          <a href="https://twitter.com/thecompewterlab" target="_blank" rel="noopener noreferrer"><img className="social-img" width="32px" src="/assets/images/Twitter_Logo_WhiteOnImage.png" alt="Twitter logo" /></a>
        </div>
        <Container>
          <Route exact path="/" render={props => (
            <Item.Group className="article-list" divided>
              <p className="App-intro">
                <code>Read about web security and the different projects I'm working on.</code>
              </p>
              { list }
            </Item.Group>
          )} />
          {articles}
          <Divider />
          <Grid style={{textAlign: 'left'}}>
            <Grid.Column computer={2} mobile={8}>
              <Image src="/assets/images/face.png"/>
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
              <Header>Michael Wetherald</Header>
              <p>I offer consulting services in Web Application Security and Full Stack Web Development.</p>
              <p>If you think I can be of assistance to you, feel free to contact me at <a href="mailto:michael@thecompewterlab.com">michael@thecompewterlab.com</a> or on Twitter: <a href="https://twitter.com/thecompewterlab" target="_blank" rel="noopener noreferrer">@thecompewterlab.com</a></p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

const listItems = [
  {
    title: 'Subtle URL Spoofing Trick in Chrome',
    date: '2018-01-16',
    description: 'A simple URL spoofing trick exploiting Chrome\'s URL bar.',
    link: '/url-spoof-chrome',
    component: 'URLSpoof'
  },
  {
    title: 'YouTube Caption Search Tool',
    date: '2018-01-16',
    description: 'Search captions of YouTube videos and skip directly to the content you\'re interested in.',
    link: '/youtube-search',
    component: 'YouTubeSearch'
  },
  {
    title: 'ARP Spoofing',
    date: '2018-01-16',
    description: 'A basic description of ARP and ARP spoofing',
    link: '/arp-spoof',
    component: 'ARPSpoof'
  },
  {
    title: 'DNS Spoofing',
    date: '2018-01-16',
    description: 'A basic description of DNS and DNS spoofing',
    link: '/dns-spoof',
    component: 'DNSSpoof'
  }
]

export default App;
