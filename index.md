---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: Index

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 1

# Let exclude the page from the navbar
nav_exclude: false

# If this page represents the parent page of a section that, therefore, has children, specify it in the following way
has_children: true

# If this page represents the child page of a section that, therefore, has ONE parent page, specify it in the following way
# # parent: Namespace

# If this page is a parent page, a Table Of Contents will be automatically generated containing all related child pages. Use the option below to disable this functionality.
has_toc: false

# If a child page has more children, add again
# # has_children: true

# To the children page(s) add
# # parent: NOME_PAGINA_GENITORE
# # grand_parent: NOME_PAGINA_NONNO__GENITORE_DEL_GENITORE

# Let exclude the page from the search engine (client-side)
search_exclude: false
---

# Index
{: .no_toc }
<!-- Do not add to the table of contents -->

---

<!-- Table of contents -->
<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Projects

Completa lista dei progetti pubblici.

[Vai alla risorsa](pages/Projects){: .btn }

---

## grn::deploy::webstatic

{: .motto-title }
> <p class="blockquote-title-fixer-purple">tl;dr</p>
>
> Motore semplice ed intuitivo di deploy di siti web statici.

[Vai alla risorsa](pages/grn-deploy-webstatic){: .btn }

---

## Legenda delle labels

Tutte le pagine web sotto il dominio `andreagrandieri.github.io` seguono una precisa legenda per l'uso delle __labels__.

Un esempio di label:
{: .d-inline-block }

<div id="label-1"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-1");
</script>

[Vai alla risorsa](pages/Legenda-labels){: .btn }

---

## Versioning

Protocollo di versioning adottato dalle repository sotto il dominio `andreagrandieri.github.io`.

[Vai alla risorsa](pages/Versioning){: .btn }