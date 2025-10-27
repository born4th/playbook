# Tab Test Page

This is a simple test page to verify tabs are working.

## Simple Tabs Test

=== "First"
    Content of first tab, finally it works
    
    Hello

=== "Second"  
    Content of second tab

=== "Third"
    Content of third tab

## Tabs Inside Admonitions

!!! note "Example with Tabs"
    You can nest tabs inside admonitions! Here's how to install different package managers:

    === "npm"
        ```bash
        npm install mkdocs
        ```

    === "pip"
        ```bash
        pip install mkdocs
        ```

    === "yarn"
        ```bash
        yarn add mkdocs
        ```

??? tip "Pro Tip with Tabs"
    Choose your preferred programming language:

    === "Python"
        Python is great for beginners and has excellent data science libraries.
        
        ```python
        def greet(name):
            return f"Hello, {name}!"
        
        print(greet("World"))
        ```

    === "JavaScript"
        JavaScript runs in the browser and on servers with Node.js.
        
        ```javascript
        const greet = (name) => {
            return `Hello, ${name}!`;
        };
        
        console.log(greet("World"));
        ```

    === "TypeScript"
        TypeScript adds static typing to JavaScript.
        
        ```typescript
        function greet(name: string): string {
            return `Hello, ${name}!`;
        }
        
        console.log(greet("World"));
        ```

!!! warning "Important Configuration Steps"
    Follow these steps carefully based on your OS:

    === "macOS"
        1. Install Homebrew if you don't have it
        2. Run: `brew install python3`
        3. Verify: `python3 --version`

    === "Linux"
        1. Update packages: `sudo apt update`
        2. Install: `sudo apt install python3`
        3. Verify: `python3 --version`

    === "Windows"
        1. Download Python from python.org
        2. Run the installer
        3. Check "Add Python to PATH"
        4. Verify: `python --version`

