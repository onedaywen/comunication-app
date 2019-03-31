import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { height, width } =  Dimensions.get('window')
const styles = StyleSheet.create({
  pageView: {
    width,
    height: height - 60,
    backgroundColor: 'yellow',
  },
  scrollView: {
    width,
    height: height - 180,
    overflow: 'scroll',
    backgroundColor: 'skyblue',
  },
  messageBox: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20
  },
  msgItemBox: {
    height: 120
  },
  msgItem: {
    height: 120,
    fontSize: 18,
  }
})
export default styles
