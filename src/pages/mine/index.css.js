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
    width,
    height: height - 60,
    // backgroundColor: 'yellow',
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
    height: 68,
    paddingTop: 10,
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
    lineHeight: 60
  }
})
export default styles
