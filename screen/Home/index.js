import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import {
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { store } from '../../allStore';
import { injectReducer } from '../../reducerUtil';
import reducer from './reducer';

class Home extends Component {
    _onPressButton = () => {
        this.props.navigation.navigate('Person');
    }
    render() {
        const { number } = this.props;  
        injectReducer(store, 'home', reducer);
        return(
            <View>
                <Text>
                    Home
                </Text>
                <TouchableOpacity onPress={this._onPressButton}>
                <Text>
                   to Person
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.testSaga}>
                <Text>
                    测试saga
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    number: state.global.number,
  });

  const mapDispatchToProps = dispatch => ({
    testSaga: () => dispatch({ type: 'POST' }),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Home);
