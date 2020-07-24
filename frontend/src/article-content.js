const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        url: 'https://spin.atomicobject.com/2017/10/12/learn-react-quickly/',
        
        content: [
            `At Atomic Object, a lot of our teams have been using React lately. 
            Because of this, we’ve designed some of our recent bootcamps to ramp new employees up on it. 
            In this post, I’ll go over some of the steps I would recommend when introducing yourself to React.`,

            `1. SET UP YOUR ENVIRONMENT`,
            `The first thing you’ll want to do is set up an environment that supports at the very least JSX, 
            the XML-like syntax most React code relies upon. You’ll probably also want all the niceties of ES6 or ES7, and maybe even TypeScript.`,

            `If you are just setting up your first React project and want to dive into tutorials rather than messing with configuration, 
            I would recommend using Create React App, which will generate all the boilerplate you need to get started.`,

            `Create React App will likely not provide the level of custom configuration you want down the road, but when you get to that point, 
            it allows you to “eject” the project, giving you control over the build steps.`,

            `2. GET THE REACT EXTENSION IN YOUR BROWSER`,
            `The React extension adds another tab to your browser’s dev tools, 
            allowing you to look through React components the same way you would look at HTML elements. 
            Along with the structure of the components, it also shows the props, state, and context a component contains. 
            This can be a big help when debugging.`,

            `3. DIVE INTO THE TUTORIAL`,
            `Okay, so you’ve got the tools. Now it’s time to write some code. 
            React’s documentation provides a tutorial that goes over the steps to create a tic-tac-toe game.
            It offers a light intro to the syntax and basic concepts of React so you can get up and running before you dig into more details in the documentation.`,

            `4. READ THE REACT DOCS`,
            `The docs give a good overview of the basics you’ll need to understand React development. Below are a few of the topics I’d focus on reading:`,

            `Embracing composition over inheritance`,
            `Especially if you come from a strong OOP background, you may have the urge to extend a Component to create a subclass to specialize a class. 
            This is discouraged in React; the idiomatic way to accomplish the usual method of inheritance is by passing different props or children 
            to a Component.`,

            `Passing in callback functions as props`,
            `This is frequently done when a child component needs to update the state of a parent component. 
            A common example here is that a parent component may pass an event listener to a child component, which binds it to a button using onClick.`,

            `Controlled components`,
            `These are typically form elements on which you attach event listeners to detect changes, 
            and then pass the new value to the element in the form of props. A common example is to manage the state of a text input, 
            rather than to let the input box handle it itself.`,

        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        url: 'https://www.sitepoint.com/build-a-simple-web-server-with-node-js/#:~:text=To%20get%20started%20with%20a,the%20project%20with%20npm%20init%20.',

        content: [
            `Planning Your App`,
            `Imagine that you want to build an application for your city’s community-supported agriculture (CSA) club. 
            Through this application, users could subscribe to receive food from local farms and distributors. 
            The application ensures that your community gets healthy food and stays connected. 
            You plan to use Node.js to build this web application and you want to start by verifying users’ zip codes to see if they live close 
            enough for delivery. The question is: will you need to build your own tool to make this possible?            
            Luckily for us, the answer is no, npm can be used to install Node.js packages, 
            libraries of code others have written that you can use to add specific features to your application. 
            In fact, there’s a package for verifying locations based on zip codes. We’ll take a closer look at that package and how to install
            it in a little bit.`,
            
            `Creating a Node.js Module`,
            `A Node.js application is ultimately made up of many JavaScript files. 
            For your application to stay organized and efficient, these files need to have access to each other’s con
            tents when necessary. Each file, whose code is collectively related, is called a module. Let’s look at our app again
            and add some positive messages to it. You can create a file called messages.js with the following code:
            Keeping these messages separate from the code you’ll write to display them will make your code more organized. 
            To manage these messages in another file, you need to change the let variable definition to use the exports object, like so:`,

            `Just like other JavaScript objects, you are adding a messages property on the Node.js exports object, which can be shared between modules.`,
            `NOTE: The exports object is actually a property of the module object. module is both the name of the code files in Node.js and 
            one of its global objects. Using exports is essentially a shorthand for module.exports.
            The module is ready to be required (imported) by another JavaScript file. 
            You can test this by creating another file called printMessages.js, whose purpose is to loop 
            through the messages and log them to your console with the code in listing 1. 
            First, require the local module by using the require object and the module’s filename (with or without a .js extension). 
            Then, refer to the module’s array by the variable set up in printMessages.js.`,

            `Running npm Commands`,
            `With your installation of Node.js, you also got Node Package Manager (npm). 
            As the name suggests, npm is responsible for managing the external packages 
            (modules others have built and made available online) in your application. 
            Throughout application development, npm will be used to install, remove, and modify these packages. 
            Entering npm -l in your terminal brings up a list of npm commands with brief explanations.`,

            `Initializing a Node.js Application`,
            `Every Node.js application or module will contain a package.json file to define the properties of that particular project. 
            This file lives at the root level of your project. Typically, this file is 
            where you’ll specify the version of your current release, the name of your application, and the main application file. 
            This file is important for npm to save any packages to the node community online.
            To get started, create a folder called zip_connection, navigate to your project directory in terminal, 
            and use the npm init command to initialize your application. You’ll be prompted to fill out the name of your project, 
            the application’s version, a short description, the name of the file from which you’ll start the app (entry point), test files, 
            git repositories, your name (author), and a license code. For now, just be sure to enter your name and press enter to accept all 
            the default options. Once you confirm all these changes, you should see a new package.json file in your project directory 
            resembling the contents of Listing 3.`,

            `Building a Simple Web Server in Node.js`,
            `The tech community raves about Node.js and its use of JavaScript as a server-side language, 
            and that’s exactly what we’re going to do now: build it!
            This section covers some basic functions of the http module, a Node.js library of code used for handling requests over the internet. 
            Through a few short steps, you’ll convert a few lines of JavaScript into an application with which you can communicate on your web browser. 
            Web servers are the foundation of most Node.js web applications. They allow you to load images and HTML web pages to users of your app.`,

            `Let’s consider that application that we’re working on to connect users from the same zip code. 
            Before you deliver the complete application, the community might like to see a simple site with the flexi
            bility to improve and add features in the future. How long do you think it will take you to build a prototype?
            With Node.js, you can use the http module to get a web server with sufficient functionality built within hours.`,

            `Understanding web servers`,
            `Before getting started, let’s discuss some important web server concepts. 
            After all, the final product will look and feel a lot better if you have clear expectations for the result ahead of time.`,

            `Web servers and HTTP`,
            `A web server is software designed to respond to requests over the internet by loading or processing data. 
            Think of a web server like a bank teller, whose job is to process your request to deposit, withdraw, 
            or simply view money in your account. Just as the bank teller follows a protocol to ensure that they process your request correctly, 
            web servers follow the Hypertext Transfer Protocol (HTTP), a standardized system globally observed for the viewing of web 
            pages and sending of data over the internet.`,

            `One way a client (your computer) and a server communicate is through the use of HTTP verbs. 
            These verbs indicate what type of request is being made. For example, is the user trying to load a new web page or 
            are they updating information in their profile page? The context of a user’s interaction with an application is an 
            important part of the request–response cycle.`,

            `Here are the two most widely used HTTP methods you’ll encounter:`,
            `GET. This method is used to request information from a server. 
            Typically, a server responds with content you can view back on your browser (e.g. clicking a link to see the home page of a site).`,
            `POST. This method is used to send information to the server. A server may respond with an HTML page or redirect you to another page in the application after processing your data (e.g. filling out and submitting a sign-up form).
            Consider what happens when you visit google.com. Behind the scenes, you’re actually making a request to Google’s servers, which in turn sen
            ds a response back to you, rendering their famous “Google Search” landing page. This request–response relationship allows for a channel of
            communication between the user and the application. Notice in Figure 3 how a bundle of data is sent to the application’s serv
            er in the form of a request and, once the server processes the request, it issues a bundle of data back in the form of a response. 
            This is how most of your interactions on the internet are facilitated.`,
        ]
    },     {
        name: 'my-thoughts-on-resumes',
        title: 'My Thoughts on Resumes',
        content: [
            `Getting your resume to stand out without crossing the lines of professionalism can be a challenging task.  
            You need to include all the basics like summary, experience, and education, but you also need to go above and beyond 
            to make your resume stand out. Here are a few tricks that will get your resume noticed—in a good way—and get you one step 
            closer to landing your dream job.`,

            `1. Take time to customize`,  
            `Your resume needs to look professional, but that doesn’t mean it needs to be generic. 
            A sea of resumes with the same language, format, and skill sets start blending together. 
            If you take the time to customize your resume to specifically match the job description of the 
            position you are seeking, you’re going to make an immediate impact. For example, if the job listing mentions that 
            qualified candidates will need to be able to devise innovative customer marketing strategies, explicitly list that 
            as one of your skills (if it’s true, of course). Better yet, give an example of how you’ve achieved that goal. 
            This will help the hiring manager see you as a good fit for the position. It may be a little more time consuming to 
            customize your resume in this manner, but it’s worth it.`,

            `2. Demonstrate growth`,
            `Employers aren’t just interested in what you’ve accomplished during your career—they also want to know how you’ve grown. 
            If your resume lists two or more jobs in a row in which you had the same title and responsibilities, 
            you might be giving the impression you’ve plateaued. Switching jobs without any type of promotion or 
            added responsibilities also begs the question as to why you bothered changing jobs at all. 
            Are you disloyal? Are you difficult to get along with? These are not the types of questions 
            you want your resume to evoke. Your resume should show that with each new job, you’ve gained more responsibilities, 
            developed new skills, and grown in wisdom, knowledge, and leadership.`,

            `3. Use powerful verbs and adjectives`,
            `It’s amazing how effective certain verbs or adjectives can be at intensifying the impact of a sentence.  
            Remember, the hiring manager is reading dozens—if not hundreds—of resumes. After a while, clichés like “strong leader,” 
            “team player,” and “hard worker” all start to blur. So instead of using the same old, tired descriptions, get a thesaurus ready, 
            and spice things up. Instead of writing “my leadership skills are excellent,” say, “I have sharpened my leadership style into a tool 
            of inspiration.” Not only will the switch from passive to active voice win you points, but the use of unexpected verbs and 
            adjectives will also give you a noteworthy edge.`,

            `4. Integrate numbers and statistics`,
            `Another way to avoid falling into the trap of insignificance is to back up your claims with hard evidence.  
            Don’t just say you were instrumental in helping the company grow—give specific details such as how profits 
            rose 8 percent in your first year or how you and your team landed a $3 million account. If you’re unsure of what 
            the exact numbers are, do some subtle research. Having the numbers to back up the words can go a long way in 
            making your resume stand out from the pack.`,

            `5. Try a narrative resume`,
            `Narrative resumes provide a means of framing your experience and qualifications in the form of a story.  
            Instead of just listing the essentials, you transform them into traditional story elements like characters, plot, setting, and theme. 
            While not all potential employers will be impressed with this unique approach, those who “get it” will be anxious to set up an interview and 
            learn more—especially if you leave them with a cliffhanger.`,

            `Ultimately, if you want your resume to jump out at the hiring manager, you’re going to have to put in some extra thought and effort. 
            You cannot expect your resume to grab the employer’s attention if it looks and reads like everyone else’s. Try the tips discussed here, 
            and you’ll increase your chances of moving on to the next step: the coveted interview!`,
        ]
    },  
];

export default articles;