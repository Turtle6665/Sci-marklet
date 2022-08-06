javascript:
  function output(text){
  document.head.insertAdjacentHTML("beforeend", "<style id='snackStyle'> \
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
      </style>");
      document.body.insertAdjacentHTML("afterbegin",  '<div  id="snackbar">'+text+'</div>');
      var  x  =  document.getElementById("snackbar");
      x.className  =  "show";
      setTimeout(function(){
          x.className  =  x.className.replace("show",  "");
          x.remove();
          document.getElementById("snackStyle").remove();
      },  3000);
    };
    function  liveSearch()  {      let  cards  =  document.querySelectorAll('a');
      let  search_query  =  "doi.org/";
      let  count  =  0;
      for  (var  i  =  0;  i  <  cards.length;  i++)  {
          if(cards[i].href.toLowerCase()
              .includes(search_query.toLowerCase()))  {
                  cards[i].href  =  cards[i].href.replace(search_query,  "sci-hub.ru/");
          }else{
              count+=1;
          };
      };
      if(count  ==  cards.length){
          output("No  DOI  found");
      }else  {
          count  =  cards.length-count;
          output("Changed  "  +count  +"  URLs");
      };
  };
  liveSearch()

