import React, { Component } from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    Card,
    Image,
    Info,
    ButtonStyles,
    Button,
    IconDeslike,
    IconLike,
    Nome,
    InfoProfile,
    ContainerHome,
    ContainerIcons,
    ViewHome,
    TextSemJogador
} from './styles';

import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Animated, PanResponder, YellowBox } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import Icon from 'react-native-vector-icons/Ionicons'
const Users = [
  { id: "1", uri: require('../../assets/perfil_image.png') },
  { id: "2", uri: require('../../assets/perfil_exemple3.jpeg') },
  { id: "3", uri: require('../../assets/perfil_exemple2.jpeg') },
  { id: "4", uri: require('../../assets/perfil_exemple1.jpeg') },
]

export default class Home extends Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {

    return Users.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT, width: SCREEN_WIDTH , position: 'absolute' }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 100, left: 60, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 100, right: 60, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

              <ContainerHome>
                <Card>
                    <Image  source={item.uri} />
                    <Info>
                        <Nome>Nome do Jogador</Nome>
                        <InfoProfile>Aqui é onde vai a definição do jogador, onde informa o que ele joga.</InfoProfile>
                    </Info>
                </Card>
              </ContainerHome>

          </Animated.View>
        )
      }
      else {
        return (
         
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT, width: SCREEN_WIDTH, position: 'absolute',
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>
              <ContainerHome>
                <Card>
                    <Image  source={item.uri} />
                    <Info>
                        <Nome>Nome do Jogador</Nome>
                        <InfoProfile>Aqui é onde vai a definição do jogador, onde informa o que ele joga.</InfoProfile>
                    </Info>
                </Card>
              </ContainerHome>
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, backgroundColor: '#454545' }}>
          <ViewHome>
            <TextSemJogador> Nenhum jogador perto de voce...</TextSemJogador>
          </ViewHome>
          {this.renderUsers()}
          
          <ContainerIcons>
          <ButtonStyles>
                    <Button color={"#fbae5c"}><IconDeslike source={require('../../assets/tresh_ico_withe.png')} /></Button>
                    <Button color={"#c48eff"}><IconLike source={require('../../assets/controll_ico_white.png')} /></Button>
                </ButtonStyles>
          </ContainerIcons>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
      backgroundColor: '#454545'
  }
});

























/* export default class Home extends Component{  
    render() {  
        return(  

    <Container>
        <Card>
            <Image source={require('../../assets/perfil_image.png')} />
            <Info>
                <Nome>Nome do Jogador</Nome>
                <InfoProfile>Aqui é onde vai a definição do jogador, onde informa o que ele joga.</InfoProfile>
            </Info>
        </Card>
        <ButtonStyles>
            <Button color={"#fbae5c"}><IconDeslike source={require('../../assets/tresh_ico_withe.png')} /></Button>
            <Button color={"#c48eff"}><IconLike source={require('../../assets/controll_ico_white.png')} /></Button>
        </ButtonStyles>
    </Container>
)  
    }  
}   */
 

/*   <Container>
            <Card>
                <Image source={require('../../assets/logo.png')}/>
                <Info>
                    <Nome>JohnnBZ</Nome>
                    <Info>Jogo LOL e Dota, sou gay duas vezes;</Info>
                    <ButtonStyles>
                    <Button><Icon source={require('../../assets/logo.png')}/></Button>
                    <Button><Icon source={require('../../assets/logo.png')}/></Button>
                    </ButtonStyles>
                </Info>
            </Card>
       </Container>      */