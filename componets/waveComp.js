import React from 'react'
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';



export default function WavyComp({ customStyles }) {
    return (
      <View style={customStyles}>
        <View style={{ backgroundColor: '#fff', height: 140, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <Svg
            height="50%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: 135 }}
          >
            <Path // Need to work on data of the path. Currently using online toole 'https://getwaves.io/' to generate path data
              fill="#ffffff"
              d="M0,32L24,42.7C48,53,96,75,144,85.3C192,96,240,96,288,
              106.7C336,117,384,139,432,128C480,117,528,75,576,101.3C624,
              128,672,224,720,240C768,256,816,192,864,160C912,128,960,128,1008,
              149.3C1056,171,1104,213,1152,218.7C1200,224,1248,192,1296,186.7C1344,
              181,1392,203,1416,213.3L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,
              0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,
              624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            />
          </Svg>
        </View>
      </View>
    );
  }

  




<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" 
d="M0,32L24,42.7C48,53,96,75,144,85.3C192,96,240,96,288,106.7C336,117,384,139,432,128C480,117,528,75,576,101.3C624,128,672,224,720,240C768,256,816,192,864,160C912,128,960,128,1008,149.3C1056,171,1104,213,1152,218.7C1200,224,1248,192,1296,186.7C1344,181,1392,203,1416,213.3L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
></path></svg>