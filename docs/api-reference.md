# API Reference

This section provides detailed documentation for the project's API.

## Core Classes

### Document

The main document class for handling content.

#### Methods

##### `Document.__init__(title, content)`

Initialize a new document.

**Parameters:**

- `title` (str): The document title
- `content` (str): The document content in Markdown format

**Returns:** Document instance

##### `Document.render()`

Render the document to HTML.

**Returns:** str - The rendered HTML content

**Example:**
```python
doc = Document("My Doc", "# Hello World")
html = doc.render()
print(html)  # <h1>Hello World</h1>
```

**Advanced Example with Superfences:**
```python title="document_processor.py"
import markdown

class DocumentProcessor:
    def __init__(self, source_dir: str):
        self.source_dir = source_dir
        self.documents = []

    def process_all(self) -> list:
        """Process all documents in source directory"""
        for file_path in self._find_md_files():
            doc = self._load_document(file_path)
            self.documents.append(doc)
        return self.documents

    def _find_md_files(self) -> list:
        """Find all markdown files recursively"""
        # Implementation here...
        pass

    def _load_document(self, path: str) -> Document:
        """Load and parse a single document"""
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        return Document(path, content)
```

```json title="config.json"
{
  "processor": {
    "source_dir": "./docs",
    "output_dir": "./build",
    "extensions": [
      "toc",
      "fenced_code",
      "codehilite"
    ]
  },
  "theme": {
    "name": "mkdocs",
    "features": [
      "navigation.tabs",
      "search.highlight"
    ]
  }
}
```

### Theme

Handles site theming and styling.

#### Properties

- `name` (str): Theme name
- `css` (list): List of CSS files
- `js` (list): List of JavaScript files

#### Methods

##### `Theme.apply(site)`

Apply the theme to a site.

**Parameters:**

- `site` (Site): The site to apply the theme to

## Configuration Options

### Site Configuration

```yaml
site_name: My Documentation
site_description: Project documentation
site_author: John Doe
site_url: https://example.com
```

### Theme Configuration

```yaml
theme:
  name: mkdocs
  highlightjs: true
  hljs_languages:
    - yaml
    - python
```

### Plugin Configuration

```yaml
plugins:
  - search
  - minify:
      minify_html: true
```

## Error Handling

The API provides comprehensive error handling:

### Exceptions

- `DocumentError`: Raised when document processing fails
- `ThemeError`: Raised when theme application fails
- `BuildError`: Raised when site building fails

### Error Codes

| Code | Description |
|------|-------------|
| 1001 | Invalid document format |
| 1002 | Missing required field |
| 2001 | Theme not found |
| 2002 | Theme configuration error |
| 3001 | Build directory not writable |

## Examples

### Basic Usage

```python
from mkdocs import Document, Site

# Create a document
doc = Document("API Guide", "# API Documentation\n\nWelcome!")

# Create and build site
site = Site()
site.add_document(doc)
site.build()
```

### Advanced Configuration

```python
from mkdocs import Site, Theme

# Custom theme
theme = Theme(
    name="custom",
    css=["custom.css"],
    js=["custom.js"]
)

# Site with custom theme
site = Site(theme=theme, config={
    'site_name': 'Advanced Docs',
    'plugins': ['search', 'minify']
})
```
