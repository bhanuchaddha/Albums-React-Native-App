import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


export default function AlbumDetail({ album }) {

    const { title, artist, thumbnail, image, url } = album;
    const { thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTitleStyle,
        imageStyle,
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} text={'Submit'} />
            </CardSection>
        </Card>
    )
}

styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5
    },
    headerTitleStyle: {
        fontSize: 20
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    }
}
