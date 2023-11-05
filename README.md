# Mobile-Custom-Web-Navigation

This is a custom web navigation bar for a Mobile website

Getting Started:

Change href attributes in html to destination of anchor tag


For desktop version go to: https://github.com/finlayfoulds/Desktop-Custom-Web-Navigation.git


Adding or Removing Clickables:

To add clickables copy and paste other ones and substitute in href attribute values and the svg icons inside. Make sure they keep the class clickable or the JavaScript will not work

Each clickable is by default 70px and their ancestor (the #navigation-control-container) is 280px in min-width (line 14 of styles.css) which will need to be increased or decreased relative to the amount of clickables removed or added. (70px per clickable) 