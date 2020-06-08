import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import ProgressBar from '../Volcabulary/components/ProgressBar';

import IconClose from '../Volcabulary/components/Icons/IconClose';
import ButtonWord from './components/buttonWord';
import IconSound from './components/iconSound';
import {TextInput} from 'react-native-gesture-handler';
import CheckButton from '../Volcabulary/components/CheckButton/index';
import Answer from '../Volcabulary/components/Answer/index2';

var widthScreen = 0.9 * Dimensions.get('window').width;

const Listen2 = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [process, setProcess] = useState(0);
  const updateProcess = () => {
    setProcess(process + 0.1);
  };
  const changeActiveIndex_A = () => {
    setActiveIndex(1);
    console.log(activeIndex);
  };
  const changeActiveIndex_B = () => {
    setActiveIndex(2);
    console.log(activeIndex);
  };
  const changeActiveIndex_C = () => {
    setActiveIndex(3);
    console.log(activeIndex);
  };
  const changeActiveIndex_D = () => {
    setActiveIndex(4);
    console.log(activeIndex);
  };

  const log = () => {
    console.log('da nhan');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 0.05 * widthScreen,
          marginRight: 0.05 * widthScreen,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <IconClose navigation={props.navigation} />
        </View>
        <View
          style={{
            flex: 9,
            justifyContent: 'center',
          }}>
          <ProgressBar
            color={'#40ff00'}
            unfilledColor={'#d9d9d9'} //màu nền của progress
            borderColor={'#ffffff'} //màu viền biên ngoài
            borderRadius={10}
            height={18}
            width={widthScreen * 0.9}
            progress={0}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: 0.05 * widthScreen,
          marginRight: 0.05 * widthScreen,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Nghe và hoàn thành câu
        </Text>
      </View>

      <View
        style={{
          flex: 8,
          flexDirection: 'column',
          marginLeft: 0.05 * widthScreen,
          marginRight: 0.05 * widthScreen,
        }}>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 0.1 * widthScreen,
              marginRight: 0.1 * widthScreen,
            }}>
            <IconSound
              styles={{width: 100, height: 100, borderRadius: 50}}
              img={require('../Listening/resources/sound.jpg')}
              urlSound={require('../Listening/music/i_am_a_man.mp3')}
            />
            <IconSound
              styles={{width: 50, height: 50, borderRadius: 50, bottom: -30}}
              img={require('../Listening/resources/slow.png')}
              urlSound={require('../Listening/music/i_am_a_man.mp3')}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <Text style={{fontSize: 25}}>I am a ___.</Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'column',
            marginLeft: 0.05 * widthScreen,
            marginRight: 0.05 * widthScreen,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={changeActiveIndex_A}>
              <Answer text="A.Man" flag="1" isActive={activeIndex === 1} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={changeActiveIndex_B}>
              <Answer text="B.Girl" flag="2" isActive={activeIndex === 2} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={changeActiveIndex_C}>
              <Answer text="C.Men" flag="3" isActive={activeIndex === 3} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={changeActiveIndex_D}>
              <Answer text="D.Boy" flag="4" isActive={activeIndex === 4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flex: 1.5}}>
        <CheckButton
          check={activeIndex === 0}
          checkItem={activeIndex}
          navigation={props.navigation}
          numberScreen="3"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default Listen2;
