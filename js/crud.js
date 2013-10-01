/*!

# CRUD jQuery Plugin
  CRUD by Local Storage and JSON

  CDN: `https://syuemingfang-crud.googlecode.com/git/js/crud.js`

  [GitHub project](https://github.com/syuemingfang/syuemingfang-crud) [Documentation](http://comment.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfang-crud/master/comment.json)

****************************************************************************************************/

/*!

+ Version: 0.1.0.0
+ Copyright © 2013 [Syue](mailto:syuemingfang@gmail.com). All rights reserved.
+ Date: *Tue Oct 01 2013 14:37:22 GMT+0800 (Central Standard Time)*

## Examples
 1. **Standard** [Power by Cinderella](http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfang-crud/master/example.html)
 2. **Debug** [Power by jsPipe](http://jspipe.cxm.tw/?url=http://html.cxm.tw/index.php?url=https://raw.github.com/syuemingfang/syuemingfang-crud/master/example.html)

## How to Use
 1. **Setup** include this javascript files in your header.
  + **jQuery**
   `<script src='http://code.jquery.com/jquery-1.8.3.min.js'></script>`
  + **This Plguin**
   `<script src='https://syuemingfang-crud.googlecode.com/git/js/crud.js'></script>`
 2. **Usage**
  + **Format**  This Plugin accepts settings from an object of key/value pairs.
   `$(selector).crud({key: value...})`
  + **Example**
     + `$.crud.read({name: 'test'})`
 3. **Set** copy code from the `<head>` and `</head>` tags and paste it on your page.

        <script>
        $(document).ready(function(){
          //Usage
        });
        </script>

****************************************************************************************************/

;(function($){
  $.extend({
    crud: {
      version: '0.1.0.2',
      //! 
      //!## API
      create: function(set){
      //!+ **create()**
      //! arguments: name, id, data, range
        if(set.range == 'all'){
          localStorage.setItem(set.name, JSON.stringify(set.data));
        } else{
          var item=JSON.parse(localStorage.getItem(set.name));
          if(item == null){
            var arr=[];
            arr.push(set.data);
            item=arr;
          } else{
            item.push(set.data);
          }
          localStorage.setItem(set.name, JSON.stringify(item));
        }
      },
      read: function(set){
      //!+ **read()**
      //! arguments: name
        var itme=JSON.parse(localStorage.getItem(set.name));
        return itme;
      },
      update: function(set){
      //!+ **update()**
      //! arguments: name, key, val, data
        var itme=JSON.parse(localStorage.getItem(set.name));
        for(var i in itme){
          for(var j in itme[i]){
            if((j == set.key)&&(itme[i][j] == set.val)){
              itme[i]=set.data;
            }
          }
        }
        localStorage.setItem(set.name, JSON.stringify(itme));
      },
      delete: function(set){
      //!+ **read()**
      //! arguments: name, key, val, range
        if(set.range == 'all'){
          localStorage.setItem(set.name, []);
        } else{
          var itme=JSON.parse(localStorage.getItem(set.name));
          for(var i in itme){
            for(var j in itme[i]){
              if((j == set.key)&&(itme[i][j] == set.val)){
                itme.splice(i, 1);
              }
            }
          }
          localStorage.setItem(set.name, JSON.stringify(itme));
        }
      }
    }
  });
})(jQuery);