# Sci-marklet
Sci-marklets is Bookmarklets to change all the DOI links into scihub links. It performs it totally locally and if you refresh the page, the URLs are back to normal.

## How to install ?
The “installation” of the bookmarklet is performed by creating a new bookmark, and pasting the code from the [sci-marklet.js](sci-marklet.js) file into the URL destination field.

On chromium based browser, you may need to manually add the "javascript:" in front of the url.

## How to use ?
When you are on a page with a DOI, just click on the bookmark and it automaticaly changes the url. <br/>

<a href="javascript:
  function output(text){
    document.head.insertAdjacentHTML(&quot;beforeend&quot;, &quot;<style id='snackStyle'> \
        /*snackbar layout code from https://www.w3schools.com/howto/howto_js_snackbar.asp*/ \
        #snackbar  {\
              visibility:  hidden;   /*  Hidden  by  default.  Visible  on  click  */\
              min-width:  250px;   /*  Set  a  default  minimum  width  */\
              margin-left:  -125px;  /*  Divide  value  of  min-width  by  2  */\
              background-color:  #333;  /*  Black  background  color  */\
              color:  #fff;  /*  White  text  color  */\
              text-align:  center;  /*  Centered  text  */\
              border-radius:  2px;  /*  Rounded  borders  */\
              padding:  16px;  /*  Padding  */\
              position:  fixed;  /*  Sit  on  top  of  the  screen  */\
              z-index:  1;  /*  Add  a  z-index  if  needed  */\
              left:  50%;  /*  Center  the  snackbar  */\
              bottom:  30px;  /*  30px  from  the  bottom  */\
          }  \
          /*  Show  the  snackbar  when  clicking  on  a  button  (class  added  with  JavaScript)  */  \
          #snackbar.show  {\
              visibility:  visible;  /*  Show  the  snackbar  */  \
              /*  Add  animation:  Take  0.5  seconds  to  fade  in  and  out  the  snackbar.\
              However,  delay  the  fade  out  process  for  2.5  seconds  */\
              -webkit-animation:  fadein  0.5s,  fadeout  0.5s  2.5s;\
              animation:  fadein  0.5s,  fadeout  0.5s  2.5s;\
          }\
          /*  Animations  to  fade  the  snackbar  in  and  out  */\
          @-webkit-keyframes  fadein  {\
              from  {bottom:  0;  opacity:  0;}\
              to  {bottom:  30px;  opacity:  1;}\
          }\
          @keyframes  fadein  {\
              from  {bottom:  0;  opacity:  0;}\
              to  {bottom:  30px;  opacity:  1;}\
          }\
          @-webkit-keyframes  fadeout  {\
              from  {bottom:  30px;  opacity:  1;}\
              to  {bottom:  0;  opacity:  0;}\
          }\
          @keyframes  fadeout  {\
              from  {bottom:  30px;  opacity:  1;}\
              to  {bottom:  0;  opacity:  0;}\
          }\
          </style>&quot;);
      document.body.insertAdjacentHTML(&quot;afterbegin&quot;,  '<div  id=&quot;snackbar&quot;>'+text+'</div>');
      var  x  =  document.getElementById(&quot;snackbar&quot;);
      x.className  =  &quot;show&quot;;
      setTimeout(function(){
          x.className  =  x.className.replace(&quot;show&quot;,  &quot;&quot;);
          x.remove();
          document.getElementById(&quot;snackStyle&quot;).remove();
      },  3000);
    };
    function  liveSearch()  {      let  cards  =  document.querySelectorAll('a');
      let  search_query  =  &quot;doi.org/&quot;;
      let  count  =  0;
      for  (var  i  =  0;  i  <  cards.length;  i++)  {
          if(cards[i].href.toLowerCase()
              .includes(search_query.toLowerCase()))  {
                  cards[i].href  =  cards[i].href.replace(search_query,  &quot;sci-hub.ru/&quot;);
          }else{
              count+=1;
          };
      };
      if(count  ==  cards.length){
          output(&quot;No  DOI  found&quot;);
      }else  {
          count  =  cards.length-count;
          output(&quot;Changed  &quot;  +count  +&quot;  URLs&quot;);
      };
  };
  liveSearch()">
  Test Me</a>
