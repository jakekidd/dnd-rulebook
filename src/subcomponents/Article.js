import React, { Component } from 'react';
import {
  Typography,
  Divider,
  Anchor,
  Row,
  Col,
  List,
  Table } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Link } = Anchor;

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetOffset: 0
    };
    // Create a map for all the links in the anchor.
    this.anchorLinks = {}
    Object.keys(props.data).forEach(k =>
      this.anchorLinks[k] = `#${this.titleToKey(k)}`
    );
  }

  componentDidMount() {
    this.updateTargetOffset()
    window.onresize = () => this.updateTargetOffset();
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  updateTargetOffset = () => this.setState({targetOffset: window.innerHeight / 6});

  titleToKey = (title) => title.toLowerCase().replace(/\s/g,'');

  parseBoldUnderline = (content) => {
    if (!content.includes('***')) {
      return [content];
    }
    var parts = content.split(/\*\*\*/g);
    for (var i = 1; i < parts.length; i += 2) {
      parts[i] = <Text strong underline key={`${parts[i].toLowerCase()}-bu-${i}`}>{parts[i]}</Text>
    }
    return parts
  };

  parseBold = (content) => {
    if (!content.includes('**')) {
      return [content];
    }
    var parts = content.split(/\*\*/g);
    for (var i = 1; i < parts.length; i += 2) {
      parts[i] = <Text strong key={`${parts[i].toLowerCase()}-b-${i}`}>{parts[i]}</Text>
    }
    return parts;
  };

  parseItalic = (content) => {
    var parts = content.split(/\*/g);
    for (var i = 1; i < parts.length; i += 2) {
      parts[i] = <Text underline key={`${parts[i].toLowerCase()}-i-${i}`}>{parts[i]}</Text>
    }
    return parts;
  };

  parseLinks = (content) => {
    if (!content.includes('“')) {
      return [content];
    }
    var parts = content.split(/“(.*)”/g);
    for (var i = 1; i < parts.length; i += 2) {
      // Check to make sure the supposed link is a valid one by looking it up in the table.
      const link = this.anchorLinks[parts[i]]
      if (link) {
        parts[i] = <a href={link} key={`${link}-a-${i}`}>{parts[i]}</a>
      } else {
        // Put the quotes back - this isn't a reference to another section, just quoted material.
        parts[i] = `“${parts[i]}”`
      }
    }
    return parts;
  };

  // Parse special characters into decorated text.
  parseSpecial = (content) => (
    !content.includes('*') && !content.includes('“') ? content
    : (
      <div>
        {this.parseBoldUnderline(content).map(c => 
          typeof(c) === 'string' ? this.parseBold(c).map(c =>
            typeof(c) === 'string' ? this.parseItalic(c) : c).flat().map(c =>
              typeof(c) === 'string' ? this.parseLinks(c) : c).flat()
          : c).flat()}
      </div>
    )
  );

  renderContent = (content) => (
    Array.isArray(content) ? content.map((c,i) => 
      <Paragraph key={i}>{this.renderContent(c)}</Paragraph>
    ) : typeof(content) === 'object' ? (
      <div>{content['table'] && this.renderTable(content['table'])}</div>
    ) : (
      <Paragraph
        style={content.startsWith('•') ? {marginLeft:'20px'} : {}}
      >
        {this.parseSpecial(content)}
      </Paragraph>
    )
  );

  renderTable = (table, title) => (
    <div>
      {title &&
        <Title style={{fontSize:'18px',color:'rgba(0,0,0,0.6)',textAlign:'center'}}>
          {title}
        </Title>
      } 
      <Table
        pagination={false}
        size={'small'}
        style={{marginBottom:'18px'}}
        // Convert vertical arrangement of data (array-per-column) to horizontal (array of rows).
        dataSource={new Array(Object.values(table)[0].length).fill().map((_,i) => {
          var o = {};
          o['key'] = `${i}`;
          Object.keys(table).forEach(key => {
            o[this.titleToKey(key)] = table[key][i]
          });
          return o
        })}
        columns={Object.keys(table).map(column => {
          const key = this.titleToKey(column);
          return { key, dataIndex: key, title: column };
        })}
      />
    </div>
  );

  // Recursive section rendering function.
  renderSection = (title, section, level, index) => {
    const { content, table, ...subsections } = section;
    const id = this.titleToKey(title);
    return (
      <div id={id} key={`${id}-${index}`} style={{padding:'8px 0'}}>
        {(level === 2) && <Divider />}
        {!table && (
          <Title
            level={level > 4 ? 4 : level}
            style={{
              color: level === 1 ? 'inherit'
              : level === 2 ? 'rgba(0,0,0,0.9)'
              : level === 3 ? 'rgba(0,0,0,0.8)'
              : level === 4 ? 'rgba(0,0,0,0.6)'
              : 'rgba(0,0,0,0.5)'
            }}
          >
            {title}
          </Title>
        )}
        {Array.isArray(section) ? (
          <List
            itemLayout='vertical'
            split={false}
            dataSource={section}
            renderItem={item => (
              <List.Item style={{display:'flex'}}>
                {'\t'}•&nbsp;{this.renderContent(item)}
              </List.Item>
            )}
          />
        ) : typeof(section) === 'string' ? (
          this.renderContent(section)
        ) : subsections && (Object.keys(subsections).length > 0) ? (
          <div>
            {content && this.renderContent(content)}
            {Object.keys(subsections).map((s,i) =>
              this.renderSection(s, subsections[s], level + 1, i)
            )}
          </div>
        ) : content ? (
          <div>{this.renderContent(content)}</div>
        ) : table ? (
          <div>{this.renderTable(table, title)}</div>
        ) : (
          <div>ERR: Failed to render! {console.warn('Failed to render for section:', section)}</div>
        )}
      </div>
    );
  };

  render() {
    const { articleTitle, data, includeSublinks } = this.props;
    return (
      <Row>
        <Col span={4}>
          <Anchor
            targetOffset={this.state.targetOffset}
            affix={true}
            offsetTop={this.props.theme.HEADER_HEIGHT + 24}
          >
          {Object.keys(data).map((key,index) =>
            <Link key={index} href={this.anchorLinks[key]} title={key}>
              {includeSublinks && typeof(data[key]) === 'object' && (() => {
                const { content, table, ...subsections } = data[key];
                const subkeys = Object.keys(subsections);
                if (subkeys.length > 0) {
                  return subkeys.map((k,i) => <Link key={`${index}-${i}`} href={`#${this.titleToKey(k)}`} title={k} />)
                }
              })()}
            </Link>
          )}
          </Anchor>
        </Col>
        <Col span={20}>
          <Typography>
            <Title>{articleTitle}</Title>
            {Object.keys(data).map((k,i) => this.renderSection(k, data[k], 2, i))}
          </Typography>
        </Col>
      </Row>
    );
  }
}