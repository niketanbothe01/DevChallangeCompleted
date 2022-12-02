import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import 'react-native-gesture-handler';
import {
  BarChart,
} from 'react-native-chart-kit';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const MyBarChart = () => {
  return (
<BarChart
        data={{
          labels: ['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu'],
          datasets: [
            {
              data: [50, 48, 49, 45, 46, 49, 51],
              colors: [
                (opacity = 1) => '#F5B335',
                (opacity = 1) => '#F5B335',
                (opacity = 1) => '#F5B335',
                (opacity = 1) => '#F5B335',
                (opacity = 1) => '#F5B335',
                (opacity = 1) => '#F5B335',
                (opacity = 1) => '#D6006D',

              ]
            },
          ],
        }}
        width={Dimensions.get('window').width/2}
        height={220}
        chartConfig={{
          backgroundColor:'transparent',
          backgroundGradientFrom: "white",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "white",
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
           // optional, default 3
          barPercentage: 0.2,
          barRadius:7
        }}
        withInnerLines={false}
        withHorizontalLabels={false}
        showBarTops={false}
        withCustomBarColorFromData={true}
        flatColor={true}
        
        style={{
          width:'100%',
          // backgroundColor:'red',
          right:50
          
        }}
      />
  )};

const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Head}>HereWorks</Text>
      <Text style={styles.subHead}>Hi Derek 👋</Text>
      <View style={{ width:'90%', flexDirection:'row' }}>
        <Text style={styles.latestUpdate}>Here are your latest Updates</Text>
        <Text style={{fontSize:16, fontWeight:'900'}}>24{'\u00B0'}</Text>
        <Image style={{bottom:10}} source={require('./assets/Sun.png')}/>
        
      </View>
      <View style={styles.subcontainer}>
        <Card title="Local Modules">
          <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
            <Text style={styles.paragraph}>
              Happy Score
            </Text>
            <Text style={{color:'red', fontWeight:'500'}}> Live</Text>
          </View>
          <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
            <View style={{ width:'50%'}}>
              <MyBarChart />
          </View>
          <View style={{width:'50%'}}>
              {/* <MyBarChart1 /> */}
              <AnimatedCircularProgress
                size={160}
                width={15}
                fill={50}
                tintColor="#F5B335"
                backgroundColor="#C4C4C4">
                  
                {
                  (fill) => (
                    <Text style={{fontSize:34, fontWeight:'900', color:'#444F71'}}>
                      { 50}
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
            </View>
          </View>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}><Text style={{color:'#2173C4', textDecorationLine: 'underline'}}> Find out why  </Text><Image source={require('./assets/arrow-left.png')}/></TouchableOpacity>
          
        </Card>
        
        <Card title="Local Modules">
          <Text style={styles.paragraph}>
            This is Demo Card if we need number of card below this we can add Flatlist Which I didnt
            implimented in this project.
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: 'white',
  },
  subcontainer: {
    flex:1,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
  },
  Head:{
    fontSize:28,
    fontWeight:'900',
    fontFamily:'Roboto',
    color:'#323e48',
    marginTop:10,
    width:'100%',
    marginLeft:'20%'
  },
  subHead:{
    fontSize:24,
    fontWeight:'900',
    fontFamily:'Roboto',
    color:'#323E48',
    marginTop:10,
    width:'100%',
    marginLeft:'20%'
  },
  latestUpdate:{
    fontSize:18,
    fontFamily:'Roboto',
    color:'#323E48',
    width:'90%',
    left:15
  },
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});