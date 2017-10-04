import React, { Component } from 'react';
import { View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Picker, Form, Item as FormItem, Card, CardItem, } from 'native-base';
import { Platform } from "react-native";
import { Image } from 'react-native';
import { observer } from "mobx-react";
import { NativeRouter, Route, Link } from 'react-router-native';
import Api from './Api';
import Login from './Login'
import auth from './Auth'
import store from './Store'


export default observer(class Structure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <NativeRouter>
      <Container>
        <Header>
        <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
        </Left>
          <Body>
            <Title>React Native</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Route path ="/x" render={() => <Api store={this.props.store} /> } />
        <Route path ="/y"  />
        <Route path ="/z" render={() => <Login store={this.props.store} /> } />
         <Card>
         <CardItem cardBody>
         <Image source={{uri: 'https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067'}} style={{height: 200, width: null, flex: 1}}/>
         </CardItem>
         </Card>
       </Content>
       <Footer>
         <FooterTab>
           <Button>
           <Link to ="/x">
           <View>
             <Icon name="apps" />
           </View>
           </Link>
           </Button>
           <Button>
           <Link to ="/">
           <View>
             <Icon name="home" />
           </View>
           </Link>
           </Button>
           <Button>
           <Link to ="/z">
           <View>
             <Icon name="navigate" />
           </View>
           </Link>
           </Button>
         </FooterTab>
       </Footer>
      </Container>
      </NativeRouter>
    );
  }
})
