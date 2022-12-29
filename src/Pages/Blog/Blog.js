import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="bg-light p-3 rounded">
      <h2>Difference between SQL and NoSQL</h2>
      <p>
        Here, we dissect the key distinctions and discuss the best SQL and NoSQL
        database systems on the market. The following are the five key
        differences between SQL and NoSQL: SQL databases are relational, whereas
        NoSQL databases are not. SQL databases have a predefined schema and use
        structured query language. For unstructured data, NoSQL databases use
        dynamic schemas. SQL databases scale vertically, whereas NoSQL databases
        scale horizontally. NoSQL databases are document, key-value, graph, or
        wide-column stores, whereas SQL databases are table-based. SQL databases
        are better suited for multi-row transactions, whereas NoSQL databases
        are better suited for unstructured data such as documents or JSON. Learn
        about the industry.
      </p>
      <h2>What is JWT, and how does it work?</h2>
      <p>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.jwts differ from other web tokens
        in that they contain a set of claims. Claims are used to transmit
        information between two parties. What these claims are depends on the
        use case at hand. For example, a claim may assert who issued the token,
        how long it is valid for, or what permissions the client has been
        granted. A JWT is a string made up of three parts, separated by dots
        (.), and serialized using base64. In the most common serialization
        format, compact serialization, the JWT looks something like this:
        xxxxx.yyyyy.zzzzz.
      </p>
      <h2>How does NodeJS handle multiple requests at the same time?</h2>
      <p>
        Node’s main JavaScript thread uses an event loop. When multiple requests
        are made, the first is processed while the rest are blocked (until the
        first is complete). Each request is processed one loop at a time until
        they’re all processed. The loop executes very quickly and you kind of
        have to go out of your way to create apps that block. There’s an
        important caveat to this: user requests (like web requests) are not the
        same as function requests. Multiple users can submit requests and
        they’ll be processed within nanoseconds of each other (not noticeable
        without tooling). This differs from a process calling the same
        function/memory space at the same time. Additional Threads Node
        introduced worker threads in Node 13. These run on a separate JavaScript
        thread. In larger scale Node applications, developers tend to create one
        worker per CPU to maximize parallel processing capacity. “Pseudo
        Threads” Prior to worker threads, Node had clusters (these still exist).
        Clusters mimic what workers do by taking advantage of multiple CPU cores
        by running multiple Node processes that share server ports. These were
        an effective way of scaling and existed before worker threads. — By
        default, Node is single threaded. However; programmers can spawn web
        workers or leverage clustering to utilize more threads/CPU cores.
      </p>
      <h2>What is the difference between javascript and NodeJS?</h2>
      <p>
        Javascript is a programming language that is used to create website
        scripts. NodeJS is a runtime environment for Javascript. 2. Javascript
        can only be executed in browsers. We can use NodeJS to run Javascript
        outside of the browser. 3. It is primarily employed on the client side.
        It is primarily used on the server. 4. Javascript is powerful enough to
        include HTML and manipulate the DOM. Nodejs does not support adding HTML
        tags. 5. Javascript can run in any browser engine, such as Safari's JS
        core and Firefox's Spidermonkey. V8 is the node.js Javascript engine
        that parses and executes Javascript. 6. Frontend development employs
        Javascript. Nodejs is a server-side programming language. 7. Some
        examples
      </p>
    </div>
  );
};

export default Blog;
