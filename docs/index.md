# Welcome to My MkDocs Sample Site

This is a sample documentation site built with MkDocs by Joe Moore. MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation.

## What is MkDocs?

MkDocs is a tool for creating beautiful documentation websites from Markdown files. It features:

- **Simple**: Write your documentation in Markdown, MkDocs builds the site
- **Fast**: Build and serve your documentation locally in seconds
- **Beautiful**: Use themes to customize the look and feel
- **Extensible**: Add plugins and extensions for additional functionality

## Quick Start

1. Install MkDocs: `pip install mkdocs`
2. Create a new project: `mkdocs new my-project`
3. Preview your site: `mkdocs serve`
4. Build for production: `mkdocs build`

## Features

- **Search**: Built-in search functionality
- **Themes**: Multiple themes available (Material, Read the Docs, etc.)
- **Plugins**: Extend functionality with plugins
- **GitHub Integration**: Automatic deployment to GitHub Pages

!!! tip "Pro Tip"
    Use `mkdocs serve` during development for live reloading of your documentation.

## Sample Content Examples

=== "Code Examples"

    Here's how to include code blocks with syntax highlighting:

    ```python
    def hello_world():
        """A simple hello world function"""
        print("Hello, MkDocs!")
        return "success"

    # Usage
    result = hello_world()
    ```

    ```javascript
    // JavaScript example
    const greeting = (name) => {
        return `Hello, ${name}! Welcome to MkDocs.`;
    };

    console.log(greeting("Developer"));
    ```

=== "Admonitions"

    Material for MkDocs supports various admonition types:

    !!! note "Note"
        This is a note admonition that highlights important information.

    !!! tip "Tip"
        This tip provides helpful suggestions for users.

    !!! warning "Warning"
        This warning alerts users about potential issues.

    !!! danger "Danger"
        This danger alert indicates critical problems.

=== "Lists and Tables"

    **Ordered Lists:**
    1. First step in your process
    2. Second step with more details
    3. Third step to complete the task

    **Unordered Lists:**
    - Feature one
    - Feature two
        - Sub-feature A
        - Sub-feature B
    - Feature three

    **Tables:**

    | Feature | Description | Status |
    |---------|-------------|--------|
    | Search | Built-in search functionality | ✅ Available |
    | Themes | Multiple theme support | ✅ Available |
    | Plugins | Extensible plugin system | ✅ Available |
    | Mobile | Responsive design | ✅ Available |

=== "Icons and Emojis"

    Material for MkDocs includes thousands of icons:

    - :material-account: User accounts
    - :material-bell: Notifications
    - :material-cloud: Cloud services
    - :material-code: Code examples
    - :material-heart: Favorites

    **Emoji Support:**
    - 🎉 Celebration
    - 🚀 Getting started
    - 📚 Documentation
    - 🔍 Search functionality

## Next Steps

- [Getting Started](getting-started.md) - Learn the basics
- [API Reference](api-reference.md) - Explore the API
- [About](about.md) - More information about this project

