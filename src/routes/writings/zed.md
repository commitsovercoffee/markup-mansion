---
layout: default
title: Neovim to Zed
desc: I changed my text editor. Here's how it went.
date: 0000-00-03
tags:
  - workflow
published: true
---

> “I will take neovim to my grave” - me (probably sometime in the past)

Yes. That’s how much I’ve loved [neovim](https://neovim.io/), which I have been daily driving for the
past 5 years. But I have finally decided to switch to [zed](https://zed.dev/) and hence this blog,
where I’ll share more about this transition.

## My Ideal Text Editor

While some people couldn’t care less, others can go to war defending their editor.
I fall somewhere in the middle where I care about my text editor only as a means
to an end. Above all, It should help me get the job done, and not come in the way.

- It should start instantly, I should not have to wait for it to load.
- It should be buttery smooth. No stutter, No delay ~ No breaking my flow.
- It should be customizable enough for me to build my own [PDE](https://www.youtube.com/watch?v=QMVIJhC9Veg).

For the longest time, Neovim absolutely nailed all of that. Sure, it came with a
steep learning curve at first. But once you get past that hump? It’s a breeze
to tweak configs, add plugins, or change things up. And contrary to popular belief,
you don't need to configure it often, once you have tweaked it to your liking it
kinda just works.

No other editor was even in the running for this. Even VS Code, despite being the
dominant IDE out there, is too slow to even be considered. I guess there is reason
why neovim is the [most admired edtior](https://survey.stackoverflow.co/2023/#section-admired-and-desired-integrated-development-environment).

So yeah, Neovim has been my go-to. Until one random day, I decided to try **Zed**.

## Zed : First Impressions.

I had tried building zed from source before when it was not officially available
for linux, but didn’t have a great experience. But now that it has been available
for linux for a while, I decided to give it a shot and was delighted to see it
available in the official arch repository.

So I quickly installed it, and opened the source of this website in zed. To my
surprise, I was able to be productive straight out of the box. I thought it’d
be fun to migrate my neovim config to zed and see how close it can get to my
neovim experience, 2 hours later, I had played enough with zed settings & keymaps
and changed them as per my liking.

What I really liked :

- The raw speed of the editor. It’s fast as fuck, no matter what you do with it.
- The devs have done a phenomenal job with the [documentation](https://zed.dev/docs/).
- The settings & keymaps have auto-complete which makes setting things up a breeze.
- The editor comes with all [bells & whistles](https://zed.dev/features) that you’d expect from a modern editor.
- It has a rolling release, so new features keep coming every week.

What I missed from neovim :

- The [oil plugin](https://github.com/stevearc/oil.nvim) which lets you edit your
  filesystem like a buffer. It is not available on zed.

Yep, just that one plugin. But that’s a nitpick right?

## By Developers, For Developers

It’s clear the people behind Zed are power users. The keyboard-first design, the
snappy command palette, the smart defaults, everything feels intentional.

Zed is built with a strong opinion on how coding should feel. That’s no surprise,
considering its creators also helped shape Atom and Tree-sitter. They’ve clearly
taken those hard-earned lessons and distilled them into something leaner, faster,
and more focused.

From the ground up, Zed is designed for developers who live in their editor all day.
The keyboard-first navigation is thoughtfully crafted. Every action, from file switching
to running commands, can be done without leaving the keyboard. The command palette is
clean, fast, and actually useful.

You also notice the attention to detail in things like split panes, tab management,
and project navigation. Zed doesn’t drown you in features, it just gives you exactly
what you need, right when you need it. The default behaviors feel like they were
set by someone who actually codes for a living.

Zed encourages a “flow state” kind of development. There are no alerts constantly
popping up, no status bars fighting for your attention. It quietly fades into the
background and lets you focus on writing code.

Enough talk, let's get started with Zed now.

---

## Quick Start

You can download Zed from [here](https://zed.dev/download). Upon starting it for
the first time, you'll be prompted to select a key layout, with options like
VS Code, Atom, and more. You'll also be asked to choose a theme. Once that's
done, feel free to explore the editor and, if needed, customize settings
and keybindings as outlined below.

### Command Palette

The command palette is the spotlight in zed. You can search for any commands here
and execute them to see what they do.

Open command palette with `ctrl+shift+p`. This will open up a search interface
with some commands and auto-complete. These commands are how zed does any and
everything, from moving your cursor one line down when you hit down key or saving
your buffer when you hit `ctrl-s`.

The brilliance is in how these commands are neatly organized, making it intuitive
to figure out where each option belongs and how to use them.

For example, If I run the command `workspace:new terminal` from the command palette.
It will open up a new terminal instance, which you will see popping up at the
bottom of your screen. Similarly, running `editor:toggle comments` will convert
the current line under your cursor into a comment.

### Settings

You can open your settings stored at `~/.config/zed/settings.json` using the `zed:open
settings` command. Or by hitting `ctrl-,`. The file will either be empty or may have
a theme specified if you selected one.

You can change your settings by specifying the desired options with a value as shown :

```json
{
	"theme": "Catppuccin Mocha - No Italics",
	"tabs": {
		"git_status": true,
		"file_icons": true
	},
	"cursor_blink": false,
	"scrollbar": {
		"show": "always"
	},
	"restore_on_startup": "last_session",
	"confirm_quit": true,
	"inlay_hints": {
		"enabled": true,
		"show_type_hints": true,
		"show_parameter_hints": true,
		"show_other_hints": true
	}
}
```

How will you know about all the options? You can refer to the default settings,
which you can open using the `zed:open default settings` command. And pick your poison.

Feel free to use [my settings.json](https://github.com/commitsovercoffee/hope/blob/main/.config/settings.json) file for inspiration.

### Keybindings

You can open your keymap stored at `~/.config/zed/keymap.json` using the `zed:open
keymap` command. Which will probably be empty for a fresh zed install.

Each keymap requires a context, followed by a bindings object which contains
keymaps and commands as key value pairs, as shown below.

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
		"context": "Terminal",
		"bindings": {
			"ctrl-n": "workspace::NewTerminal"
		}
	}
]
```

The context refers to the active contexts or environments in which the keybinding
should be active. Notice that the first binding in both the workspace and terminal
contexts is the same i.e `ctrl-n`. However, since the context differs, the same keybinding
will perform different actions in each.

- In the workspace, it creates a new file.
- In the terminal, it opens a new terminal instance.

Now that you have a sense of how keybindings work in zed, you can open the
default keymap using the `zed:open default keymap` for reference and write
your own keymaps.

Feel free to use [my keymaps.json](https://github.com/commitsovercoffee/hope/blob/main/.config/keymaps.json) file for a slick keyboard workflow.

## Closing

For now, I’m sticking with Zed. If it keeps serving me well, it might just become
my new default. In the end, it’s just an editor. But when it works this well, you
kinda want to talk about it. And if you're wondering... yes, I ofcourse use vim motions with Zed :)
