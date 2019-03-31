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
  },
  listBox: {
    height: height - 180,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20
  },
  itemBox: {
    width: width,
    height: 70,
    marginBottom: 10,
    flexDirection: 'row',
    // ...border('red')
  },
  imgBox: {
    width: 48,
    marginTop: 11,
    // ...border('orange')
  },
  itemTextBox: {
    width: width - 80,
    height: 68,
    paddingBottom: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    // ...border('orange')
  },
  itemText: {
    fontSize: 20,
    lineHeight: 55
  }
})
export default styles
