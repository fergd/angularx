# angularx
An angular exercise. This readme contains my notes and observations for setting up and developing an Angular app.

# Requirements
* Node
* Grunt

## Download
`git clone https://github.com/fergd/woa.git`

# Install
`npn install`

# View
* Navigate to cloned directory and run `grunt`
* Open your browser and point it to `localhost:8000`

## Process
Originally, I installed an Angular boilerplate to get the ball rolling: (angularjs-boilerplate)[https://github.com/jbutko/AngularJS-Boilerplate], however the included package.js file was calling some incompatible versions of modules. To not spin my wheels too much, I switched course and actually went with building the app as simply as possible: static html with an included Angular library. It's worth noting I also looked into doing this project with Meator + Angular as well. That's something I'd like to look in to for my own future projects. 

Given the short time span to whip this up, I cranked out a quick wireframe to set the direction. You can see it (here)[http://static.christanfergus.com/images/angularx-wireframes.png]. As you can see, I didn't flesh out the form as I had originally intended. 

I kept the UI fairly simple. I decided to let the theme do most of the talking. I used a small CSS animation to give the added resources a little satisfactory 'bump' as they are loaded up. To keep the UI fairly uncluttered, I hid the form to only display when the add button is chosen. This also got me around having to write up any routing in Angular. 

Working with Angular was definitely the biggest challenge of this project. My target was 8 hours, so having never worked with Angular, I knew I was in for an uphill battle. There are a myriad of things I still would like to do. It's obvious, but the big requirement miss was being able to edit the existing resources. I did manage to get the adding and removing down, however, and am pleased with that. There are some other sprinkles of Angular functionality throughout, such as the show/hide directives and the resource counter. 