---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'processing.nvim'
description: 'A lightweight Neovim plugin that provides Processing support.'
pubDate: 2025-12-10
tags: ["lua", "processing", "neovim-plugin", "nix", "ci-cd"]
---

## processing.nvim

processing.nvim was born out of necessity: there was no reliable way to run and
navigate Processing sketches in Neovim, so I built a plugin to fill that gap.
It brings the full Processing experience into your editor, letting you write,
run, and explore sketches effortlessly. Features include instant sketch
execution, ctags-based symbol navigation, and optional LSP and Treesitter
support for smarter editing.

### Links

[Github](https://github.com/sophieforrest/processing.nvim)  
[LuaRocks](https://luarocks.org/modules/sophieforrest/processing.nvim)


### Challenges

Getting Processing to work in Neovim, handling platform quirks, making
`:make` and ctags reliable, and supporting optional LSP and Treesitter
without complexity.

### Learning

Building Vim plugins from scratch, setting up automated releases with LuaRocks,
integrating CI/CD with GitHub Actions.

