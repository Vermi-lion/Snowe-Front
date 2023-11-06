import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';
import { useNavigation} from '@react-navigation/native';


// const data = [
//   { id: '1', name: '원빈', classname: '스키초급반', image: require('../Images/face.jpg'), count: 0, edudate: '09:00',subject:'스키',level:'초급' },
//   { id: '2', name: '주성', classname: '보드초급반', image: require('../Images/face1.jpg'), count: 0, edudate: '17:00',subject:'보드',level:'중급'},
//   { id: '3', name: '정훈', classname: '스키초급반', image: require('../Images/face2.jpg'), count: 0, edudate: '11:00',subject:'스키',level:'고급' },
// ];


  //DB에서 필요한 데이터는 선생님 이름 name 이랑 종목 이름 subject 반 이름 classname id는 선생님 고유 번호


const TeacherInfoScreen = () => {
  const navigation = useNavigation();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('선생님 데이터 받아오는 API')
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data); 
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);


  const onGoBack = () => {
    navigation.goBack();
  };




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <TransparentCircleButton onPress={onGoBack} name="left" color="#424242" />
          <Text style={styles.title}>강사 정보</Text>
        </View>

      </View>
      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.teacherImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.subjectContainer}>
                  <Text style={styles.subjectText}>{item.classname}</Text>
                </View>
                <Text style={styles.itemText}>{item.subject}/{item.level}</Text>
              </View>
              <TouchableOpacity
                onPress={() => onCancel(item.id)}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>상세보기</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBEBF9',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginRight: 1, 
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    borderRadius: 50, 
    overflow: 'hidden', 
  },
  teacherImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1, 
    marginLeft: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: -5, 
    marginTop: -5, 
  },
  subjectContainer: {
    alignItems: 'center', 
    marginBottom: 0, 
  },
  subjectText: {
    fontSize: 16,
    marginLeft:15,
  },
  cancelButton: {
    width: '20%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  cancelButtonText: {
    textAlign: 'center', 
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,
    marginRight:30,
  },
});

export default TeacherInfoScreen;
