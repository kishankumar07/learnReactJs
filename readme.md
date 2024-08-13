    npx create-react-app my-app  ->   if via npx

    npm init react-app my-app    ->  if via npm 

    example :
    npm init react-app customizing-example this worked

- Babel is a javascript compiler | It transpile JSX code into plain javaScript code.( which browser can understand); | So even  browser don't know React.js only this transpiler help this |

Why use the className attribute in the JSX syntax?

While regular HTML does indeed have a class attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. The reason is that JSX is a special kind of JavaScript syntax, and the word class is a reserved keyword in JSX. That's why the React team had to make a compromise and so className is used in JSX to list one or more CSS classes to be used on a given element or component.


        function ParentComponent(){      -> this is parent component
            return(
                <div className='Parent'>
                    <h1>Hello world</h1>
                    < ChildComponent />     -> This is child component
                </div>
            )
        }