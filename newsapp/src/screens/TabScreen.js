import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header  hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'white'}} activeTextStyle={{color:'darkblue'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'white'}} activeTextStyle={{color:'darkblue'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'white'}} activeTextStyle={{color:'darkblue'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}