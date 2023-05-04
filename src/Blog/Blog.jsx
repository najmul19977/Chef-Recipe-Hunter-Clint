import React from 'react';
import { Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <Container>
            <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref}>

                <p>Q1.Tell us the differences between uncontrolled and controlled components.</p>
                <p>Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                <p>Q2.How to validate React props using PropTypes</p>
                <p>ans:1.PropTypes.any : The prop can be of any data type.
                    2.PropTypes.bool : The prop should be a Boolean.
                    3. PropTypes.number : The prop should be a number.
                    4. PropTypes.string : The prop should be a string.
                    5. PropTypes.func : The prop should be a function.
                    6.PropTypes.array : The prop should be an array.</p>

                <p>Q3.Tell us the difference between nodejs and express js.</p>
                <p>ans:Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.</p>
                <p>Q4.What is a custom hook, and why will you create a custom hook?</p>
                <p>ans:Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>


        </Container>

    );
};

export default Blog;