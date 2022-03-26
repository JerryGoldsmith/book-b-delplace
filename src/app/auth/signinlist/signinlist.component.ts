import { Component, OnInit } from '@angular/core';
// custom validator to validate password and confirm password fields match
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-signinlist',
  templateUrl: './signinlist.component.html',
  styleUrls: ['./signinlist.component.scss',
  '../../../assets/css/baseline-scroll/baseline-scroll-A.css',
  '../../../assets/css/baseline-scroll/baseline-scroll-B.css',
  '../../../assets/css/baseline-scroll/baseline-scroll-C.css']
})
export class SigninlistComponent implements OnInit {

  width: 0;
  height: 0;

  isAuth: boolean;

  onResized(event: ResizedEvent) {
    //@ts-ignore
    this.width = event.newWidth;
    //@ts-ignore
    this.height = event.newHeight;
  }

  constructor(
      ) { }

  ngOnInit(): void {

    function showBaselineA(el: string) {
      var windowHeight = jQuery( window ).height();
      $(el).each(function(){
          var position = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > position ) {
              $(this).addClass("fadeIn");
          }
      });
    }

    $(window).on('scroll', function () {
      showBaselineA('.baseline-A');
    });

    // -------

    function showBaselineB(el: string) {
      var windowHeight = jQuery( window ).height();
      $(el).each(function(){
          var position = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > position ) {
              $(this).addClass("fadeIn");
          }
      });
    }

    $(window).on('scroll', function () {
      showBaselineB('.baseline-B');
    });

    // --------

    function showBaselineC(el: string) {
      var windowHeight = jQuery( window ).height();
      $(el).each(function(){
          var position = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (topOfWindow + windowHeight - 200 > position ) {
              $(this).addClass("fadeIn");
          }
      });
    }

    $(window).on('scroll', function () {
      showBaselineC('.baseline-C');
    });
  }

}
