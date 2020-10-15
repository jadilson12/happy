import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import React from 'react';
import Routes from './src/routes';

export default function App() {
    const [fontsLoader] = useFonts({
        Nunito_800ExtraBold,
        Nunito_700Bold,
        Nunito_600SemiBold,
    });

    if (!fontsLoader) {
        return null;
    }
    return <Routes />;
}
