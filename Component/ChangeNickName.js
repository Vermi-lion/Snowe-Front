import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';

const windowWidth = Dimensions.get('window').width;

const ChangeNickNameScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const handleCheckNickname = async () => {
    try {
      const response = await fetch(`${URL}/member/member-nickname?nickname=` + nickname, {
        method: 'GET',
        headers: {
          'Accept': 'text/plain', 
        },
      });

      if (response.ok) {
        const result = await response.text();
        if (result === "duplicate") {
          alert('이미 존재하는 닉네임입니다.');
          setIsNicknameValid(false);
        } else {
          alert('사용 가능한 닉네임입니다.');
          setIsNicknameValid(true);
        }
      } else {
        alert('중복 확인에 실패했습니다.');
        setIsNicknameValid(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('닉네임를 입력해주세요');
      setIsNicknameValid(false);
    }
  };

  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
        <Text style={styles.title}>닉네임 설정</Text>
      </View>

      <View style={styles.fullContainer}>
        <Text style={styles.inputLabel}>닉네임 변경</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="닉네임"
            value={nickname}
            onChangeText={(text) => setNickname(text)}
          />
          <TouchableOpacity style={styles.registerCheckButton} onPress={handleCheckNickname}>
            <Text style={styles.registerButtonText}>중복체크</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.middleText}>※ 닉네임을 설정하면 30일간 변경할 수 없습니다.</Text>
        
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetText}>변경하기</Text>
        </TouchableOpacity>
      </View>
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight:30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight:'bold',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginRight: 10,
    
  },
  resetButton: {
    height: 40,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    color: 'black',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  fullContainer: {
    padding: 20,
  },
  registerCheckButton: {
    width: '20%',
    height: 40,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'black',
  },
  middleText: {
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'left',
  },
});

export default ChangeNickNameScreen;
