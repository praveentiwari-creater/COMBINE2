import React from 'react';
import { Text, View, StyleSheet, StatusBar, Animated, Image, ScrollView } from 'react-native';
import Shimmer from './ShimmerPlaceHolder';
import axios from 'axios';

const URL_DISCOVER = 'https://api.themoviedb.org/3/movie/popular?api_key=37c78689f1bd1976138d7508df586551'

class shimmer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            movieData: []
        }
    }

    getMovieDetails() {
        return axios.get(URL_DISCOVER)
    }

    componentDidMount() {
        this.getMovieDetails().then((result) => {
            let results = result.data.results;
            let movieArray = [];
            results.forEach((value) => {
                let movie = {
                    title: value.title,
                    rating: value.vote_average,
                    poster: 'https://image.tmdb.org/t/p/w185' + value.poster_path
                }
                movieArray.push(movie)
            })

            this.setState({
                movieData: movieArray
            })
        })
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                isVisible: true
            })
        }, 3100)
    }

    render() {
        console.log('state', this.state.movieData)
        // const { navigate } = this.props.navigation;

        return (

            <ScrollView style={styles.container}>
                {
                    this.state.movieData.map((value, index) => {
                        const uri = value.poster;
                        return ( 
                            <View>
                        <Text style={{fontSize:20}}>Movie</Text>

                        <View style={styles.imageContent} key={index}>
                            <Shimmer autoRun={true} style={styles.imagew} visible={this.state.isVisible}>
                                <Image style={styles.imagew}
                                    source={{ uri: uri }}></Image>
                            </Shimmer>
                            <View style={styles.movieContent}>
                                <Shimmer autoRun={true} visible={this.state.isVisible}>
                                    <Text>{value.title}</Text>
                                </Shimmer>
                                <Shimmer autoRun={true} visible={this.state.isVisible}>
                                    <Text>{value.rating}</Text>
                                </Shimmer>
                            </View>
                        </View>
                        </View>)
                    })
                }

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    imageContent: {
        flexDirection: 'row',
        margin: 16
    },
    movieContent: {
        margin: 8,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    imagew: {
        width: 80,
        height: 80
    },
    mcontent: {
        marginTop: 8,
        marginBottom: 8
    }
})

export default shimmer;