import React, { Component } from 'react';
import { store } from '../../allStore';
import { injectReducer } from '../../reducerUtil';
import reducer from './reducer';
import { connect } from 'react-redux';

console.log('person进来了');
import {
    Text,
    View
  } from 'react-native';

class Person extends Component {
    render() {
        injectReducer(store, 'person', reducer);
        return(
            <View>
                <Text>
                   Person
                </Text>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    number: state.global.number,
  });

  export default connect(mapStateToProps)(Person);
