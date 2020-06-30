
import React, { Component } from 'react';

import { Dimensions, Modal, Share, ScrollView } from 'react-native';
import {  WebView } from 'react-native-webview';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button, View} from 'native-base';

const webViewHeight = Dimensions.get('window').height-'69';

// create a component
export default class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
             
            <Modal 
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
                style={{flex:1}}
            >
                
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    
                    
                    
                        
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}}
                        onError={this.handleClose} startInLoadingState
                        
                        />
                       
                     
                    </Content>
                
                  
                </Container>
                
                
            </Modal>
            
            
        );
        } else {
            return null;
        }
    }
}
