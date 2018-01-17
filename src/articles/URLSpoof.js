import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class URLSpoof extends Component {
  render() {
    return (
      <Container>
        <p>When a user loads an https link in Chrome it shows a nice green secure lock and protocol in the url:</p>
        <img className="article-img" src="/assets/images/url-spoof/url-https.jpg" alt="https url in google chrome"/>

        <p>However when you load an http url it trims the protocol from the url bar:</p>
        <img className="article-img" src="/assets/images/url-spoof/url-http.jpg" alt="http url in google chrome"/>

        <p>This opens up the opportunity for a subtle trick for url spoofing in Chrome. What if we use https as the domain and put the domain we’re spoofing in the path like this?</p>
        <img className="article-img" src="/assets/images/url-spoof/url-spoofed.jpg" alt="http://https//www.google.com loaded in google chrome with http:// trimmed from the beginning"/>

        <p>We can have the browser render pages that include https in the url bar and may appear legitimate to the less security-conscious (or just less conscious) user.</p>
        <img className="article-img" src="/assets/images/url-spoof/google-loaded.jpg" alt="google.com loaded in our spoofed url http://https//www.google.com"/>

        <p>Check out my other articles describing <Link to="/arp-spoof">ARP Spoofing</Link> and <Link to="/dns-spoof">DNS Spoofing</Link> which demonstrate how one would be in a position to utilize this trick.</p>

        <p>Here’s a demonstration of how this trick can be used to generate a pretty convincing victim scenario:</p>
        <img className="article-img" src="/assets/images/url-spoof/copycat-demo.gif" alt="GIF demonstration of someone navigating through several different pages using this spoofed url trick"/>

        <p>I’ve utilized this trick in the development version of my universal MITM tool <a href="https://github.com/compewter/copycat" target="_blank" rel="noopener noreferrer">CopyCat</a>. Once that’s a little more stable I’ll be releasing the latest more powerful version as well as a full writeup on how it works.</p>

        <p>I haven’t thought of any legitimate reasons for Google not to show the protocol in the url bar as they do with https and as nearly all of the other major browsers do. But if they have good reasons to do so, they should be weighed against this potential attack.</p>
     </Container>
    )
  }
}

export default URLSpoof;
