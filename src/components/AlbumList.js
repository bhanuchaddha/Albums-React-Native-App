import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

    state = {
        albums: [
            {
                title: 'Title 1',
                artist: 'Artist 1',
                thumbnail: 'http://lorempixel.com/100/100/',
                uri: 'http://lorempixel.com/1500/1500/',
                image: 'http://lorempixel.com/1500/1500/'
            },
            {
                title: 'Title 2',
                artist: 'Artist 2',
                thumbnail: 'http://lorempixel.com/100/100/',
                uri: 'http://lorempixel.com/1500/1500/',
                image: 'http://lorempixel.com/1500/1500/'
            },
            {
                title: 'Title 3',
                artist: 'Artist 3',
                thumbnail: 'http://lorempixel.com/100/100/',
                uri: 'http://lorempixel.com/1500/1500/',
                image: 'http://lorempixel.com/1500/1500/'
            },
            {
                title: 'Title 4',
                artist: 'Artist 4',
                thumbnail: 'http://lorempixel.com/100/100/',
                uri: 'http://lorempixel.com/1500/1500/',
                image: 'http://lorempixel.com/1500/1500/'
            },
            {
                title: 'Title 5',
                artist: 'Artist 5',
                thumbnail: 'http://lorempixel.com/100/100/',
                uri: 'http://lorempixel.com/1500/1500/',
                image: 'http://lorempixel.com/1500/1500/'
            },

        ]
    }


    renderAlbumList = () => {
        return (
            this.state.albums.map((a, index) => <AlbumDetail key={index} album={a} />)
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbumList()}
            </ScrollView>
        )
    }
}
