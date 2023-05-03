import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        // flexDirection: 'row',
        // backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const Pdf = () => {


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>
                        This blog page contains the question and answer regarding the react js project and full stack web development.
                        Node.js is a JavaScript runtime that allows developers to build server-side applications in JavaScript. It provides a powerful set of features and modules that can be used to build scalable and efficient applications.

                        Custom hooks are a feature of React, a popular JavaScript library for building user interfaces. Custom hooks allow developers to reuse logic across multiple components, enabling them to write more efficient and maintainable code. A custom hook is essentially a JavaScript function that can be called from within a React component to provide some specific functionality.

                        Express.js, on the other hand, is a popular web framework for Node.js that simplifies the process of building web applications. It provides a set of features and middleware that make it easier to handle HTTP requests, manage sessions and cookies, and interact with databases.

                        Express.js can be used to build RESTful APIs, web applications, and even full-stack applications with server-side rendering. It provides a robust set of features for routing, handling requests and responses, and handling errors.

                        In summary, Node.js is a JavaScript runtime that can be used to build server-side applications, custom hooks are a feature of React that allow developers to reuse logic across multiple components, and Express.js is a web framework for Node.js that simplifies the process of building web applications.
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default Pdf;