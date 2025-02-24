---
layout: default
title: Intro to Bubble Tea
desc: A guide to brewing interactive CLI applications in Go.
date: '2022-03-12'
tags:
  - go
  - cli
  - tutorial
published: true
---

## Brewing Command-Line Apps : An Introduction to Bubble Tea

Bubble Tea is a Go library used for building interactive CLI (Command-Line Interface) applications. It's inspired by The Elm Architecture, a pattern for building web apps. Bubble Tea applications are structured around a central **Model** that represents the state of your application, and **Messages** that represent changes to that state.

In this blog, we will create a counter app to understand how we can start building cli apps with bubbletea.

### Step 1: Setting Up Your Go Environment

Before you begin, ensure you have Go installed on your system. You can download it from the official Go website. After installation, set up your Go workspace where you will write your code.

### Step 2: Creating a New Project

- Create a new directory for your project.
- Inside this directory, initialize a new Go module:

```bash
go mod init <module-name>
```

### Step 3: Installing Bubble Tea

In your project directory, install the Bubble Tea package using Go's package manager:

```bash
go get github.com/charmbracelet/bubbletea
```

This command will download and install the Bubble Tea library and its dependencies.

### Step 4: Writing Your First Bubble Tea Program

1. Create a new Go file, for example, main.go.
2. Import the Bubble Tea package at the beginning of your file:

```go
package main

import (
    "github.com/charmbracelet/bubbletea"
)
```

3. Define a Model. The Model represents the state of your application:

In Bubble Tea, a **Model** is a Go struct that encapsulates all the data and state information that your application needs to function and display its UI.
It's where you store variables, flags, and any other data relevant to how your application behaves and appears at any given moment.

```go
type Model struct {
    // Define your state here
    count int
}
```

> The **Model** acts as the single source of truth for your application's state. It's central to the Bubble Tea's architecture, ensuring a clear, manageable way to track and update your app's status.
> When the state changes, such as in response to user input or other events, the Model is updated accordingly. These changes then influence what the user sees and interacts with in the UI.

4. Implement the Init function.

To implement the **Init** function, you define a method on your **Model** struct. It's responsible for returning the initial command (tea.Cmd) when your application starts.
It sets the groundwork for what needs to happen as soon as the application begins running, before user interaction or other inputs are received.

```go

func (m Model) Init() tea.Cmd {
    // Initialize with no commands
    return nil
}
```

> The Init function is used to establish the initial conditions or state of your app. For example, it can start timers, initiate API calls, or send a message to the application to display initial data.

### Step 5: Handling Updates with Messages

Messages in Bubble Tea are a way to communicate events or changes that occur in the application. These could be user inputs, system events, or even custom events defined by the developer. They are used to trigger updates to the application’s state.

1. Define a message type. A message is typically defined as a struct in Go. For example, to handle incrementing a counter, you might define a message like this:

```go

type incrementMsg struct{}
```

2. Implement the Update function.

   The Update function is where the logic for handling different messages and updating the application's state is defined.
   It takes the current model (state) and a message as input, processes the message, and then returns the updated model.

In the Update function, you use a switch statement (or similar logic) to determine the type of the received message and how to handle it.
For our incrementMsg, the handling would increment the counter in the model:

```go

func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
    switch msg.(type) {
    case incrementMsg:
        m.count++
    }

    // Return updated model and no command
    return m, nil
}
```

### Step 6: Rendering Your Application

1. Implement the View function:

   The View function is tasked with presenting the current state of the application to the user. Essentially, it's how your application's state is visually represented in the terminal.
   It's called each time the application's model (state) is updated, ensuring that the display reflects the most recent changes.

In Bubble Tea, View is a method on the Model struct. It doesn't take any parameters except for a receiver (typically m for the model) and returns a string that represents what the user will see in the terminal. This string can include text, symbols, colors, and formatting that terminals understand.

```go

func (m Model) View() string {
    return fmt.Sprintf("Count: %d\nPress q to quit.\n", m.count)
}
```

### Step 7: Running Your Application

1. In your main function, start the Bubble Tea program with the initial model:

```go

func main() {
    p := tea.NewProgram(Model{})

    if err := p.Start(); err != nil {
        fmt.Printf("Alas, there's been an error: %v", err)
        os.Exit(1)
    }
}
```

### Step 8: Adding Interactivity

To make your application interactive, you can capture key presses and update your model accordingly.

1. Update your `Update` function to handle key presses:

   Update is a method of the Model struct. It takes a tea.Msg as input, which represents a message or event, such as a key press which is handled by a switch statement. It returns an updated Model and an optional command (tea.Cmd). `nil` in this case as no further action is needed.

```go

func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
    switch msg := msg.(type) {
    case tea.KeyMsg:
        switch msg.String() {
        case "q":
            return m, tea.Quit
        case " ":
            // Space bar was pressed
            return m, func() tea.Msg { return incrementMsg{} }
        }
    case incrementMsg:
        m.count++
    }
    return m, nil
}
```

### Step 9: Testing Your Application

Now that your basic application is ready, you can build and run it:

1. Build & run your application:

```bash
go run main.go
```

Press the space bar to increment the count and q to quit.

### Step 10: Review & Debug

start by closely examining the key components: the Model, Update, and View functions. Ensure that your Model accurately represents the application's state and that all required fields are initialized correctly. In the Update function, check how messages are processed; ensure that the logic for each message type is correctly handling state changes. Also, verify that the View function correctly reflects the state of the Model.

Utilize Go's built-in logging to trace message handling and state updates. For more intricate issues, consider employing a debugger tool like Delve, which allows you to set breakpoints and step through your code.

```go
package main

import (
    "fmt"
    "os"

    "github.com/charmbracelet/bubbletea"
)

// Model represents the state of your application
type Model struct {
    count int // counter state
}

// Init is the initial state of the program
func (m Model) Init() tea.Cmd {
    // Return nil as no initial commands are needed
    return nil
}

// Update processes messages and updates the model
func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
    switch msg := msg.(type) {
    case tea.KeyMsg:
        // Handle key press messages
        switch msg.String() {
        case "q":
            // If 'q' is pressed, quit the program
            return m, tea.Quit
        case " ":
            // If space bar is pressed, increment the counter
            m.count++
        }
    }
    // Return the updated model and no command
    return m, nil
}

// View renders the UI of the application
func (m Model) View() string {
    // Render the current state of the counter
    return fmt.Sprintf("Count: %d\nPress space to increment, 'q' to quit.\n", m.count)
}

func main() {
    // Initialize the program with the initial model
    p := tea.NewProgram(Model{})

    // Start the program
    if err := p.Start(); err != nil {
        fmt.Printf("Alas, there's been an error: %v", err)
        os.Exit(1)
    }
}
```

## Conclusion

As you become more comfortable, you can start adding more features, such as custom commands, handling more complex user inputs, integrating with other APIs, or even creating TUIs (Text-based User Interfaces) with richer layouts and interactions.

So, go ahead, experiment, build, and most importantly, enjoy the process of bringing your CLI ideas to life with Bubble Tea. Happy coding!

<hr>
