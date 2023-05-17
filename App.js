import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Instagram
      </Text>
    <View style={styles.contenedorIconos}>
      <Image style={styles.iconosArriba} source={require('/assets/notificacion.png')} />
      <Image style={styles.iconosArriba} source={require('/assets/chats.png')} />
    </View>
      <View style={styles.imgcontainer}>
              <View>
                <Image style={styles.hs1} source={require('/assets/mujer.png')} />
                <Text style={styles.nickhs1}>Magali Sanchez</Text>
              </View>
              <View>
                <Image style={styles.hs} source={require('/assets/img2.png')} />
                <Text style={styles.nickhs}>Adam Sandler</Text>
              </View>
              <View>
                <Image style={styles.hs} source={require('/assets/img3.png')} />
                <Text style={styles.nickhs}>LatesitoR</Text>
              </View>
              <View>
                <Image style={styles.hs} source={require('/assets/img4.png')} />
                <Text style={styles.nickhs}>Cristina</Text>
              </View>
              <View>
                <Image style={styles.hs} source={require('/assets/img5.png')} />
                <Text style={styles.nickhs}>Raul</Text>
              </View>
              <Text style={styles.mas}>+</Text>

      </View>
      <Text style={styles.line}></Text>
      <View style={styles.perfil}>
            <Image style={styles.imgperfil} source={require('/assets/mujer.png')} />
      <Text style={styles.name}>
      Magali Sanchez
      </Text>
      </View>
      <Image style={styles.img} source={require('/assets/mujer.png')} />
      <View style={styles.containerlogo}>
            <Image style={styles.logo} source={require('/assets/corazon.png')} />
            <Image style={styles.logo} source={require('/assets/comentario.png')} />
            <Image style={styles.logo} source={require('/assets/avion.png')} />
            <Image style={styles.etiqueta} source={require('/assets/etiqueta.png')} />
            <Text style={styles.likes}>16 likes</Text>
            <Text style={styles.name1}>Magali Sanchez</Text>
            <Text style={styles.comentarios}>Ver los 5 comentarios</Text>
      </View>
      <View style={styles.menu_container}>
        <Image style={styles.menu} source={require('/assets/imgmenu1.png')} />
        <Image style={styles.menu} source={require('/assets/imgmenu2.png')} />
        <Image style={styles.menu} source={require('/assets/imgmenu3.png')} />
        <Image style={styles.menu} source={require('/assets/imgmenu4.png')} />
        <Image style={styles.menuperfil} source={require('/assets/mujer.png')} />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  paragraph: {
    position: 'absolute',
    fontFamily: 'script mt bold',
    top: 50,
    left: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconosArriba: {
    left: 300,
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  contenedorIconos: {
    flexDirection: 'row',
    top: -50,
  },
  imgcontainer: {
    flexDirection: 'row',
    position: 'relative',
    top: -15,
  },
  menu_container: {
    flexDirection: 'row',
    top: 70,
  },
  menu: {
    marginLeft: 40,
    width: 30,
    height: 30,
  },
  menuperfil: {
    borderRadius: 40,
    marginLeft: 30,
    width: 34,
    height: 34,
},
  mas:{
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: 'blue',
    fontSize: 18,
    color: 'white',
    width: 25,
    height: 25,
    top: 40,
    left: 70,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  
  hs1:{
    position: 'relative',
    marginBottom: 0,
    borderRadius: 40,
    marginLeft: 20,
    width: 70,
    height: 70,
    borderWidth: 3,
    borderStyle: 'double',
  },

  hs: {
    marginBottom: 0,
    borderRadius: 40,
    marginLeft: 20,
    width: 70,
    height: 70,
    borderWidth: 3,
    borderColor: '#fe9253',
    borderStyle: 'double',
  },
  nickhs1:{
    color: '#868686',
    textAlign: 'center',
    fontWeight: 'thing',
    marginLeft: 15,
    fontSize: 11,
  },
  nickhs: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 11,
  },
  line: {
    margin: 10,
    height: 3,
    backgroundColor: '#e9e9e9'
  },
  perfil: {
    flexDirection: 'row',
  },
  name: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  imgperfil: {
    marginBottom: 5,
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  img: {
    height: 350,
    width: 400,
  },
  containerlogo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  logo: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  etiqueta: {
    marginLeft: 235,
    width: 30,
    height: 30,
  },
  likes: {
    marginTop: 30,
    marginLeft: 15,
    position: 'absolute',
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },

  name1:{
    marginTop: 50,
    marginLeft: 15,
    position: 'absolute',
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  comentarios:{
    marginTop: 70,
    marginLeft: 15,
    position: 'absolute',
    fontSize: 15,
    color: '#868686',
    fontWeight: 'thin',
  },

});
