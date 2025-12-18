import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, ScrollView, TextInput, Image, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'

import './global.css';
import { Container } from 'components/Container';

function PythonBasicScreen() {
  return (
    <View className='flex-1 bg-tg-bg'>

    </View>
  )
}

function RegisterScreen() {
  const navigate = useNavigation();

  const OnPressFunc = () => {
    navigate.navigate('Курсы' as never);
  }

  return (
    <View className='flex-1 justify-center items-center bg-slate-900'>
      <View className='w-full p-10 gap-3'>
        <Text className='text-3xl text-white text-center'>Регистрация</Text>
        <TextInput placeholder='username' className='bg-slate-800 rounded-[5px] text-white p-2 border border-slate-600 placeholder:text-white mt-3'></TextInput>
        <TextInput placeholder='password' className='bg-slate-800 rounded-[5px] text-white p-2 border border-slate-600 placeholder:text-white'></TextInput>
        <Pressable onPress={OnPressFunc}>
          <Text className='bg-slate-800 border border-slate-600 rounded-[5px] text-white p-3 text-center mt-2'>Продолжить</Text>
        </Pressable>
      </View>
    </View>
  )
}

function HomeScreen() {
  const navigate = useNavigation();

  const PythonBasicPress = () => {
    navigate.navigate('Python-Basic' as never);
  }

  return (
    <View className="flex-1 bg-tg-bg pt-10">
      <View className='bg-tg-card py-5 border-b border-tg-border'>
        <Text className='text-tg-text text-2xl text-center'>Курсы</Text>
      </View>
    <ScrollView className='flex-1 p-5 bg-tg-bg flex-col' showsVerticalScrollIndicator={false}>
      <Pressable className='flex-1 gap-3 mt-3' onPress={PythonBasicPress}>
        <View className='bg-tg-card border border-tg-border p-6 rounded-[5px] flex-1 flex-row justify-start items-center gap-5'>
          <Image 
            source={{ uri: 'https://www.tutkit.com/storage/media/packages/337/337-programmieren-mit-python-der-anfaenger-kurs-main-med.webp' }} 
            className="w-20 h-20 rounded-[15px]" 
            resizeMode="cover"
          />
          <View className='flex flex-col'>
            <Text className='text-tg-text font-semibold text-[18px]'>Python-Basic</Text>
            <Text className='text-tg-text2'> - Базовый синстаксис языка</Text>
            <Text className='text-tg-accent2 font-semibold mt-2 text-left'>бесплатно</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
    </View>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#17181F' }, headerTintColor: '#ffff', }}>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Курсы' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Python-Basic' component={PythonBasicScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}