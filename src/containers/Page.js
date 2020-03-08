import React from 'react';
import { Layout } from 'antd';

const { Content, Footer } = Layout;
const BACKGROUND_TEXTURE_WOOD = false;

export default function Page(props) {
  const { theme, content } = props;
  const FOOTER_HEIGHT = props.theme.BASE_FONT_SIZE * props.theme.BASE_LINE_HEIGHT + props.theme.MAIN_FOOTER_TB_PADDING * 2;
  const bgImage = BACKGROUND_TEXTURE_WOOD ? require('../assets/images/mapbg-weird.jpg') : require('../assets/images/paper_background.jpg');
  return (
    <Layout>
      <Content style={{padding:`0 ${theme.MAIN_SIDE_GUTTER_PADDING}px`,marginTop:theme.HEADER_HEIGHT,backgroundImage:`url(${bgImage})`}}>
        <div style={{background:'#fff',padding:'24px',minHeight:`calc(100vh - ${FOOTER_HEIGHT + theme.HEADER_HEIGHT}px)`}}>
          {/* TODO: Configure breadcrumbs? */}
          {/* <Breadcrumb style={{margin:'16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {content}
        </div>
      </Content>
      <Footer style={{textAlign:'center',padding:`${theme.MAIN_FOOTER_TB_PADDING}px ${theme.MAIN_SIDE_GUTTER_PADDING}px`,backgroundImage:`url(${bgImage})`}}>
        ©2019 by JK
      </Footer>
    </Layout>
    
  );
}