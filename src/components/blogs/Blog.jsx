import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Pdf from '../pdf/Pdf';

const Blog = () => {
    return (
        <div>
            <div>
            <h1 className='m-10 text-center text-3xl'>This is a Blog page</h1>
            </div>
                <div className='w-9/12 mx-auto text-center'>
                <Pdf/>
                </div>
            <div className='flex justify-center mt-10'>
            <PDFDownloadLink document={<Pdf/>} fileName='someone'>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex">Download Pdf</button>
            </PDFDownloadLink>
            </div>
            <div className=' p-20'>
                <div className='text-3xl font-bold'>Qus. What are the differences between controlled and uncontrolled components?</div>
                <div className='p-10 italic'>Ans. In React, controlled and uncontrolled components refer to the way that form inputs are managed and updated in the component's state. The main differences between controlled and uncontrolled components are:

                    State management: In a controlled component, the value of the form input is managed by React state, and is updated when the state changes. In an uncontrolled component, the value of the input is managed by the DOM, and is accessed using a ref.

                    Initial value: In a controlled component, the initial value of the form input is set using the value prop, and can be updated using the onChange event. In an uncontrolled component, the initial value is set using the defaultValue prop.

                    Validation: In a controlled component, validation of the input can be done in the onChange event, and the error state can be stored in the component's state. In an uncontrolled component, validation is typically done after the form is submitted, and error handling may be more complex.

                    Input handling: In a controlled component, input handling can be more complex, as it involves updating state and re-rendering the component. In an uncontrolled component, input handling is simpler, as it involves accessing the input value directly from the DOM.

                    Performance: Controlled components can have better performance in some cases, as React can optimize updates and re-renders based on changes to state. Uncontrolled components can be faster in some cases, as they don't require state updates and re-renders for every input change.</div>
            </div>
            <div className=' p-20'>
                <div className='text-3xl font-bold'>Qus. How to validate React props using PropTypes in react?</div>
                <div className='p-10 italic'>Ans. In React, you can use the PropTypes library to validate the types and values of props passed to a component. Here's an example of how to validate React props using PropTypes:

                    Install PropTypes library: First, you need to install the PropTypes library.
                    Next, you need to import the PropTypes library in your component file.Define propTypes: Finally, you can define the propTypes for your component by adding a propTypes property to the component class or function, and assigning it an object with the prop names as keys and their respective PropTypes as values.
                </div>
            </div>
            <div className=' p-20'>
                <div className='text-3xl font-bold'>Qus. Differences between node.js vs express.js?</div>
                <div className='p-10 italic'>Ans. Node.js and Express.js are both widely used technologies for building server-side applications using JavaScript. Here are some of the main differences between Node.js and Express.js:

                    Functionality: Node.js is a server-side runtime environment that allows developers to run JavaScript on the server. It provides low-level APIs for network, file system, and other system-level operations, making it a versatile and powerful tool for building server-side applications. Express.js is a web application framework built on top of Node.js, which provides a higher-level abstraction for building web applications, with features like routing, middleware, and view rendering.

                    Modularity: Node.js is a modular platform that allows developers to use third-party modules for different functionalities, such as HTTP servers, file system operations, and more. Express.js is also modular, but it provides a higher-level abstraction for building web applications, with a unified API for routing, middleware, and other web-related functionality.

                    Routing: Node.js provides basic routing capabilities through its built-in HTTP module, but it requires developers to write low-level code for handling different routes and HTTP methods. Express.js provides a much more powerful routing system, with a flexible API for defining routes and handling requests.

                    Middleware: Node.js does not have built-in middleware support, but developers can use third-party modules to add middleware functionality to their applications. Express.js provides a middleware system that allows developers to define middleware functions for handling requests and responses, with support for error handling, logging, and more.

                    Template rendering: Node.js does not provide built-in support for template rendering, but developers can use third-party modules for this purpose. Express.js provides built-in support for template rendering, with support for popular template engines like EJS, Handlebars, and Pug.
                </div>
            </div>
            <div className='p-20'>
                <div className='text-3xl font-bold'>Qus. What is a custom hook, and why will you create a custom hook?</div>
                <div className='p-10 italic'>Ans. In React, a custom hook is a JavaScript function that starts with the prefix use and follows the same rules as React's built-in hooks (such as useState, useEffect, etc.). A custom hook allows you to reuse functionality across different components and encapsulate complex logic in a simple, reusable function.

                    You might create a custom hook in React when you need to share stateful logic or side effects across multiple components. For example, if you have several components that need to fetch data from an API, you could create a custom hook that encapsulates the logic for fetching the data and returns the results to each component that uses it.

                    Custom hooks can also help improve code organization and readability by separating concerns and making it easier to reason about the functionality of each component.
                </div>
            </div>
        </div>
    );
};

export default Blog;