import React, { Component } from 'react';
import './ArticleList.css';
import { Icon, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class ArticleList extends Component {
  render() {
    const {article} = this.props
    return (
      <Item>
        <Item.Content>
          <Item.Header><Link to={article.link}>{article.title}</Link></Item.Header>
          <Item.Description>{article.description}</Item.Description>
          <Item.Extra><Icon name="calendar" />{article.date}</Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default ArticleList;
