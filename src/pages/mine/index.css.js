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
    backgroundColor: '#fff'
  },
  mineHeader: {
    position: 'relative',
    height: 200,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden'
  },
  // 背景图片
  img: {
    width: '100%',
    height: '100%'
  },
  // 人物头像
  personPictureBox: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 30,
    overflow: 'hidden'
  },
  headerContent: {
    position: 'absolute',
    top: 80,
    left: 20,
    width: 180,
    backgroundColor: 'transparent'
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  text: {
    color: '#efefef'
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
