import React from 'react';
import { ColorValue, FlatList, Text, View } from 'react-native';

type Pin =
{
    label: String
    address: String
    state: String
}

const pins: Array<Pin> =
[
    {
        label: "Okay",
        address: "21",
        state: "LOW"
    },
    {
        label: "Left",
        address: "22",
        state: "LOW"
    },
    {
        label: "Right",
        address: "20",
        state: "LOW"
    }
]

type PinCardProps =
{
    pin: Pin
}

type LabelProps =
{
    text?: String
    color?: ColorValue
}

function App(): JSX.Element
{
    return ( 
        <View style={{ padding: 10 }}>
            { pins.map(value => <PinCard pin={value} />) }
        </View> 
    );
}

function PinCard({ pin }: PinCardProps): JSX.Element
{
    return (
        <View style={{ padding: 10, backgroundColor: "#3498db", marginBottom: 10, borderRadius: 30, flexDirection: "row", alignSelf: "flex-start" }}>
           <Label text={ pin.label } color="#2980b9" />
        </View>
    )
}

function Label({ text, color }: LabelProps): JSX.Element
{
    return (
        <View style={{ padding: 10, backgroundColor: color, borderRadius: 20, width: 100, alignItems: "center" }}>
            <Text style={{ fontSize: 20 }}>{ text }</Text>
        </View>
    )
}


export default App;
