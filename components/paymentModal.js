import React from 'react';
import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };
  close = () => {
    this.setState({show: false});
  };

  renderoutsidetouchable(onTouch){
      const view = <View style={{flex:1, width:'100%'}}/>;
      if (!onTouch) return view;
      return(
          <TouchableWithoutFeedback onPress={onTouch} style={{flex:1, width:'100%'}}>
              {{View}}
          </TouchableWithoutFeedback>
      );
  }
  render() {
    let {show} = this.state;
    const {onTouchOutside,title}=this.prop;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          styles={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}>
              {this.renderoutsidetouchable(onTouchOutside)}
              <View style={
                  backgroundColor:'#FFFFFF',
                  width:'100%',
                  borderTopRightRadius:10,
                  borderTopLeftRadius:10,
                  paddingHorizontal:10,
                  maxHeight:deviceHeight =0.4
              }>
                  <View>
                      <Text style={{
                          color:'182E44',
                          fontSize:20,
                          fontWeight:'500',
                          margin:15
                      }}>
                          {title}
                      </Text>
                  </View>

              </View>
          </View>
      </Modal>
    );
  }
}
