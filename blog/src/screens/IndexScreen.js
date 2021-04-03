import React, {useContext, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state: blogPosts, getBlogPosts, deleteBlogPost} = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, [])

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={blogPosts}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item: blogPost}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('Show', {id: blogPost.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{blogPost.title}</Text>
                            <TouchableOpacity
                                onPress={() => deleteBlogPost(blogPost.id)}
                            >
                                <Feather style={styles.icon} name="trash"/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>;
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return <TouchableOpacity onPress={() => navigation.navigate('Create')} >
                <Feather name="plus" size={30}/>
            </TouchableOpacity>;
        }
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;