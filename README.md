# Sci-marklets
Sci-marklets is Bookmarklets to change all the DOI links into scihub links

## How to install ?
The “installation” of the bookmarklet is performed by creating a new bookmark, and pasting the code from the sci-marklets.js into the URL destination field.
(This works on Firefox)

## How to use ?
When you are on a page, just click on the bookmark.

## try here

<a href="javascript: function output(text){   document.head.insertAdjacentHTML("beforeend", "<style id='snackStyle'> \     /*snackbar layout code from https://www.w3schools.com/howto/howto_js_snackbar.asp*/ \     #snackbar%20{\%20%20%20%20%20%20%20visibility:%20hidden;%20/*%20Hidden%20by%20default.%20Visible%20on%20click%20*/\%20%20%20%20%20%20%20min-width:%20250px;%20/*%20Set%20a%20default%20minimum%20width%20*/\%20%20%20%20%20%20%20margin-left:%20-125px;%20/*%20Divide%20value%20of%20min-width%20by%202%20*/\%20%20%20%20%20%20%20background-color:%20#333;%20/*%20Black%20background%20color%20*/\%20%20%20%20%20%20%20color:%20#fff;%20/*%20White%20text%20color%20*/\%20%20%20%20%20%20%20text-align:%20center;%20/*%20Centered%20text%20*/\%20%20%20%20%20%20%20border-radius:%202px;%20/*%20Rounded%20borders%20*/\%20%20%20%20%20%20%20padding:%2016px;%20/*%20Padding%20*/\%20%20%20%20%20%20%20position:%20fixed;%20/*%20Sit%20on%20top%20of%20the%20screen%20*/\%20%20%20%20%20%20%20z-index:%201;%20/*%20Add%20a%20z-index%20if%20needed%20*/\%20%20%20%20%20%20%20left:%2050%;%20/*%20Center%20the%20snackbar%20*/\%20%20%20%20%20%20%20bottom:%2030px;%20/*%2030px%20from%20the%20bottom%20*/\%20%20%20%20%20}%20\%20%20%20%20%20/*%20Show%20the%20snackbar%20when%20clicking%20on%20a%20button%20(class%20added%20with%20JavaScript)%20*/%20\%20%20%20%20%20#snackbar.show%20{%20%20%20%20%20%20%20visibility:%20visible;%20/*%20Show%20the%20snackbar%20*/%20\%20%20%20%20%20%20%20/*%20Add%20animation:%20Take%200.5%20seconds%20to%20fade%20in%20and%20out%20the%20snackbar.\%20%20%20%20%20%20%20However,%20delay%20the%20fade%20out%20process%20for%202.5%20seconds%20*/\%20%20%20%20%20%20%20-webkit-animation:%20fadein%200.5s,%20fadeout%200.5s%202.5s;\%20%20%20%20%20%20%20animation:%20fadein%200.5s,%20fadeout%200.5s%202.5s;\%20%20%20%20%20}\%20%20%20%20%20/*%20Animations%20to%20fade%20the%20snackbar%20in%20and%20out%20*/\%20%20%20%20%20@-webkit-keyframes%20fadein%20{\%20%20%20%20%20%20%20from%20{bottom:%200;%20opacity:%200;}\%20%20%20%20%20%20%20to%20{bottom:%2030px;%20opacity:%201;}\%20%20%20%20%20}\%20%20%20%20%20@keyframes%20fadein%20{\%20%20%20%20%20%20%20from%20{bottom:%200;%20opacity:%200;}\%20%20%20%20%20%20%20to%20{bottom:%2030px;%20opacity:%201;}\%20%20%20%20%20}\%20%20%20%20%20@-webkit-keyframes%20fadeout%20{\%20%20%20%20%20%20%20from%20{bottom:%2030px;%20opacity:%201;}\%20%20%20%20%20%20%20to%20{bottom:%200;%20opacity:%200;}\%20%20%20%20%20}\%20%20%20%20%20@keyframes%20fadeout%20{\%20%20%20%20%20%20%20from%20{bottom:%2030px;%20opacity:%201;}\%20%20%20%20%20%20%20to%20{bottom:%200;%20opacity:%200;}\%20%20%20%20%20}\%20%20%20</style>");%20%20%20document.body.insertAdjacentHTML("afterbegin",%20'<div%20id="snackbar">'+text+'</div>');%20%20%20var%20x%20=%20document.getElementById("snackbar");%20%20%20x.className%20=%20"show";%20%20%20setTimeout(function(){%20%20%20%20%20%20x.className%20=%20x.className.replace("show",%20"");%20%20%20%20%20%20x.remove();%20%20%20%20%20document.getElementById("snackStyle").remove();%20%20%20},%203000);%20};%20%20function%20liveSearch()%20{%20%20%20let%20cards%20=%20document.querySelectorAll('a');%20%20%20let%20search_query%20=%20"doi.org/";%20%20%20let%20count%20=%200;%20%20%20for%20(var%20i%20=%200;%20i%20<%20cards.length;%20i++)%20{%20%20%20%20%20if(cards[i].href.toLowerCase()%20%20%20%20%20%20%20.includes(search_query.toLowerCase()))%20{%20%20%20%20%20%20%20%20%20cards[i].href%20=%20cards[i].href.replace(search_query,%20"sci-hub.ru/");%20%20%20%20%20}%20else{%20%20%20%20%20%20%20count+=1;%20%20%20%20%20};%20%20%20};%20%20%20if(count%20==%20cards.length){%20%20%20%20%20output("No%20DOI%20found");%20%20%20}else%20{%20%20%20%20%20count%20=%20cards.length-count;%20%20%20%20%20output("Changed%20"%20+count%20+"%20URLs");%20%20%20};%20};%20liveSearch()" target="_blank">link</a>
