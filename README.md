# dictEdit
A simple JS based key-value editor to &lt;textarea>


## Usage
Can be used on any text area.
```
    dictedit.init(id-of-text-area, options, initValue);
```

###Example 1
*Markup
```
  <textarea id='theTA'> </textarea>
```
*Javascript
```
    dictedit.init("theTA");
```

###Example 2: custom delimiters

*Markup
```
  <textarea id='theTAHTMLattr'> </textarea>
```
*Javascript
```
    dictedit.init("theTAHTMLattr");
```

## Get Value
```
    dictedit.value("theTAHTMLattr");
```


###Example 3: custom values

