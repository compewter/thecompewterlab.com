import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DNSSpoof extends Component {
  render() {
    return (
      <Container>
        <p>The <b>Domain Name System (DNS)</b> is generally used to map domain names and IP addresses. For example, let’s consider the following network configuration:</p>
        <Image centered className="article-img" src="/assets/images/dns-spoof/config.jpg" alt="example network configuration with two clients 'alice' and 'bob' connected to an access point which acts as a gateway to the internet"/>
        <p>If Alice wants to request the content of https://www.google.com in her web browser, the request needs to be sent to an IP address corresponding to one of Google’s web servers. If Alice hasn’t previously saved (cached) an IP address for Google.com’s web server, she will need to make a DNS query for the IP address assigned to Google.com. Which DNS server to use can be set manually on the client, but for our example let’s assume Alice hasn’t configured any. Most clients will use the DNS server as advertised by the Access Point that assigned them an IP address.</p>
        <p>Often times the Access Point will also act as a DNS server and cache IP addresses for the domains it has previously queried. If the Access Point doesn’t have a cached record of the IP address for Alice’s DNS query, then it will need to forward the DNS query to the DNS server it is configured to use. Unless otherwise specified manually on the Access Point it may use an upstream DNS as advertised perhaps by the ISP. This chain (pictured below) continues all the way up to what is commonly referred to as a Root Name Server.</p>
        <Image centered className="article-img" src="/assets/images/dns-spoof/dns-chain.jpg" alt="sample dns server chain from alice -> access point -> isp dns -> root name server -> top level domain for com -> google's dns"/>
        <p>A Root Name Server will direct the DNS query to the top level name server corresponding to the DNS request. For example in the domain name www.google.com, the top level domain is “com”. This top level name server knows which DNS servers to query for all domains registered as a “.com”. Assuming the domain name being queried by Alice’s DNS request is registered, it will eventually lead back down to one of Google’s DNS servers. If Google’s DNS server recognizes the domain being queried by Alice, it will respond with the IP address of a web server that her web browser can then use to fetch the contents of https://www.google.com.</p>
        <p>DNS queries and replies currently do not use any sort of authentication or validation which opens up the opportunity for an attacker to spoof DNS replies. For example, let’s assume Alice is acting as a man-in-the-middle between Bob and the Access Point (for an example of this see my article on <Link to="/arp-spoof">ARP Spoofing</Link>). Assuming Bob hasn’t manually set his DNS servers, he will automatically use Alice for DNS queries, allowing Alice to spoof the DNS replies with fake IP addresses and redirecting Bob to web servers of her choice.</p>
        <p>Here’s a demonstration of how DNS Spoofing, <Link to="/arp-spoof">ARP Spoofing</Link> and my <Link to="/url-spoof-chrome">URL Spoofing Trick for Chrome</Link> can be used to generate a pretty convincing victim scenario with my universal MITM tool <a href="https://github.com/compewter/copycat" target="_blank" rel="noopener noreferrer">CopyCat</a>. CopyCat is a proof of concept tool for attackers like Alice to circumvent the security provided by HTTPS and see/modify the traffic, and allow victims like Bob to continue to use the services provided by HTTPS web servers:</p>
        <img className="article-img" src="/assets/images/url-spoof/copycat-demo.gif" alt="GIF demonstration of someone navigating through several different pages using this spoofed url trick"/>
      </Container>
    )
  }
}

export default DNSSpoof;
