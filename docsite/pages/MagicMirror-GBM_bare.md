---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: MagicMirror-GBM

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 1

# Let exclude the page from the navbar
nav_exclude: false

# If this page represents the parent page of a section that, therefore, has children, specify it in the following way
has_children: true

# If this page represents the child page of a section that, therefore, has ONE parent page, specify it in the following way
# # parent: Projects

# If this page is a parent page, a Table Of Contents will be automatically generated containing all related child pages. Use the option below to disable this functionality.
has_toc: false

# If a child page has more children, add again
has_children: true

# To the children page(s) add
parent: Projects
grand_parent: Index

# Let exclude the page from the search engine (client-side)
search_exclude: false

# Bare: redirect page
redirect_to:
    - /pages/Projects#magicmirror-gbm
---

<!-- Bare Page -->
