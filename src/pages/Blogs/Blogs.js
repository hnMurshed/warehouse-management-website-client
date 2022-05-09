import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Our Blogs</h2>
            <div className="mb-5">
                <h3>Difference between javascript and nodejs</h3>
                <p>1. Javascript is used to write scripts on the website, Node.js is a javascript runttime environment</p>
                <p>2. Javascript runs only in browser, Node.js help us to run javascript outside of the browser</p>
                <p>3. Javascript basically used on the client-side, where Node.js mostly used on the server-side</p>
                <p>4. Javascript allows us to add html, where Node.js doesn't</p>
                <p>5. Javascript can run in any browser engine, whereas, V8 is the only engine inside Node.js that runs and parses Javascript</p>
            </div>
            <div className="mb-5">
                <h3>When should you use nodejs?</h3>
                <p>Nodejs is a Javascript engine that can be used in any application. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                <h4>When should you use mongodb?</h4>
                <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
            </div>
            <div className="mb-5">
                <h3>Differences between sql and nosql databases</h3>
                <p>1. SQL database is a relational database; whereas NoSQL database is non-relational.</p>
                <p>2. SQL database has fixed schema; whereas NoSQL has dynamic
                3. SQL databse is not perfect for hierarchical data storage whereas NoSQL is the best for that.</p>
                <p>4. SQL database is best for complex queris; whereas NoSQL is not good for that.</p>
                <p>5. SQL database is vertically scalable; whereas NoSQL is horizontally</p>
            </div>
        </div>
    );
};

export default Blogs;