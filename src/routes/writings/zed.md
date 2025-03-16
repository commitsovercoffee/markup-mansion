---
layout: default
title: Neovim to Zed
desc: I changed my text editor. Here's how it went.
date: 2025-03-14
tags:
  - workflow
published: true
---

> "I will take neovim to my grave" - me (probably sometime in the past)

Yes. That's how much I've loved [neovim](https://neovim.io/). Which I have been daily
driving for the past 5 years. But I have finally decided to switch to [zed](https://zed.dev/)
and hence this blog, where I'll share more about this transition.

## My Ideal Text Editor

While some people couldn't care less, others can go to war defending their editor.
I fall somewhere in the middle where I care about my text editor only as a means to an end.
Above all, It should help me get the job done, and not come in the way.

- It should start instantly, I should not have to wait for it to load.
- It should be responsive and not interrupt my editing flow.
- It should be customizable so I can personalize it to my liking.

For a very long time, neovim has aced above requirements without any competition,
at the cost of initial learning curve to configure it. But once you're past that
it's a breeze to edit config or add new plugins.

No other editor was even in the running for this. Even VS Code, despite being the
dominant IDE out there, is too slow to even be considered. I guess there is reason
why neovim is the most admired edtior.

> Visual Studio Code is the most-desired (and used) IDE tool (59%) for developers
> but the most-admired is Neovim (83%). - StackOverFlow Survey 2024

## First Impressions

I had tried building zed from source before when it was not officially available
for linux, but didn't have a great experience. But now that it has been available
for linux for a while, I decided to give it a shot and was delighted to see it
available in the official arch repository.

So I quickly installed it, and opened the [source of this website](https://github.com/commitsovercoffee/markup-mansion)
in zed. To my surprise, I was able to be productive straight out of the box. So
I thought it'd be fun to migrate [my neovim config](https://github.com/commitsovercoffee/hope/blob/main/.config/init.lua)
to zed and see how close it can get to my neovim experience, 2 hours later, I had
played enough with zed settings & keymaps and changed them as per my liking.

What I really liked :

1. The raw speed of the editor. It's fast as fuck, no matter what you do with it.
2. The devs have done a phenomenal job with the documentation.
3. The settings & keymaps have auto-complete which makes setting things up a breeze.
4. The editor comes with all [bells & whistles](https://zed.dev/features) that you'd expect from a modern editor.
5. It has a rolling release, so new features keep coming every week.

What I missed from neovim :

1. The [oil plugin](https://github.com/stevearc/oil.nvim) which lets you edit your filesystem like a buffer. It is not available on zed.

Yep, just that one plugin. But that's a nitpick right?

## Zeditor Time

I’m eager to dive deeper into Zed for all the features I’ve mentioned above.
There are also some features I haven’t explored yet, like collaboration
tools and AI assist, that could become game-changers in the future.

Besides my first impressions, what really stands out to me, is the [team behind
it](https://zed.dev/team), these are the folks who built Atom, Electron, and
Tree-sitter, so they clearly know their stuff. That track record gives me a lot
of confidence in Zed.

Hence, I’ve decided to give Zed a spin and see how it holds up in my day-to-day
development tasks. It promises to be a great alternative, and I’m curious to explore
its capabilities further.

## Zed : Quick Start

If you're just getting started with zed, you may find the below guide helpful.

### Install Zed

- You can download zed from [here](https://zed.dev/download) or use your distro's
  package manager. If you use a package manager, you'll need to use it to install
  updates to zed.

```bash
sudo pacman -S zed
```

- After the installation, it will ask you to set a theme & choose a keymap preset
  from vs-code, jetbrains, sublime etc. Post that, you can explore around.

### Set Key Bindings

The command palette is the spotlight in zed. You can search for any commands here
and execute them to see what they do.

#### Step 1 : Run Commands from Command Palette

Open command palette with `ctrl+shift+p`. This will open up a search interface
with some commands and auto-complete. These commands are how zed does any and
everything, from moving your cursor one line down when you hit `down` or
saving your buffer when you hit `ctrl-s`.

The brilliance is in how these commands are neatly organized, making it intuitive
to figure out where each option belongs and how to use them.

For example :

If I run the command `workspace:new terminal` from the command palette. It will
open up a new terminal instance, which you will see popping up at the bottom
of your screen.

Similarly, running `editor:toggle comments` will convert the current line under
your cursor into a comment in your buffer.

#### Step 2 : Write keymaps !

You can open your keymap stored at `~/.config/zed/keymap.json` using the
`zed:open keymap` command. Which will probably be empty for a fresh zed install.

Each keymap requires a _context_, followed by a _bindings_ object which contains
_keymaps_ and _commands_ as key value pairs, as shown below.

```json
[
	{
		"context": "ProjectPanel",
		"bindings": {
			"space e e": "workspace::ToggleLeftDock"
		}
	},
	{
		"context": "Workspace",
		"bindings": {
			"ctrl-n": "workspace::NewFile",
			"space e e": "project_panel::ToggleFocus",
			"space f f": "file_finder::Toggle",
			"space t t": "workspace::ToggleBottomDock",
			"space r r ": ["projects::OpenRecent", { "create_new_window": true }],
			"space q q": "pane::CloseActiveItem"
		}
	},
	{
		"context": "Editor && VimControl && !VimWaiting && !menu",
		"bindings": {
			"space e e": "pane::RevealInProjectPanel",
			"space o o": "outline::Toggle",
			"space d f": "editor::Hover",
			"space r n": "editor::Rename",
			"space / /": "editor::ToggleComments",
			"space v": "editor::GoToDefinitionSplit"
		}
	},
	{
		"context": "Terminal",
		"bindings": {
			"ctrl-n": "workspace::NewTerminal"
		}
	}
]
```

The _context_ refers to the environment in which the keybinding should be active.
Notice that the first binding in both the workspace and terminal contexts is the
same i.e `ctrl-n`. However, since the context differs, the same keybinding will
perform different actions in each: in the workspace, it creates a new file, while
in the terminal, it opens a new terminal instance.

Now that you have a sense of how keybindings work in zed, you can open the default
keymap using the `zed:open default keymap` for inspiration and write your own keymaps.

### Configure Settings

You can open your settings stored at `~/.config/zed/settings.json` using the `zed:open settings`
command. Or by hitting `ctrl-,`. The file will either be empty or may have a theme
specified if you selected one.

You can change your settings by specifying the desired options with a value as shown :

```json
{
	//  appearance
	"theme": "Catppuccin Mocha - No Italics",
	"tabs": {
		// Show git status colors in the editor tabs.
		"git_status": true,
		// Whether to show the file icon for a tab.
		"file_icons": true
	},
	"cursor_blink": false,
	"scrollbar": {
		"show": "always"
	},

	// editor mode
	"vim_mode": true,
	"vim": {
		"toggle_relative_line_numbers": false,
		"use_system_clipboard": "always",
		"use_multiline_find": false,
		"use_smartcase_find": true
	},
	"git": {
		"git_gutter": "tracked_files",
		"inline_blame": {
			"enabled": true
		}
	},

	// session management
	"restore_on_startup": "last_session",
	"confirm_quit": true,

	// visual features
	"wrap_guides": [80],
	"current_line_highlight": "all",
	"selection_highlight": true,

	// auto-complete
	"use_autoclose": true,
	"show_edit_predictions": true,
	"show_completions_on_input": true,
	"show_completion_documentation": true,

	// hints
	"inlay_hints": {
		"enabled": true,
		"show_type_hints": true,
		"show_parameter_hints": true,
		"show_other_hints": true
	},

	// search
	"search_wrap": false,
	"use_smartcase_search": true,

	// background goodies
	"auto_indent_on_paste": true,
	"remove_trailing_whitespace_on_save": true,
	"format_on_save": "on",
	"auto_update": false, // on linux, the package manager governs this.

	// edit assist
	"features": {
		"edit_prediction_provider": "none"
	},
	"assistant": {
		"version": "2",
		"enabled": false
	},

	// telemetry
	"telemetry": {
		// Send debug info like crash reports.
		"diagnostics": true,
		// Send anonymized usage data like what languages you're using Zed with.
		"metrics": true
	},

	// extensions
	"auto_install_extensions": {
		"catppuccin": true,
		"basher": true,
		"html": true,
		"svelte": true,
		"make": true,
		"log": true,
		"csv": true,
		"sql": true,
		"snippets": true
	},

	// language specific
	"languages": {}
}
```

How will you know about all the options? You can refer to the default settings
using the `zed:open default settings` and pick your poison.

## Closing

Let's see how zed serves me. And I'll update the blog accordingly in near future.
