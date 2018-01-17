import React, { Component } from 'react';
import './Article.css';
import { Container, Header, Icon } from 'semantic-ui-react';
import Articles from '../../articles'

class Article extends Component {
  render() {
    const {article} = this.props
    const ArticleBody = Articles[article.component]

    return (
      <Container className="article">
        <Header size="huge">
          {article.title}
          <Header.Subheader><Icon name="calendar"/>{article.date}</Header.Subheader>
        </Header>
        <div className="article-content">
          <ArticleBody />
        </div>
      </Container>
    )
  }
}

export default Article;
