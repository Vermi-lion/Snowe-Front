import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons,FontAwesome,Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function CustomDrawerContent({ navigation }) {

  return (
    <DrawerContentScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 19 }}>
        <Image
          source={require('../Images/UserIcon.jpg')}
          style={{ width: 72, height: 72, borderRadius: 36 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
            로그인하기
          </Text>
        </TouchableOpacity>
      </View>
      <DrawerItem
        label="마이페이지"
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('MyPage')}
      />
      <DrawerItem
        label="강사 마이페이지"
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('TeacherMyPage')}
      />
      <DrawerItem
        label="스키장 리스트"
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="ski" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('SkiResortList')}
      />
      <DrawerItem
        label="예약 목록"
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="account-clock" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('ReservationList')}
      />
       <DrawerItem
        label="강사자격 신청 및 등록"
        icon={({ color, size }) => (
          <FontAwesome name="id-card-o" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('TeacherVerify')}
      />
       <DrawerItem
        label="강습 등록"
        icon={({ color, size }) => (
          <Foundation name="page-edit" color={color} size={size} />
        )}
        onPress={() => navigation.navigate('LessonSignUp')}
      />
    </DrawerContentScrollView>
  );
}
