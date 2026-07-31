# COFB More Than Food Web Page

---

# File Structure

```
content/
│
├── mtf-resources.html    # Community resources page
├── mtf-events.html       # Events page
├── mtf-recipes.html      # Recipe page
├── mtf-global.css        # Shared styling for all pages
└── mtf.js                # JavaScript (to remove the WordPress title from the mtf-resources page)
```

---

# Editing Content Generally

All editable sections are marked with HTML comments.

Search for the comment matching what you want to edit and follow the directives.

---

## Editing a Category in mtf-resources.html (Resources Page)

1. Locate the category by name.

2. Edit the category title.

3. Edit the category description if applicable.

4. Leave the category ID unchanged unless you are also updating the navigation links.

---

## Adding a Category in mtf-resources.html (Resources Page)

1. Copy an entire existing category OR the commented out example category.

2. Paste it below the last entered category.

3. Change:
   - Category title
   - Description
   - ID
   - Navigation link

4. Ensure the new ID matches the navigation button (i.e., href="#YOUR-UNIQUE-NAME-HERE" AND id="YOUR-UNIQUE-NAME-HERE" - They MUST match).

Example:

```html
href="#housing"
```

must match

```html
id="housing"
```

---

## Editing a Resource

Locate:

```html
<!-- RESOURCE START -->
```

Update the following information:

- Resource Name
- Description
- Contact Information
- Address/Location
- Website
- Hours (if applicable)

---

## Adding a Resource

1. Copy an existing resource block or the commented out example resource.

2. Paste it underneath another resource in the same category.

3. Replace the placeholder information.

Do **not** remove any surrounding `<div>` elements.

---

# Editing Navigation (```<li> </li>``` for mtf-resources.html)

Navigation links are located near the top of each page.

If adding a new category:

1. Copy an existing navigation button.

2. Update the displayed text.

3. Update its destination to match the new category ID.
   
---

# Events

`mtf-events.html`

Each event card contains:

- Event title
- Description
- Date
- Time
- Location

Duplicate an existing event to add another.

---

# Recipes

`mtf-recipes.html`

Each recipe contains:

- Recipe name
- Description
- Ingredients
- Instructions
- Image (src="thisimage.png" is the link/source of the image)
- Optional notes

Duplicate an existing recipe card to add another.

---

# Styling

Shared styling is located in:

```
mtf-global.css
```

This file controls:

- Colours
- Buttons
- Layout
- Animations

Avoid editing individual inline styles unless necessary (use Claude Code if unsure).

---

# Publishing Changes

1. Edit the appropriate file in GitHub (click on the .html file and press the '.' key on your keyboard to bring up the editor).
4. Commit your changes.
5. Push (i.e., Save) to GitHub.
