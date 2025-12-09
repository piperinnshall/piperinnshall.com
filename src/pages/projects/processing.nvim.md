---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'processing.nvim'
description: 'A lightweight Neovim plugin that provides Processing support.'
pubDate: 2025-12-10
tags: ["lua", "processing", "neovim", "neovim-plugin", "nix", "ci-cd", "open-source", "collaboration"]
---

## processing.nvim

processing.nvim was born out of necessity: there was no reliable way to run and
navigate Processing sketches in Neovim, so we
([@sophieforrest](https://github.com/sophieforrest) and
[@piperinnshall](https://github.com/piperinnshall)) built a plugin to fill that
gap. It brings the full Processing experience into your editor, letting you
write and run sketches easily. Features include instant sketch execution,
ctags-based symbol navigation, and optional LSP and Treesitter support for
smarter editing.

### Status

- Actively maintained on
  [GitHub](https://github.com/sophieforrest/processing.nvim)  | v1.1.1
- **95+** downloads on
[LuaRocks](https://luarocks.org/modules/sophieforrest/processing.nvim)
- Featured on 
[lazy.nvim](https://github.com/folke/lazy.nvim/tree/main), the **19.6k⭐** plugin manager


### Challenges

Getting Processing LSP to work in Neovim, handling cross platform issues across
macos and linux, making `:make` and ctags reliable, supporting Treesitter
syntax highlighting without end user complexity.

### Learning

Built a neovim plugin from scratch. Gained a hands-on experience with Neovim’s
Lua API and plugin architecture. Set up automated releases with LuaRocks.
Integrated CI/CD with GitHub Actions. Gained experience in collaborative
open-source development, including pull requests, code reviews, and
documentation. Improved understanding of Neovim standards, plugin namespaces,
and healthchecks, learning best practices in plugin development.

