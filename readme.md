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

# Default export and named export

# Default export:
1) When need to export a single value or a module from a file.
2) Key feature : does not require any specific name during an import, any name can be given

File:'math.js'

                export default function add(a,b){
                    return a+b;
                }
File:'app.js'

                import sum from './math'
                console.log(sum(3,3));// gives output as 6;
        
3) So in the above case, instead of 'add', sum was given as name while importing at app.js

# Named export
1) when multiple values or modules to export from a file.
2) Have to be imported with the exact name, as how they are exported and {} needed while import.

File:'math.js'

                export function add(a,b){
                    return a+b;
                }

        
                export function subtract(a,b){
                    return a-b;
                }
File:'app.js'


                import {add,subtract} from 'math'
                console.log(add(3,3));
                console.log(subtract(4,5));

# Combination of both
File:'math.js'

                export default function multiple(a,b){
                    return a * b;
                }
                
                export function add(a,b){
                    return a+b;
                }
                
                export function subtract(a,b){
                    return a-b;
                }
File: 'app.js'      

                import multi,{add,subtract} from 'math'

                console.log(multi(3,3));
                console.log(add(4,6));
                console.log(subtract(3,2));

- So multiply is the default export and can be imported with any name without any curly braces but 'add' and 'subtract' are named export and must be imported with exact name and {} needed.
- So the peculiarity with default export is that , only one from a file can be exported as default
- Named can be exported as many as it can, but during import that exact name should be the one and {} needed. 



















        
