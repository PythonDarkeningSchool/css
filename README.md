# Tools

### Brackets

[Download here](<http://brackets.io/>)

# CSS file

## Rules

![rules](images/rules.JPG)

## Specificity

Example:

![specificity_1](images/specificity_1.JPG)

The rules are:

![specificity_rules](images/specificity_rules.JPG)

And the winner is:

![specificity_2](images/specificity_2.JPG)

## Selectors



```css
h1 {
    font-size: 10px;
}
```

```css
p {
  font-size: 20px;
}
```

```css
h1, h2 {
    background-color: red;
}
```

```css
#division-id {
    
}
```

```
.class-name {
    
}
```

## Other selectors

### Descendant selector

e.g: *anything paragraph inside a division*



![descendant_selector](images/descendant_selector.JPG)

### Child selector

e.g: *only selectors directly after the division*

![child_selector](images/child_selector.JPG)

### Attribute selector

e.g: *find all images with the attribute alt=spacer and set the padding to Xpx*

![images_selector](images/images_selector.JPG)

### Pseudo class

![pseudo_class](images/pseudo_class.JPG)

# CSS and the box model

## The big Three

![box_model](images/box_model.JPG)

## Top, Right, Button, Left

Example:

```css
ul li {
    margin: 0 3px 0 3px;
}
```

respectively are: top. right, button and left