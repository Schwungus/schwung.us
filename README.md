# schwungus.software

The website for all things Schwungus.

## Development (Windows)

Install dependencies:

```bash
py -m pip install -r requirements.txt
```

Rebuild every time you change something:

```bash
py build.py
```

Run this once inside the `out` directory:

```bash
py -m http.server 8080
```

And navigate to <http://localhost:8080>.
