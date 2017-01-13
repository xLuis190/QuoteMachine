var quote;
function generateQuote(){
   $.ajax({
     url:"http://api.forismatic.com/api/1.0/?",
     dataType:"jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(data){
      $("h1").html(data.quoteText);
      $("h3").html("~"+data.quoteAuthor)
      $("#tweetButton").attr("href","https://twitter.com/intent/tweet?text="+data.quoteText);
    }
  });

 }
 $(document).ready(function(){
   generateQuote();
   $("#buttonQuote").on('click',function(){
     generateQuote();
   })

 });
