import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './../src/hungrybear.js';


$(document).ready(function(){
  $("#feed").click(function(){
    let newBear = new HungryBear();
    $("ul").append("<li>You fed the bear!</li>");

    newBear.setHunger();
    newBear.didYouGetEaten();
    newBear.feed();


  });
});
