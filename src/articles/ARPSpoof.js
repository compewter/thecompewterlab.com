import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ARPSpoof extends Component {
  render() {
    return (
      <Container>
        <p>The <b>Address Resolution Protocol (ARP)</b> is generally used to map unique MAC addresses to their corresponding IP addresses on a network. For example, let’s consider the following network configuration:</p>
        <Image centered className="article-img" src="/assets/images/arp-spoof/config.jpg" alt="example network configuration with two clients 'alice' and 'bob' connected to an access point which acts as a gateway to the internet"/>
        <p>Each of these devices has a unique hardware MAC address (typically assigned by the manufacturer, but modifiable with software) which is used at one layer of the network, and an ideally unique IP address which is used at another layer. When Alice wants to send a packet to Bob, she needs to include Bob’s MAC address. If Alice does not have Bob’s MAC address she broadcasts a request to the entire network asking “who has 192.168.1.3“ (Bob’s IP address). If Bob receives this request he responds “I am 192.168.1.3” which includes his MAC address (CC:CC:CC:CC:CC:CC). Alice then stores this mapping of Bob’s MAC address (CC:CC:CC:CC:CC:CC) and his IP address (192.168.1.3) locally in an ARP Table.</p>
        <p>Devices will also automatically update their ARP table whenever an ARP reply (“I am xx.xx.xx.xx”) is received regardless of whether or not the client initiated the ARP request. ARP does not define any way of validating or authenticating these requests/responses and this allows an attacker to manipulate client ARP tables at will. </p>
        <p>In our example above, Alice and Bob have their clients configured to use the Access Point’s IP address (192.168.1.1) as their default gateway to the Internet. Using our knowledge of ARP, Alice can modify Bob’s ARP table to use Alice’s MAC address for the IP address of the default gateway by simply sending an ARP reply to Bob which says “I am 192.168.1.1”. Bob’s device will then update it’s ARP table and use this new mapping for subsequent requests as represented by the following image:</p>
        <Image centered className="article-img" src="/assets/images/arp-spoof/mitm-config.jpg" alt="modified version of the network configuration shown previously, except this time bobs traffic is flowing through alice"/>
        <p>Alice could then configure her client to forward all of the traffic from Bob to the Access Point, allowing Bob to still have access to the Internet, while she acts as a man in the middle. Keep in mind however, if Bob is encrypting his traffic with the other devices he’s communicating with Alice will only see the encrypted traffic. This is why using websites with HTTPS is incredibly important.</p>
        <p>I began developing <a href="https://github.com/compewter/copycat" target="_blank" rel="noopener noreferrer">CopyCat</a> as a proof of concept tool for attackers like Alice to circumvent the security provided by HTTPS and see/modify the traffic, and allow victims like Bob to continue to use the services provided by HTTPS web servers. Check out my articles on using <Link to="/dns-spoof">DNS Spoofing</Link> and my <Link to="/url-spoof-chrome">URL Spoofing Trick for Chrome</Link> to see some examples of things you can do with ARP Spoofing!</p>
      </Container>
    )
  }
}

export default ARPSpoof;
