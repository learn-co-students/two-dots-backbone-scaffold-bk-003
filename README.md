# Two Dots

![two dots picture](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js/two-dots.png)

## Objective

Your task is to make a functioning version of the popular iPhone/Android app [Two Dots](https://apps.facebook.com/twodotsweb/) on Backbone.

Dots of the same color that are in the same row or the same column should be able to be connected by clicking down on one, dragging the mouse over to the next one, and unclicking the mouse.

[Here's](https://youtu.be/vgG223cMmE4?t=1m3s) a video of a player going through the first few levels of Two Dots. It might even be worth it to download the app (it's free!) and play a few rounds just so know know what you're trying to build.

## Getting Started

jQuery, Underscore, Backbone, Bootstrap, and Font-Awesome have already been included. You'll be writing code in the `public/javascripts/` folder. Remember to include your JavaScripts in `index.html` on line 46+ to load them. It's usually best to load your models, then your views, then your app.

Think about the challenge. What views will you need? What models should you have?

There are a ton of approaches and they're all equally valid, so just consider how you are going to tackle the problem and go for it!

Your JavaScript should replace the HTML in the div with the id of "board" with columns of dots.

## HTML and CSS

Open `example.html` in your browser and inspect the elements while reading along with the text on the page.

## Bonus

* Make it possible for players to backtrack their steps or "undo" their play. 
* When a user makes a square, or any shape that connects back on itself, delete all dots of the color of the shape. For instance, red square deletes all the red from the board and no red dots exist after making it for the next "round".
