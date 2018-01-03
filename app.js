$(document).ready(function(){
  
 
  
  var quotes;
  var authors;
   getQuote();
  

  function getQuote(){
    
   /*var q=["Hello HTML","Hello CSS","Hello Javascript"];
    var a=["-Sajan","-Sajan1","-Sajan2"];
    randomnum=Math.floor((Math.random()*q.length));
    quotes=q[randomnum];
    authors=a[randomnum];
  
    $(".quote").text("'"+quotes+"'");
    $(".author").text(authors);*/
    var link="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(link,function(data){
    
      quotes=data.quoteText;
      authors=data.quoteAuthor;
      $(".quote").html("'"+data.quoteText+"'");
      $(".author").html("-"+data.quoteAuthor);
      
      });
   
    
  }
      $(".btn").on("click",function(){
    
         getQuote();
      });
      $("#tweetout").on("click",function(){
        
        window.open("https://twitter.com/intent/tweet/?text="+"'"+quotes+"'"+"-"+authors);
     
      });
  });
