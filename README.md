# OJT 
## React Testing and Debugging
### INTRODUCTION
01. Testing and Debugging Your React Apps
02. Course Prerequesites

### 1. SETTING UP
03. Your Test Project
04. An Overview of Your Toolset
05. React Developer Tools
06. Jest Introduction
07. Type Checking With Flow
08. Linting With ESLint

### 2. TESTING WITH JEST
09. Test Numbers With Matchers
10. Test String With Matchers
11. Test Arrays and Objects With Matchers
12. Snapshot Testing With Jest

    To make snapshot of certain test target, any future change in code will be notified, press 'u' if want to updated the snapshot.

13. Organize Your Test With Describe

    Just organize inside code, nothing change in terminal. Unlike mocha.

14. Code Coverage reports 

    Provide more complex results for performance optimazation. Currently can't interpret it hehe

### 3. DEBUGGING WITH CHROME AND EXTENSIONS
15. Debug With Chrome Introduction
16. Debug With React DevTools

    Component & Profiler.
    Component => click component to see its props, state, render, source. And go to console while choosing either component and type $r. and choose what methods you want to inspect.

    Profiler => record and reload or interact with app, you can saw its render performances per/ms

17. Test Your Network and Performance

    Network for manipulate and inspect loading time.
    Performance just like Profiler but seems more complex.

18. Run a Audit in Chrome

    F12 => Lighthouse => generate audit for mobile or desktop webapp performances

19. Debug Resources To Find Answers

    1. google.com => google it
    2. stackoverflow.com => search n ask
    3. reactiflux.com => community
    4. reactjs.org => issues


### 4. ESLINT AND TYPES
20. Code Improvement With ESLint

    linter for industries standard.
    1. open terminal => problems tag => choose problem to inspect, if bulp sign available, right-click and choose fix all.

    2. inside file => hover mouse on underlined code, press ctrl+. and fix if possible or search for documentations option.

    3. if can't be fixed, just disabled it for certain line or entire file.

21. Type Checking With Flow

    npm i --save-dev flow-bin 
    open package, add flow: flow to script 
    npm run flow init 
    add comment //@flow on top of every file target 
    add create type standarization
    npm run flow

    clash with eslint and become unsolvable?

### CONCLUSION
22. Next Steps