import React, { Component } from 'react';
import { Container, Grid, Image, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class YouTubeSearch extends Component {
  render() {
    return (
      <Container>
        <p>I’ve been spending a lot of time lately watching lengthy YouTube videos of lectures, interviews, guides etc. I’ve repeatedly found myself thinking about topics discussed hours later and wishing I remembered where exactly in the video they were discussing that topic. It’s also useful to skip ahead to the relevant part of videos I haven’t seen.</p>
        <p>To help solve these problems (and surely others) I’ve built a simple <a href="https://yts.thecompewterlab.com/index.html" target="_blank" rel="noopener">YouTube Caption Search</a> tool which will search for keywords in the captions of a YouTube video and provide you with a timestamped link to the video at that time.</p>

        <b>How-to:</b>
        <List ordered>
          <List.Item>Search for the YouTube video with the captions you’d like to search</List.Item>
          <List.Item>Select the video from the list</List.Item>
          <List.Item>Search for a term in the captions of this video. Or search for multiple terms separated by a space, or a comma: (“term1,term2,term3” or “term1 term2 term3”)</List.Item>
          <List.Item>All lines containing any of the search terms are listed with the found term in bold. Click on the timestamp link to open the YouTube video at that time</List.Item>
        </List>

        <p>Here’s a video demonstration:</p>
        <iframe className="youtube-embedded" width="560" height="315" src="https://www.youtube.com/embed/ouQHzDNTxkY" frameBorder="0" allowFullScreen></iframe>

        <p>If you find this tool useful, please consider donating to help me keep it running:</p>
        <Grid>
          <Grid.Column computer={2} mobile={16}>
          </Grid.Column>
          <Grid.Column computer={4} mobile={16}>
            <Grid.Row style={{textAlign: "center", marginBottom: 0}}>
              <p>Buy something on Amazon!</p>
            </Grid.Row>
            <a href="https://www.amazon.com/gp/yourstore/home/ref=nav_cs_ys?tag=compewterlab-20&linkCode=ur1" target="_blank" rel="noopener"><Image centered src="/assets/images/amazon.jpg" className="donation-logo" alt="amazon logo"/></a>
          </Grid.Column>
          <Grid.Column computer={4} mobile={16}>
            <Grid.Row style={{textAlign: "center", marginBottom: 0}}>
              <p>Donate</p>
            </Grid.Row>
            <a href="https://paypal.me/TheCompewterLab" target="_blank" rel="noopener"><Image centered src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" className="donation-logo" alt="paypal logo" style={{marginBottom: 30}}/></a>
          </Grid.Column>
          <Grid.Column computer={4} mobile={16}>
            <Image centered src="/assets/images/bitcoin-logo.png" alt="bitcoin logo" width="200"/>
            <Grid.Row>
              <p style={{marginTop: 5}}>16yPawBSB1ZmQw61VptWGof2fK2hE3vbiC</p>
            </Grid.Row>
            <Grid.Row>
              <Image centered src="/assets/images/bitcoin-qr.jpg" height="100" alt="bitcoin qr code" style={{margin: '10px auto 20px auto'}} />
            </Grid.Row>

          </Grid.Column>
        </Grid>

        <p style={{marginTop: 10}}>I also have other projects and web security articles to <Link to="/">check out</Link> if you're interested!</p>
     </Container>
    )
  }
}

export default YouTubeSearch;
