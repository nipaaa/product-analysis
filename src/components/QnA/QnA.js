import React from 'react';
import { Card } from 'react-bootstrap';

const QnA = () => {
    return (
        <div className='mx-5'>

            <h2 className='text-center text-info my-5 fw-bolder'>Queries...</h2>
                <Card>
  <Card.Header as="h5">What is Context API ?</Card.Header>
  <Card.Body>
    <Card.Text>
    React.js is a powerful way to make sophisticated web apps and websites. React Contexts build on React’s state management. They provide a way to manage complex, nested state in a simpler and more effective way than using props.Store the state in a Context value in the common ancestor component and access it from as many components as needed which can be nested at any depth under this ancestor. This solution has the same benefits as the Props solution, but because of what could be called “hierarchical scoping”, it has the added benefit that any component can access the state in any Context that is rooted above itself in React’s hierarchy, without this state needing to be passed down to it as props. React.js takes care of all the magic behind the scenes to make this work.
    </Card.Text>
  </Card.Body>
</Card> <br /><br />

<Card>
  <Card.Header as="h5">what is semantic tags?</Card.Header>
  <Card.Body>
    <Card.Text>
    HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.A semantic element clearly describes its meaning to both the browser and the developer. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    );
};

export default QnA;