import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WavyPath from './componets/waveComp'

const window = Dimensions.get("window");
export default function App() {

  const [dimensions, setDimensions] = useState({ window });
  /**
   * Returns true if the screen is in portrait mode
   */
  const isPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  };

  const onChange = ({ window }) => {
    setDimensions({ window });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange); // added listner for orientation change
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);


  /**
   * The Innerbox Dimensions as per orientation
   */
  const getInnerBoxDimensions = () => {
    return isPortrait() ? {
      height: dimensions.window.width / 1.2,
      width: dimensions.window.width / 1.2
    } : {
        height: dimensions.window.height / 1.2,
        width: dimensions.window.height / 1.2
      }
  }

  return (
    <View style={styles.container}>
      <View style={{ ...getInnerBoxDimensions(), backgroundColor: '#DCE6F9', borderRadius: 20 }}>
        <WavyPath customStyles={{ width: getInnerBoxDimensions().width, position: 'absolute', }} />
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 50 }}>
            <View style={styles.smallBox}></View><Text style={styles.text_name}>Name </Text><View style={styles.smallBox}></View></View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }}>
          <Text style={styles.text_balance}>Balance</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_name: {
    fontSize: 20,
    fontWeight: "600",
    alignItems: 'center',
  },
  text_balance: {
    fontSize: 20,
    fontWeight: "600",

  },
  smallBox: {
    backgroundColor: '#0B090A',
    height: 50,
    width: 50,
    borderRadius: 5,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    elevation: 5,
  }
});


