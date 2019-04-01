import {
  StyleSheet,
  Dimensions
} from 'react-native'
import { primaryColor } from '../../styles/var'
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
  contentBox: {
    height: height - 180,
    paddingTop: 100,
    backgroundColor: '#fff'
  },
  textInputBox: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  textInput: {
    height: 50,
  },
  buttonBox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  }
})
export default styles
