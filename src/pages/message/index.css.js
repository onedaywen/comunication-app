import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { height, width } =  Dimensions.get('window')
const border = (color) => {
  color = color || '#999'
  return {
    borderTopWidth: 1,
    borderTopColor: color,
    borderRightWidth: 1,
    borderRightColor: color,
    borderBottomWidth: 1,
    borderBottomColor: color,
    borderLeftWidth: 1,
    borderLeftColor: color
  }
}
const styles = StyleSheet.create({
  
  pageView: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    width,
    height: height,
    backgroundColor: 'yellow',
  },
  scrollView: {
    width,
    height: height - 200,
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
  listBox: {
    height: height - 200,
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
  itemRightBox: {
    width: width - 80,
    height: 60,
    paddingBottom: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    // ...border('orange')
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  firstLineText: {
    lineHeight: 30,
    // ...border('red')
  },
  firstLineTime: {
    lineHeight: 30,
    color: '#999',
    textAlign: 'right',
    // ...border('red')
  },
  secondLine: {
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
    // whiteSpace: 'nowrap'
  },
  secondLineText: {
    color: '#999'
  }
})
export default styles
