# Getting Started

This guide will help you get up and running with your MkDocs documentation site.

## Installation

First, make sure you have Python installed. Then install MkDocs:

```bash
pip install mkdocs
```

!!! note
    If you have multiple Python versions, use `python -m pip install mkdocs` to ensure it's installed for the correct Python version.

## Creating a New Site

Create a new MkDocs project:

```bash
mkdocs new my-awesome-docs
cd my-awesome-docs
```

This creates a basic project structure:

```
my-awesome-docs/
├── docs/
│   └── index.md
└── mkdocs.yml
```

## Configuration

Edit `mkdocs.yml` to customize your site:

```yaml
site_name: My Awesome Documentation
site_description: Documentation for my awesome project
theme:
  name: mkdocs
```

## Writing Documentation

Add your documentation files to the `docs/` directory. Use Markdown formatting:

```markdown
# My Page Title

This is some content.

## Section

More content here.

- List item 1
- List item 2
```

### Tabbed Content

Material for MkDocs supports tabbed content for organizing information:

=== "Installation"
    ```bash
    # Install MkDocs
    pip install mkdocs

    # Install Material theme
    pip install mkdocs-material
    ```

=== "Configuration"
    ```yaml
    # mkdocs.yml
    site_name: My Docs
    theme:
      name: material
    ```

=== "Usage"
    ```bash
    # Start development server
    mkdocs serve

    # Build for production
    mkdocs build
    ```

## Serving Locally

Start the development server:

```bash
mkdocs serve
```

Your site will be available at `http://localhost:8000` with live reloading.

## Building for Production

Build your site for deployment:

```bash
mkdocs build
```

This creates a `site/` directory with your static files.

## Next Steps

- Learn about [themes](https://www.mkdocs.org/user-guide/styling-your-docs/)
- Explore [plugins](https://www.mkdocs.org/user-guide/plugins/)
- Set up [deployment](https://www.mkdocs.org/user-guide/deploying-your-docs/)
